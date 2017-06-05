import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/customer/userActions';
import TripForm from '../customer/forms/tripForm';
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
        listName: '',
        momentStartDate: moment().add(7, 'days'),
        startDate: moment().add(7, 'days').format('YYYY-MM-DD'),
        momentEndDate: moment().add(14, 'days'),
        endDate: moment().add(14, 'days').format('YYYY-MM-DD'),
        regionName: '',
        regionId: 0,
        bookmarks: []
      },
      errors: ''
    };
  }



  componentWillMount() {

    const bookmark = {
      "regionID": this.props.locationId,
      "subClass": this.props.locationType,
      "regionName": this.props.locationName,
      "regionNameLong": this.props.locationNameLong,
      "image": this.props.locationImage,
      "url": this.props.locationUrl,
      "id" : 1,
      "dateCreated": moment().format('YYYY-MM-DD')
    };

    console.log(this.props.locationImage);

    let trip = this.state.trip;
    trip.regionId = this.props.parentLocationId;
    trip.regionName = this.props.parentLocationNameLong;
    trip.bookmarks.push(bookmark);

    this.setState({trip: trip});

    /*
    if (this.props.removeBookmark)
    {
      this.setState({postingBookmark: true, title: 'Bookmark Removed', message: 'This bookmark has been removed.'});
      this.props.userActions.archiveBookmark(this.props.locationId)
        .then(() => {
          this.setState({postingBookmark: false, loadingBookmarks: true});
          this.props.userActions.getBookmarks()
            .then(() => {
              this.setState({loadingBookmarks: false});
            })
            .catch(error => {
              Toastr.error(error);
              this.setState({loadingBookmarks: false});
            });
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({postingBookmark: false});
        });
    }
    else {
      this.setState({postingBookmark: true});
      this.props.userActions.postBookmark(bookmark)
        .then(() => {
          this.setState({postingBookmark: false});
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({postingBookmark: false});
        });
    }
    */

    this.getTrips();
  }

  getTrips()
  {
    this.setState({loadingTrips: true, errors: ''});
    this.props.userActions.getTrips()
      .then(() => {
        this.setState({loadingTrips: false, errors: this.props.errorMessage});

        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          if (this.props.tripList.length > 0) {
            this.setState({wizardStep: 'List Trips'});
          } else {
            this.setState({wizardStep: 'Create Trip'});
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
    if ((this.state.trip.listName.length > 0) && (this.state.trip.regionId > 0)) {

      this.setState({isCreatingList: true, errors: ''});
      this.props.userActions.postTrip(this.state.trip)
        .then(() => {
          this.setState({isCreatingList: false, errors: this.props.errorMessage});

          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
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
    event.preventDefault();
    const field = event.target.name;
    let trip = this.state.trip;
    trip[field] = event.target.value;
    this.setState({trip: trip});
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    let trip = this.state.trip;
    trip.regionId = cityId;
    trip.regionName = city;
    this.setState({trip: trip});
  }

  onChangeStartDate(date) {
    let trip = this.state.trip;
    trip.momentStartDate = date;
    trip.startDate = date.format('YYYY-MM-DD');
    this.setState({trip: trip});
  }

  onChangeEndDate(date) {
    let trip = this.state.trip;
    trip.momentEndDate = date;
    trip.endDate = date.format('YYYY-MM-DD');
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
    this.props.userActions.postBookmark(e.target.getAttribute('data-id'), this.state.trip.bookmarks[0])
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
                          <tr>
                            <td className="tripBtn"><a href={trip.url}><i className="fa fa-external-link"></i></a></td>
                            <td>{trip.listName}</td>
                            <td className="tripBtn"><input className="btn btn-primary btn-sm" type="submit" onClick={this.onSaveBookmark} key={trip.id} value="Save" data-id={trip.id} /></td>
                          </tr>
                        );
                      })
                    }
                    </tbody>
                  </table>
                  <hr />
                  <p className="text-xs-right"><a href="#" onClick={this.createNewTrip}>Create a new list</a></p>
                </div>
              </div>
              <div className={this.state.wizardStep == "Create Trip" ? "row" : "hide"}>
                <div className="col-md-12">
                  <h3>Create a new Trip</h3>
                  <hr />
                  <p>Create a new trip by completing the form below.</p>
                </div>
                <TripForm onSubmit={this.createNewTripForm} onChange={this.changeField} regionName={this.state.trip.regionName} endDate={this.state.trip.momentEndDate} isCreatingList={this.state.isCreatingList} listName={this.state.trip.listName} onChangeAutoComplete={this.onChangeAutoComplete} onChangeStartDate={this.onChangeStartDate} onChangeEndDate={this.onChangeEndDate} startDate={this.state.trip.momentStartDate} errors={this.state.errors} />
              </div>
            <div className={this.state.wizardStep == "Thank you" ? "row" : "hide"}>
              <div className="col-md-12">
                <h3>Trip Created</h3>
                <hr />
                <p>Your Trip has been created and {this.props.locationName} has been added to it.</p>
              </div>
            </div>
            <div className={this.state.wizardStep == "Loading" ? "row" : "hide"}>
              <div className="col-md-12">
                Loading...
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
  parentLocationNameLong: PropTypes.string,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
  userActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  closeModal: PropTypes.func,
  removeBookmark: PropTypes.bool,
  tripList: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.user.isFetching,
    errorMessage: state.user.errorMessage,
    tripList: state.user.trips ? state.user.trips : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkLocation);
