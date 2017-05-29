import React, {PropTypes} from 'react';
import LocationForm from '../../components/locations/forms/locationForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import Toastr from 'toastr';

class EditLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeField = this.changeField.bind(this);
    this.submitLocationUpdate = this.submitLocationUpdate.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { location: this.props.location, wizardStep: 1, errors: '', isUpdating: false, isLoadingLocation: false };
  }

  changeField(event) {
    event.preventDefault();
    const field = event.target.name.replace('field', '');
    let location = this.state.location;
    location.formattedAddress[field] = event.target.value;
    this.setState({location: location});
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  submitLocationUpdate(e) {
    e.preventDefault();
    this.setState({isUpdating: true});
    console.log(this.state.location);
    this.props.actions.updateLocation(this.state.location)
      .then(() => {
        this.setState({isUpdating: false, errors: this.props.errorMessage, wizardStep: 2});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isUpdating: false, errors: error});
      });
  }

  render(){
    if (this.state.location) {
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Update This Location</h3>
                  <p>Help us keep our data up-to-date! Update details for the <strong>{this.props.locationName}</strong> using the form below.</p>
                </div>
                <LocationForm isUpdating={this.state.isUpdating} address={this.state.location.formattedAddress} onChange={this.changeField} onSubmit={this.submitLocationUpdate} errors={this.state.errors} />
              </div>
            </div>
            <div className={this.state.wizardStep == 2 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for the Update</h3>
                  <p>Thank you for updating this location. Please click <a href="#" onClick={this.closeModal}>here</a>
                    to close the window.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-xs-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                Loading
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

EditLocation.defaultProps = {
  locationId: 0,
  locationName: '',
  isSending: false,
  hasPosted: false
};

EditLocation.propTypes = {
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.location.isFetching,
    errorMessage: state.location.errorMessage,
    hasPosted: state.location.hasPosted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation);
