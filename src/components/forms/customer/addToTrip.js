import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/customer/userActions';
import TripForm from './tripForm';
let moment = require('moment');
import Toastr from 'toastr';

class BookmarkLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.createNewTripForm = this.createNewTripForm.bind(this);
    this.getTrips = this.getTrips.bind(this);
    this.changeField = this.changeField.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSaveBookmark = this.onSaveBookmark.bind(this);
    this.createNewTrip = this.createNewTrip.bind(this);
    this.addToExistingTrip = this.addToExistingTrip.bind(this);

    this.state = {
      wizardStep: 'Loading',
      postingBookmark: false,
      loadingBookmarks: false,
      loadingTrips: false,
      isCreatingList: false,
      trip: {
        tripName: '',
        tripDetails: {
          regionID: 0,
          regionName: '',
          regionUrl: '',
          image: '',
          description: '',
          momentStartDate: moment().add(7, 'days'),
          tripStart: moment().add(7, 'days').format('YYYY-MM-DD'),
          momentEndDate: moment().add(14, 'days'),
          tripEnd: moment().add(14, 'days').format('YYYY-MM-DD'),
          tripLength: 1,
          adults: 0,
          children: 0,
          type: '',
          tripPace: 'balanced',
          populateTrip: 'yes',
          tags: []
        },
        days: []
      },
      errors: ''
    };
  }

  componentWillMount() {
    const days = {
      "regionID": this.props.locationId,
      "activityType": this.props.parentLocationType,
      "regionType": this.props.locationType,
      "regionName": this.props.locationName,
      "regionNameLong": this.props.locationNameLong,
      "lengthValue": this.props.locationLength,
      "image": this.props.locationImage,
      "url": this.props.locationUrl,
      "latitude": this.props.latitude,
      "longitude": this.props.longitude,
      "price" : this.props.price,
      "length" : this.props.duration,
      "bookingUrl": this.props.bookingUrl,
      "id" : 1,
      "dateCreated": moment().format('YYYY-MM-DD')
    };

    let trip = this.state.trip;
    trip.tripDetails.regionID = this.props.parentLocationId;
    trip.tripDetails.regionName = this.props.parentLocationNameLong;
    trip.tripDetails.image = this.props.parentLocationImage;
    trip.tripDetails.regionUrl = this.props.parentLocationUrl;

    if (this.props.locationId > 0) {
      trip.days.push(days);
    }

    this.setState({trip: trip});

    if (this.props.locationId == 0) {
      this.setState({wizardStep: 'Create Trip'});
    }
    else {
      this.getTrips(false);
    }
  }

  getTrips(useThankyou)
  {
    this.setState({loadingTrips: true, errors: ''});
    this.props.userActions.getTrips(this.props.customerReference)
      .then(() => {
        this.setState({loadingTrips: false, errors: this.props.errorMessage});

        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          if (useThankyou) {

          }
          else {
            if (this.props.tripList.length > 0) {
              this.setState({wizardStep: 'List Trips'});
            } else {
              this.setState({wizardStep: 'Create Trip'});
            }
          }
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loadingTrips: false, errors: error});
      });
  }

  createNewTripForm(e) {
    e.preventDefault();
    if ((this.state.trip.tripName.length > 0) && (this.state.trip.tripDetails.regionID > 0)) {

      this.setState({isCreatingList: true, errors: ''});
      this.props.userActions.postTrip(this.state.trip, this.props.customerReference)
        .then(() => {
          this.setState({isCreatingList: false, errors: this.props.errorMessage});

          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
            this.getTrips(true);
            this.setState({wizardStep: 'Thank you'});
          }
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({isCreatingList: false, errors: error});
        });
    }
    else {
      this.setState({isCreatingList: false, errors: "Please complete the form to add a trip"});
    }
  }

  changeField(event) {
    const field = event.target.name;
    let trip = this.state.trip;

    switch (field)
    {
      case 'description':
      case 'populateTrip':
      case 'tripPace':
        trip.tripDetails[field] = event.target.value;
        break;
      case 'tags':
        this.addTags(trip, event);
        break;
      default:
        trip[field] = event.target.value;
        break;
    }

    this.setState({trip: trip});
  }

  addTags(trip, event) {
    let selectedTags = this.state.trip.tripDetails.tags;
    let isAlreadyInList = false;
    for (let i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i] == event.target.value)
      {
        isAlreadyInList = true;
        selectedTags.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      selectedTags.push(event.target.value);
    }
    trip.tripDetails.tags = selectedTags;
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType, cityImage)
  {
    let trip = this.state.trip;
    trip.tripDetails.regionID = cityId;
    trip.tripDetails.regionName = city;
    trip.tripDetails.image = cityImage;
    trip.tripDetails.regionUrl = cityUrl;
    this.setState({trip: trip});
  }

  onChangeStartDate(date) {
    let trip = this.state.trip;
    trip.tripDetails.momentStartDate = date;
    trip.tripDetails.tripStart = date.format('YYYY-MM-DD');
    this.setState({trip: trip});
  }

  onChangeEndDate(date) {
    let trip = this.state.trip;
    trip.tripDetails.momentEndDate = date;
    trip.tripDetails.tripEnd = date.format('YYYY-MM-DD');
    this.setState({trip: trip});
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  createNewTrip(e){
    e.preventDefault();
    this.setState({wizardStep: 'Create Trip'});
  }

  addToExistingTrip(e){
    e.preventDefault();
    this.setState({wizardStep: 'List Trips'});
  }

  onSaveBookmark(e) {

    this.setState({postingBookmark: true});
    this.props.userActions.postActivity(e.target.getAttribute('data-id'), this.state.trip.days[0])
      .then(() => {
        this.setState({postingBookmark: false, errors: this.props.errorMessage});

        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          this.setState({wizardStep: 'Thank you'});
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({postingBookmark: false});
      });
  }

  render(){
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className={this.state.wizardStep == "List Trips" ? "row" : "hide"}>
                <div className="col-md-12">
                  <h3>Add to existing list</h3>
                  <table className="table">
                    <tbody>
                    {
                      this.props.tripList.map(trip => {
                        return (
                          <tr key={trip.id}>
                            <td className="tripBtn"><a href={trip.url}><i className="fa fa-external-link"></i></a></td>
                            <td>{trip.tripName}</td>
                            <td>{moment(trip.tripDetails.tripStart).format('LL')} to {moment(trip.tripDetails.tripEnd).format('LL')}</td>
                            <td className="tripBtn"><input className="btn btn-primary btn-sm" type="submit" onClick={this.onSaveBookmark} key={trip.id} value="Add To Trip" data-id={trip.id} /></td>
                          </tr>
                        );
                      })
                    }
                    </tbody>
                  </table>
                  <hr />
                  <p className="btn priceRight"><a href="#" onClick={this.createNewTrip}>Create a new trip</a></p>
                </div>
              </div>
              <div className={this.state.wizardStep == "Create Trip" ? "row" : "hide"}>
                <div className="col-md-12">
                  <h3>Create a new trip</h3>
                  <hr />
                  <p>Create a new trip by completing the form below.</p>
                </div>
                <TripForm trip={this.state.trip} isCreatingList={this.state.isCreatingList} onChangeAutoComplete={this.onChangeAutoComplete} onChangeStartDate={this.onChangeStartDate} onChangeEndDate={this.onChangeEndDate} errors={this.state.errors} onSubmit={this.createNewTripForm} onChange={this.changeField} addToExistingTrip={this.addToExistingTrip} />
              </div>
            <div className={this.state.wizardStep == "Thank you" ? "row" : "hide"}>
              <div className="col-md-12">
                <h3>Trip Created</h3>
                <hr />
                <p className={this.props.locationName ? "" : "hide"}>Your Trip has been updated and {this.props.locationName} has been added to it.</p>
                <p className={this.props.locationName ? "hide" : ""}>Your Trip has been created. You can now build you trip by adding activities to it.</p>
              </div>
            </div>
            <div className={this.state.wizardStep == "Loading" ? "row" : "hide"}>
              <div className="col-md-12">
                Loading...
              </div>
            </div>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
      );
  }
}

BookmarkLocation.defaultProps = {
  locationId: 0,
  locationName: '',
  isSending: false,
  hasPosted: false,
  tripList: []
};

BookmarkLocation.propTypes = {
  parentLocationId: PropTypes.number,
  parentLocationName: PropTypes.string,
  parentLocationType: PropTypes.string,
  parentLocationNameLong: PropTypes.string,
  parentLocationImage: PropTypes.string,
  parentLocationUrl: PropTypes.string,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
  locationLength: PropTypes.string,
  userActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  customerReference: PropTypes.string,
  hasPosted: PropTypes.bool,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  price: PropTypes.string,
  duration: PropTypes.string,
  bookingUrl: PropTypes.string,
  closeModal: PropTypes.func,
  removeBookmark: PropTypes.bool,
  tripList: PropTypes.array
};

function mapStateToProps(state, ownProps) {

  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};
  return {
    isSending: state.user.isFetching,
    errorMessage: state.user.errorMessage,
    tripList: state.user.trips ? state.user.trips : [],
    customerReference: user.userId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkLocation);
