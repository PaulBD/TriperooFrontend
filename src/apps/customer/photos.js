import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import * as photoActions from '../../actions/customer/photoActions';
import * as modalActions from '../../actions/common/modalActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import PhotoList from '../../components/layout/cards/customer/photoList';
import CustomerHeader from '../../components/layout/customer/customerNavigation';
import Toastr from 'toastr';

class UserPhotos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.uploadImage = this.uploadImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.state = { loading: true, loadingPhotos: false };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingPhotos: true});
        this.loadPhotos();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingPhotos: false});
      });
  }

  loadPhotos() {
    this.props.photoActions.getUserPhotos(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingPhotos: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingPhotos: false});
      });
  }

  uploadImage(e) {
    e.preventDefault();
    this.props.modalActions.openPhoto(0, '', '', '');
  }

  removeImage(photoReference) {
    this.setState({loading: false, loadingPhotos: true});
    this.props.photoActions.removePhoto(this.props.currentUserId, photoReference)
      .then(() => {
        this.loadPhotos();
        this.setState({loading: false, loadingPhotos: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingPhotos: false});
      });
  }

  render(){
    document.title = 'Your Photos';

    if (!this.state.loading && !this.state.loadingPhotos) {

      return (
        <div>
          <CustomerHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated} isActiveUser={this.props.isActiveUser} pageName={!this.props.isActiveUser ? this.props.user.profile.name + "' Travel Photos" : 'Travel Photos'}/>
            <div className="container">
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row customerPhotos">
                  <div className="col-md-4">
                    <div className="card text-center createPhoto">
                      <div className="card-block">
                        <a href="#" onClick={this.uploadImage}><i className="fa fa-plus-circle" /></a>
                        <h4 className="card-title">A picture tells a thousand words</h4>
                        <p className="card-text">Upload your photos and share your experiences</p>
                        <a href="#" className="btn btn-primary"  onClick={this.uploadImage}>Upload Photos</a>
                      </div>
                    </div>
                  </div>
                  {
                      (this.props.photos.photoList.length > 0) ? this.props.photos.photoList.map(photo => {
                        return (
                          <PhotoList imageUrl={photo.url} key={photo.photoReference} imageReference={photo.photoReference} isActiveUser={this.props.isActiveUser} removeImage={this.removeImage}/>
                        );
                      }) : ""
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

UserPhotos.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  photoActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  photos: PropTypes.object,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    photos: state.photo.photos ? state.photo.photos : null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    photoActions: bindActionCreators(photoActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotos);


