import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserHeader from '../../components/layout/customer/customerHeader';
import UserProfile from '../../components/forms/customer/userProfile';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

class BookingHistory extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: false };
  }

  componentWillMount() {
    document.title = 'Booking History';
    window.scrollTo(0, 0);

    this.setState({loading: true});

    this.props.userActions.getUser(this.props.currentUserId)
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  render(){
    if (!this.state.loading) {
      let user = JSON.parse(localStorage.getItem('id_token'));
      return (
      <div>
        <UserHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated}/>
        <div className="container">
            <div className="gap gap"></div>
            <div className="row">
                <div className="col-md-3">
                  <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
                </div>
                <div className="col-md-9">
                    <div className="checkbox">
                        <label>
                            <input className="i-check" type="checkbox" />Show only current trip</label>
                    </div>
                    <table className="table table-bordered table-striped table-booking-history">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Order Date</th>
                                <th>Execution Date</th>
                                <th>Cost</th>
                                <th>Current</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-plane"></i><small>flight</small>
                                </td>
                                <td className="booking-history-title">London to New York City</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/25/2014</td>
                                <td>$350</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"><a className="btn btn-default btn-sm" href="#">Cancel</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-building-o"></i><small>hotel</small>
                                </td>
                                <td className="booking-history-title">InterContinental New York Barclay</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/25/2014 <i className="fa fa-long-arrow-right"></i> 4/30/2014</td>
                                <td>$1200</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"><a className="btn btn-default btn-sm" href="#">Cancel</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-dashboard"></i><small>car</small>
                                </td>
                                <td className="booking-history-title">Maserati GranTurismo</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/25/2014 <i className="fa fa-long-arrow-right"></i> 4/30/2014</td>
                                <td>$500</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"><a className="btn btn-default btn-sm" href="#">Cancel</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-bolt"></i><small>activity</small>
                                </td>
                                <td className="booking-history-title">Central Park Trip</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/27/2014</td>
                                <td>$0</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"></td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-bolt"></i><small>activity</small>
                                </td>
                                <td className="booking-history-title">Music Festival</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/28/2014</td>
                                <td>$100</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"><a className="btn btn-default btn-sm" href="#">Cancel</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-bolt"></i><small>activity</small>
                                </td>
                                <td className="booking-history-title">Adrenaline Madness</td>
                                <td>New york City</td>
                                <td>4/12/2014</td>
                                <td>4/29/2014</td>
                                <td>$210</td>
                                <td className="text-center"><i className="fa fa-check"></i>
                                </td>
                                <td className="text-center"><a className="btn btn-default btn-sm" href="#">Cancel</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-plane"></i><small>flight</small>
                                </td>
                                <td className="booking-history-title">London to Bali</td>
                                <td>Bali</td>
                                <td>2/12/2014</td>
                                <td>2/20/2014</td>
                                <td>$500</td>
                                <td className="text-center"><i className="fa fa-times"></i>
                                </td>
                                <td className="text-center"></td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-home"></i><small>rental</small>
                                </td>
                                <td className="booking-history-title">Modern Chic 3BR Villa Fanisa</td>
                                <td>Bali</td>
                                <td>2/12/2014</td>
                                <td>2/20/2014 <i className="fa fa-long-arrow-right"></i> 2/23/2014</td>
                                <td>$800</td>
                                <td className="text-center"><i className="fa fa-times"></i>
                                </td>
                                <td className="text-center"></td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-plane"></i><small>flight</small>
                                </td>
                                <td className="booking-history-title">London to San Fancisco</td>
                                <td>San Fancisco</td>
                                <td>1/01/2014</td>
                                <td>1/05/2014</td>
                                <td>$423</td>
                                <td className="text-center"><i className="fa fa-times"></i>
                                </td>
                                <td className="text-center"></td>
                            </tr>
                            <tr>
                                <td className="booking-history-type"><i className="fa fa-building-o"></i><small>hotel</small>
                                </td>
                                <td className="booking-history-title">Wellington Hotel</td>
                                <td>San Fancisco</td>
                                <td>1/01/2014</td>
                                <td>1/05/2014 <i className="fa fa-long-arrow-right"></i> 1/15/2014</td>
                                <td>$850</td>
                                <td className="text-center"><i className="fa fa-times"></i>
                                </td>
                                <td className="text-center"></td>
                            </tr>
                        </tbody>
                    </table>
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

BookingHistory.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory);
