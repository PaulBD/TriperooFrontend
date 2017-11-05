import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';

import SideNav from './sideNav';
import TripDetail from './tripDetail';

class DayByDay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showActivity = this.showActivity.bind(this);
    this.openMap = this.openMap.bind(this);
    this.state = {
      selectedDate: this.props.trip.tripDetails.tripStart,
      selectedDay: 0
    };
  }

  showActivity(e) {
    console.log(e.target.getAttribute('data-date'));
    console.log(e.target.getAttribute('data-day'));
    this.setState({ selectedDate: e.target.getAttribute("data-date"), selectedDay: e.target.getAttribute("data-day") });
  }

  openMap(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('data-longitude'));
    console.log(e.target.getAttribute('data-latitude'));
    console.log(e.target.getAttribute('data-name'));

    let mapMarker = [{
      regionName: e.target.getAttribute('data-name'),
      subClass: e.target.getAttribute('data-subclass'),
      url: e.target.getAttribute('data-url'),
      image: e.target.getAttribute('data-image'),
      locationCoordinates: {
        latitude: parseFloat(e.target.getAttribute('data-latitude')),
        longitude: parseFloat(e.target.getAttribute('data-longitude'))
      }
    }]
    this.props.modalActions.openMapSideBar(parseFloat(e.target.getAttribute('data-longitude')), parseFloat(e.target.getAttribute('data-latitude')), e.target.getAttribute('data-name'), 13, mapMarker, "Trip");
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
                        this.props.trip.days.map((day, index)=> {
                          return (<TripDetail day={day} leftAlign={(index%2 ? false:true)} key={index} openMap={this.openMap} />);
                        })
                      }
                      <article className="timeline-entry begin">
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
              <a  name="add"></a>
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
};


DayByDay.propTypes = {
  trip: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayByDay);
