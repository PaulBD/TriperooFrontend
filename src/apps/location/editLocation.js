import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as cmsActions from '../../actions/location/cmsActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import LocationForm from '../../components/forms/location/editLocation';

let titleCase = require('title-case');
let _ = require('lodash');

class LocationEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.submitLocationUpdate = this.submitLocationUpdate.bind(this);
    this.state = {
      isUpdating: false,
      isLoadingLocation: false,
      hasLoaded: false,
      locationId: 0,
      locationNameLong: '',
      locationSubClass: '',
      formattedAddress: [],
      errors:'',
      location: {},
      wizardStep: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  onChangeName(event) {
    event.preventDefault();
    let location = this.state.location;
    location.regionName = event.target.value;
    this.setState({location: location});
  }

  onChangeAddress(event) {
    event.preventDefault();
    const field = event.target.name.replace('field', '');
    let location = this.state.location;
    location.formattedAddress[field] = event.target.value;
    this.setState({location: location});
  }

  onChangeContact(event) {
    event.preventDefault();
    const field = event.target.name;
    let location = this.state.location;
    location.contactDetails[field] = event.target.value;
    this.setState({location: location});
  }

  onChangeLocation(event) {
    event.preventDefault();
    const field = event.target.name;
    let location = this.state.location;
    location.locationCoordinates[field] = event.target.value;
    this.setState({location: location});
  }

  onChangeTags(event) {
    let newTags = event.target.value;
    let tags = newTags.split(',');
    let location = this.state.location;
    location.tags = tags;
    this.setState({location: location});
  }

  onChangeDescription(event) {
    event.preventDefault();
    let location = this.state.location;
    location.summary.en = event.target.value;
    this.setState({location: location});
  }

  submitLocationUpdate(e) {
    e.preventDefault();
    this.setState({isUpdating: true});
    let isValid = true;
    let errors = '';

    if (this.state.location.regionName == undefined || this.state.location.regionName.length == 0) {
      errors += '<li>Enter a locations name</li>';
      isValid = false;
    }

    if (this.state.location.formattedAddress == undefined || this.state.location.formattedAddress[0] == undefined) {
      errors += '<li>Add the locations address</li>';
      isValid = false;
    }

    if (this.state.location.locationCoordinates == undefined) {
      errors += '<li>Add the locations coordinates</li>';
      isValid = false;
    }

    if (isValid) {
      this.props.cmsActions.updateCMSLocation(this.state.location)
        .then(() => {
          this.setState({isUpdating: false, errors: this.props.errorMessage, wizardStep: 2});
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({isUpdating: false, errors: error});
        });
    }
    else {
      this.setState({ errors: errors });
    }

  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => {
        this.setState({
          isLoadingLocation: false
          , hasLoaded: true
          , locationId: this.props.locationId
          , locationNameLong: this.props.location.regionNameLong
          , locationSubClass: this.props.location.subClass
          , location: _.cloneDeep(this.props.location)
        });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  render(){
    document.title = 'Edit details for ' + titleCase(this.props.location.regionName) + ' in ' + titleCase(this.props.location.parentRegionName);
    if (this.state.hasLoaded)
    {
      return (
        <div>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className={this.state.wizardStep == 1 ? "row" : "hide"}>
              <div className="col-md-12">
                <h3>Request to edit this location</h3>
                <p>Did you come across missing or incorrect information for {titleCase(this.props.location.regionName)}? You can submit an
                  update or correction to us via this form. Just edit or fill in the fields below. Please note
                  that Triperoo publishes unbiased descriptions, and we don't promote any one business over others, so we
                  reserve the right to edit submissions accordingly. Thanks for looking out!</p>
              </div>
              <LocationForm onChangeName={this.onChangeName}
                            onChangeAddress={this.onChangeAddress}
                            onChangeContact={this.onChangeContact}
                            onChangeLocation={this.onChangeLocation}
                            onChangeDescription={this.onChangeDescription}
                            onChangeTags={this.onChangeTags}
                            onSubmit={this.submitLocationUpdate}
                            address={this.state.location.formattedAddress ? this.state.location.formattedAddress : []}
                            isUpdating={this.state.isUpdating}
                            locationUrl={this.props.location.url}
                            errors={this.state.errors}
                            longitude={this.state.location.locationCoordinates ? this.state.location.locationCoordinates.longitude : 0}
                            latitude={this.state.location.locationCoordinates ? this.state.location.locationCoordinates.latitude : 0}
                            description={this.state.location.summary.en ? this.state.location.summary.en : ''}
                            facebookUsername={this.state.location.contactDetails.facebookUsername ? this.state.location.contactDetails.facebookUsername : ''}
                            twitter={this.state.location.contactDetails.twitter ? this.state.location.contactDetails.twitter : ''}
                            instagram={this.state.location.contactDetails.instagram ? this.state.location.contactDetails.instagram : ''}
                            locationType={this.state.location.subClass ? this.state.location.subClass : ''}
                            locationName={this.state.location.regionName ? this.state.location.regionName : ''}
                            editLocation={false}
                            tags={this.state.location.tags ? this.state.location.tags.toString() : ''}
                            telephone={this.state.location.contactDetails.phone ? this.state.location.contactDetails.phone : ''}
                            websiteUrl={this.state.location.contactDetails.websiteUrl ? this.state.location.contactDetails.websiteUrl : ''}
                            buttonName="Update Location"/>
            </div>
            <div className={this.state.wizardStep == 2 ? "row" : "hide"}>
              <div className="col-md-12">
                <h3>Your request has been submitted!</h3>
                <p>We'll review your request and update our information. Thanks for taking the time to help us keep our database up-to-date! Have any suggestions on how to improve our form? Email us at info@triperoo.co.uk.</p>
                <p><a href={this.props.location.url} className="btn btn-secondary" title="Suggest Location">Back</a></p>

                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
                <div className="gap"></div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

LocationEdit.defaultProps = {
  isFetching: false,
  isAuthenticated: false
};

LocationEdit.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  cmsActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    cmsActions: bindActionCreators(cmsActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationEdit);
