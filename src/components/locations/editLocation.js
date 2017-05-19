import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';

class EditLocation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);
    this.handleCountyChange = this.handleCountyChange.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.submitLocationUpdate = this.submitLocationUpdate.bind(this);
    this.closeModal = this.closeModal.bind(this);
   
    this.state = { address: '', town: '', county: '', postCode: '', telephone: '', email: '', wizardStep: 1 };
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleTownChange(e) {
    this.setState({ town: e.target.value });
  }

  handleCountyChange(e) {
    this.setState({ county: e.target.value });
  }

  handlePostcodeChange(e) {
    this.setState({ postcode: e.target.value });
  }

  handleTelephoneChange(e) {
    this.setState({ telephone: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  submitLocationUpdate(e) {
    e.preventDefault();

    const location = { "locationId": this.props.locationId, 
      "address": this.refs.address.value.trim(), 
      "town": this.refs.town.value.trim(), 
      "county": this.refs.county.value.trim(), 
      "postcode": this.refs.postcode.value.trim(), 
      "telephone": this.refs.telephone.value.trim(), 
      "email": this.refs.email.value.trim() 
    };
    console.log(location);
    this.props.actions.updateLocation(this.props.locationId, location);
  }

  render(){
    return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <form className="modalForm" onSubmit={this.submitLocationUpdate}>
                  <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                    <div className="bg-danger form-danger">
                    {this.props.errorMessage}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h3>Update This Location</h3>
                    <p>Help us keep our data up-to-date! Update details for the <strong>{this.props.locationName}</strong> using the form below.</p>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" ref="address" className="form-control" value={this.state.address} onChange={this.handleAddressChange}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Town/City</label>
                        <input type="text" ref="town" className="form-control" value={this.state.town} onChange={this.handleTownChange}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>County</label>
                        <input type="text" ref="county" className="form-control" value={this.state.county} onChange={this.handleCountyChange}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Postcode</label>
                        <input type="text" ref="postcode" className="form-control" value={this.state.postcode} onChange={this.handlePostcodeChange}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Telephone</label>
                        <input type="text" ref="telephone" className="form-control" value={this.state.telephone} onChange={this.handleTelephoneChange}/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" ref="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                  </div>
                  <div className="col-md-12 text-xs-center">
                      <input className="btn btn-primary" type="submit" value="Update Location" />
                  </div>
                </form>
              </div>
            </div>
            <div className={this.state.wizardStep == 2 ? "modal-body" : "modal-body hide"}>
              <div className="row">
                <div className="col-md-12">
                  <h3>Thanks for the Update</h3>
                  <p>Thank you for updating this location. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
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
