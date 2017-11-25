import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';
import * as userActions from '../../../actions/customer/userActions';
import Toastr from 'toastr';

import SideNav from './sideNav';
import TripDetail from './tripDetail';

class DayByDay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showActivity = this.showActivity.bind(this);
    this.openMap = this.openMap.bind(this);
    this.removeActivity = this.removeActivity.bind(this);
    this.state = {
      selectedDate: this.props.trip.tripDetails.tripStart,
      selectedDay: 0
    };
  }

  showActivity(e) {
    this.setState({ selectedDate: e.target.getAttribute("data-date"), selectedDay: e.target.getAttribute("data-day") });
  }

  openMap(e) {
    e.preventDefault();

    let mapMarker = [{
      regionName: e.target.getAttribute('data-name'),
      subClass: e.target.getAttribute('data-subclass'),
      url: e.target.getAttribute('data-url'),
      image: e.target.getAttribute('data-image'),
      locationCoordinates: {
        latitude: parseFloat(e.target.getAttribute('data-latitude')),
        longitude: parseFloat(e.target.getAttribute('data-longitude'))
      }
    }];

    this.props.modalActions.openMapSideBar(parseFloat(e.target.getAttribute('data-longitude')), parseFloat(e.target.getAttribute('data-latitude')), e.target.getAttribute('data-name'), 13, mapMarker, "Trip");
  }

  removeActivity(e) {
    e.preventDefault();

    this.props.userActions.archiveActivity(e.target.getAttribute('data-tripId'), e.target.getAttribute('data-activityId'))
      .then(() => {
        Toastr.success("Activity has been removed from your trip");
      })
      .catch(error => {
        Toastr.error(error);
      });
  }

  render() {

    let attractionsUrl = this.props.trip.tripDetails.regionUrl + '/attractions';
    let hotelUrl = this.props.trip.tripDetails.regionUrl + '/hotels';
    let foodUrl = this.props.trip.tripDetails.regionUrl + '/restaurants';

    return (
      <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h4 className="tripDetailTitle"><small>Day by Day</small><br />{this.props.trip.tripDetails.regionName}</h4>
                    </div>
                    <SideNav tripSummary={this.props.trip.tripDetails.tripSummary} selectedDate={this.state.selectedDate} showActivity={this.showActivity}/>
                  </div>
                  <div className="gap gap-small"></div>
                  <div className="row">
                    <div className="timeline-centered">
                      {
                        this.props.trip.tripDetails.tripSummary.length > 0 ? this.props.trip.tripDetails.tripSummary.map((day, index)=> {
                          return ( <TripDetail tripId={this.props.trip.id} day={day} key={index} openMap={this.openMap} removeActivity={this.removeActivity}/>);
                        }, this) : <div>No trips</div>
                      }
                      <article className={this.props.trip.tripDetails.tripSummary.length > 0 ? "timeline-entry begin":"hide"}>
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon">
                          <i className="entypo-flight"></i>
                        </div>
                      </div>
                    </article>
                    </div>
                  </div>
                </div>
              </div>
              <a name="add"></a>
              <div className="row">
                <div className="col-md-12 text-center">
                  <hr />
                  <a href={attractionsUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add Attractions</a>&nbsp;
                  <a href={foodUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add Places to Eat</a>&nbsp;
                  <a href={hotelUrl} className="btn btn-primary"><i className="fa fa-plus" /> Add a Place to Stay</a>
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
      </div>
    );
  }
}


DayByDay.propTypes = {
  trip: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayByDay);
