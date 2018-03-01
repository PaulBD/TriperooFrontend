import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reservationActions from '../../actions/customer/reservationActions';

class CancelHotelPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCancellationChange = this.handleCancellationChange.bind(this);
    this.submitCancellation = this.submitCancellation.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      cancellation: ''
      , itineryId: this.props.itineryId
      , confirmationId: this.props.confirmationId
      , postingCancellation: false
      , errorMessage: ''
      , showCancellationThankyou: false
    };
  }

  handleCancellationChange(e) {
    this.setState({ cancellation: e.target.value });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  submitCancellation(e) {
    e.preventDefault();
    this.setState({errorMessage: ''});

    if (this.state.cancellation.length == 0)
    {
      this.setState({errorMessage: 'Please give a valid cancellation reason'});
    }
    else {
      this.setState({postingCancellation: true});
      this.props.reservationActions.cancelHotelItinery(this.state.itineryId, this.state.confirmationId, this.state.cancellation)
        .then(() => {
          this.loadBookings();
          this.setState({postingCancellation: false, showCancellationThankyou:true});
        })
        .catch(error => {
          this.setState({postingCancellation: false});
        });
    }
  }

  loadBookings() {
    this.props.reservationActions.getHotelItinery()
      .then(() => {
        this.setState({isLoadingBookings: false});
      })
      .catch(error => {
        this.setState({isLoadingBookings: false});
      });
  }


  render(){
    return (
      <div className="modal-dialog modelReviewAuthentication" role="document">
        <div className="modal-content">
          <div className={!this.props.postingCancellation ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <form className="modalForm" onSubmit={this.submitCancellation}>
                <div className={(this.props.errorMessage != undefined && this.props.errorMessage.length > 0) || this.state.errorMessage ? 'col-md-12' : 'col-md-12 hide'}>
                  <div className="bg-danger form-danger">
                    {this.props.errorMessage ? this.props.errorMessage : this.state.errorMessage}
                  </div>
                </div>
                <div className="col-md-12">
                  <h4>{this.props.hotelName}</h4>
                </div>
                <div className="col-md-12">
                  <p>Please let us know why you are cancelling this hotel.</p>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <select className="form-control" ref="cancellation" name="cancellation" value={this.state.cancellation} onChange={this.handleCancellationChange}>
                      <option value="">Choose cancellation reason</option>
                      <option value="HOC">Hotel asked me to cancel</option>
                      <option value="COP">Change of plans</option>
                      <option value="FBP">Found a better price</option>
                      <option value="FBH">Found a better hotel</option>
                      <option value="CNL">Decided to cancel my plans</option>
                      <option value="NSY">Rather not say</option>
                      <option value="OTH">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <input className="btn btn-primary" type="submit" value="Cancel Hotel" disabled={this.state.postingCancellation} />
                </div>
              </form>
            </div>
          </div>
          <div className={this.props.showCancellationThankyou ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h3>Cancellation Received!</h3>
                <p>You cancellation is complete. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <p className="closeText mb-0"><a href="#" onClick={this.closeModal}>Close</a></p>
          </div>
        </div>
      </div>
    );
  }
}

CancelHotelPopup.defaultProps = {
  isSending: false,
  hasPosted: false
};

CancelHotelPopup.propTypes = {
  hotelName: PropTypes.string.isRequired,
  itineryId: PropTypes.string.isRequired,
  confirmationId: PropTypes.string.isRequired,
  reservationActions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  hasPostedCancellation: PropTypes.bool,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.reservation.isFetching,
    errorMessage: state.reservation.cancelReservation ? state.reservation.cancelReservation.hotelRoomCancellationResponse.eanWsError ? state.reservation.cancelReservation.hotelRoomCancellationResponse.eanWsError.presentationMessage : '' : '',
    hasPostedAnswer: state.reservation.hasPostedCancellation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reservationActions: bindActionCreators(reservationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelHotelPopup);
