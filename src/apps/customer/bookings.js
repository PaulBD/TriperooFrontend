import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as reservationActions from '../../actions/customer/reservationActions';
import * as modalActions from '../../actions/common/modalActions';
import * as userActions from '../../actions/customer/userActions';
import CustomerHeader from '../../components/layout/customer/customerNavigation';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
let moment = require('moment');

class BookingHistory extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cancelHotel = this.cancelHotel.bind(this);
    this.state =
      {
        isLoadingUser: true
        , isLoadingBookings: true
      };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadUser();
  }

  loadUser() {
    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({isLoadingUser: false});
        this.loadBookings();
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingUser: false});
      });
  }

  loadBookings() {
    this.props.reservationActions.getHotelItinery()
      .then(() => {
        this.setState({isLoadingBookings: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingBookings: false});
      });
  }

  cancelHotel(e) {
    e.preventDefault();
    this.props.modalActions.openCancelHotel(e.target.getAttribute('data-hotelName'), e.target.getAttribute('data-itineryId'), e.target.getAttribute('data-confirmationId'));
  }

  render(){
    document.title = 'Booking History';

    if (!this.state.isLoadingUser && !this.state.isLoadingBookings) {

      return (
        <div>
          <CustomerHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated} isActiveUser={this.props.isActiveUser} pageName="Your Bookings"/>
          <div className="container">
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-12">

                  {
                    (this.props.reservations.length > 0) ? <div className="card-columns">{this.props.reservations.map((res, i) => {

                      let statusText = <a href="#" onClick={this.cancelHotel} data-hotelName={res.expediaReservation.hotelName} data-itineryId={res.expediaReservation.itineryId} data-confirmationId={res.expediaReservation.confirmationId}>Cancel Reservation</a>;

                      if (res.status == 'Cancelled')
                      {
                        statusText = 'Cancelled';
                      }

                      return (
                        <div className="card" key={i}>
                          <div className="card-block">
                            <h5 className="card-title"><i className="fa fa-building-o"></i> {res.expediaReservation.hotelName}</h5>
                            <p className="card-text">
                              <i className="fa fa-clock-o"></i> {moment(res.expediaReservation.arrivalDate).format('LL')} to {moment(res.expediaReservation.departureDate).format('LL')}
                              <br />
                              <i className="fa fa-credit-card"></i> {res.expediaReservation.rate.total} {res.expediaReservation.rate.currencyCode}</p>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted">{statusText} &bull; Booked {moment(res.dateCreated).format('LL')}</small>
                          </div>
                        </div>
                      );
                    })}</div> : <p>You have made no hotel reservations. Click <a href="/hotels">here</a> to make a reservation</p>
                  }

                <div className="gap gap-small"></div>
                <p><small>Currently we only support hotel bookings through Triperoo, please speak to the other travel providers if booking an attraction, flight or restaurant via our <a href="/support">support page</a>.</small></p>

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

BookingHistory.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  reservationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  reservations: PropTypes.array,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid.trim() == user.userId.trim() : false,
    user: state.user.user ? state.user.user : null,
    reservations: state.reservation.reservations ? state.reservation.reservations : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    reservationActions: bindActionCreators(reservationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory);
