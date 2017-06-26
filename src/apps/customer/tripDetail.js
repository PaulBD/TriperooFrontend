import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentWillMount() {
    document.title = 'Your Reviews';
    window.scrollTo(0, 0);

    this.setState({loading: true, loadingTrip: false});

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false, loadingTrip: true});

        this.props.userActions.getTrip(this.props.tripId)
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
    console.log(this.props.tripId);
    console.log(this.props.trip);

    if (!this.state.loadingTrip) {
      return (
        <div>
          <div className="container">
            <div className="gap gap"></div>
            <div className="row">
              <div className="col-md-12">

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
