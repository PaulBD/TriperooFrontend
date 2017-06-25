import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserHeader from '../../components/customer/user/userHeader';
import TriperooLoader from '../../components/common/triperooLoader';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import Toastr from 'toastr';

class CustomerTrips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentDidMount() {
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
          <UserHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated}/>
          <div className="container">
            <div className="gap gap"></div>
            <div className="row">
              <div className="col-md-12">
                <Timeline>
                  <TimelineEvent
                    title="Introduction to Redux in React applications"
                    createdAt="2016-09-12 10:06 PM"
                    icon={<i className="fa fa-envelope"/>}
                    iconColor="#757575"
                    style={{fontWeight: 400, color: "#828282c"}}
                    buttons={<i />}
                    container="card"
                  >
                    A DIY workshop on using React with Redux to build a Instagram clone
                  </TimelineEvent>
                </Timeline>
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
