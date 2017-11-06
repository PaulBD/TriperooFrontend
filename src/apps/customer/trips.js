import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import * as modalActions from '../../actions/common/modalActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import TripItem from '../../components/layout/cards/customer/tripItem';
import CustomerHeader from '../../components/layout/customer/customerNavigation';
import Toastr from 'toastr';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createTrip = this.createTrip.bind(this);
    this.state = { loading: true, isLoadingTrips: false };
  }

  componentWillMount() {
    document.title = 'Your Trips';
    window.scrollTo(0, 0);

    this.setState({loading: true, isLoadingTrips: true});

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, isLoadingTrips: true});
        this.props.userActions.getTrips(this.props.currentUserId)
          .then(() => {
            this.setState({loading: false, isLoadingTrips: false});
          })
          .catch(error => {
            Toastr.error(error);
            this.setState({loading: false, isLoadingTrips: false});
          });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, isLoadingTrips: false});
      });
  }

  createTrip(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(0, '', '', '', '', 0, '', '', '', '', '', '', false, 0, 0, '', '', '');
  }

  render(){

    let addTrip = '';
    if (this.props.isActiveUser) {
      if (this.props.tripList != null  && this.props.tripList.length < 3 ) {

        addTrip = (
          <div className="col-md-4">
            <div className="card text-center createTripBlank">
              <div className="card-block">
                <a href="#" onClick={this.createTrip}><i className="fa fa-plus-circle" /></a>
                <h4 className="card-title">Inspire Someone & Share Experiences</h4>
                <p className="card-text">Create a new trip that can be shared<br />with friends and family</p>
                <a href="#" className="btn btn-primary"  onClick={this.createTrip}>Create Trip</a>
              </div>
            </div>
          </div>
        );
      }
    }

    if ((!this.state.loading) && (!this.state.isLoadingTrips)) {
      console.log(this.props.tripList);
      let profileUrl = this.props.user && this.props.user.profile ? this.props.user.profile.profileUrl : '';
      return (
        <div>
          <CustomerHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated} isActiveUser={this.props.isActiveUser} pageName={!this.props.isActiveUser ? this.props.user.profile.name + "' Trips" : 'Trips'}/>

          <div className="container">
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {
                    this.props.tripList != null && this.props.tripList.length > 0 ? this.props.tripList.map(function(trip, i) { return (<TripItem trip={trip} key={trip.id} parentUrl={profileUrl} position={i} cssClass="col-md-4" />);}) : this.props.isActiveUser ? '' : <div className="col-md-12 alert alert-info text-center" role="alert">{this.props.user.profile.name} hasn't created any trips yet.</div>
                  }
                  {addTrip}
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

CustomerTrips.defaultProps = {
  tripList: []
};

CustomerTrips.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  tripList: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : {},
    tripList: state.user.trips ? state.user.trips : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTrips);
