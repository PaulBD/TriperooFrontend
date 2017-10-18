import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import UserProfile from '../../components/forms/customer/userProfile';
let titleCase = require('title-case');

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentWillMount() {
    document.title = 'Your Reviews';
    window.scrollTo(0, 0);

    this.setState({loading: true, loadingTrip: true});

    console.log(this.props.tripId);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingTrip: true});

        this.props.userActions.getTrip(this.props.tripId, this.props.currentUserId)
          .then(() => {
            this.setState({loading: false, loadingTrip: false});
          })
          .catch(error => {
            Toastr.error(error);
            this.setState({loading: false, loadingTrip: false});
          });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false, loadingTrip: false});
      });


  }

  render(){
    if (!this.state.loadingTrip) {
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-12">
              <span className="float-right text-sm-right"><a href={this.props.user && this.props.isActiveUser ? this.props.user.profile.profileUrl + "/trips" : this.props.user.profile.profileUrl}>Back to Trips</a></span>
              <h5 className="mb-2">{this.props.trip.listName}</h5>
              <hr className="pageTitle"/>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    {
                      this.props.trip != null && this.props.trip.bookmarks.length > 0 ? this.props.trip.bookmarks.map(function(location, i)
                      {
                        const bgImage = {
                          backgroundImage: "url(" + location.image + ")"
                        };

                        return (
                          <div className="col-md-4" key={location.id}>
                            <div className="hover-img bgImage" style={bgImage}>
                              <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                                <a  href={location.url}>
                                  <div className="text-small">
                                    <h5>{location.regionName.length > 31 ? location.regionName.substring(0,31) + '...' : location.regionName}</h5>
                                    <p className={location.subClass.length == 0 ? "hide" : ""}>{titleCase(location.subClass)}</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      }) : <p>You have no bookmarks in your trip</p>
                    }
                  </div>
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

CustomerTrips.defaultProps = {
  trip: {},
  tripId: 0
};

CustomerTrips.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  trip: PropTypes.object,
  tripId: PropTypes.int
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    tripId: ownProps.params.tripId,
    user: state.user.user ? state.user.user : null,
    trip: state.user.trip ? state.user.trip : null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTrips);
