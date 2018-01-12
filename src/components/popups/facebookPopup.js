import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import Loader from '../loaders/contentLoader';
import FacebookForm from '../forms/authentication/facebookForm';
import Toastr from 'toastr';

class Facebook extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.state = {
      errors:'',
      isLoggingIn: false,
      creatingUser: false,
      city: '',
      cityId: 0
    };
  }

  submitForm(e) {
    e.preventDefault();

    this.props.actions.loginFacebookUser({ accessToken: this.props.facebookResponse.accessToken, emailAddress: this.props.facebookResponse.email, facebookId: this.props.facebookResponse.userID, name: this.props.facebookResponse.name, imageUrl: this.props.facebookResponse.picture.data.url, cityId: this.state.cityId, city: this.state.city})
      .then(() => {
        this.setState({creatingUser: false});
        this.props.closeModal();
      })
      .catch(error => {
        Toastr.error(error.response.status == 400 ? error.response.data.responseStatus.message : "An error has occurred whilst authenticating using Facebook");
        this.setState({creatingUser: false});
      });
  }

  closeLoginModal(e) {
    if (e != null) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    this.setState({city: city, cityId: cityId});
  }

  render(){
    return (
        <div className="modal-dialog modelAuthentication" role="document">
          <div className={!this.state.creatingUser && !this.state.isLoggingIn ? "modal-content" : "modal-content hide"}>
            <div className="modal-body">
              <div className="row">
                <div className="gap gap-mini"></div>
                <FacebookForm errors={this.state.errors} isUpdating={this.state.creatingUser} onSubmit={this.submitForm} onChangeAutoComplete={this.onChangeAutoComplete} city=""/>
              </div>
            </div>
            <div className="modal-footer text-center">
              <p className="closeText mb-0"><a href="#" onClick={this.closeLoginModal}>Close</a></p>
            </div>
          </div>
          <div className={this.state.creatingUser || this.state.isLoggingIn ? "modal-content" : "modal-content hide"}>
            <Loader showLoader={true} />
          </div>
        </div>
    );
  }
}

Facebook.defaultProps = {
  isAuthenticated: false,
  isFetching: false
};

Facebook.propTypes = {
  facebookResponse: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage,
    hasSentPassword: state.authentication.hasSentPassword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
