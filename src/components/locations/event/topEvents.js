import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../../actions/location/event/eventsActions';
import EventList from './eventList';

class ByLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadEvents(this.props.locationId, 6, 0);
  }

  render(){

    if (this.props.locationEvents != undefined)
    {
      let allEventsUrl = this.props.baseUrl + '/events';

      return (
        <div className="row row-nowrap greyBg events">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Events This Week</h3>
              </div>
              <div className="col-md-6">
              <p>Discover the best events happening in <strong>{this.props.locationName}</strong> every week.</p>
              </div>
              <div className="col-md-6 text-right">
                <p><a href={allEventsUrl}>View all events</a></p>
              </div>
              <div className="col-md-12">
                  <EventList locationEvents={this.props.locationEvents} isFeature={false} isFetching={this.props.isFetching} cssClass="col-md-2"/>
              </div>
            </div> 
          </div> 
        </div>
      );
    }
    else { return null; }
  }
}

ByLocation.defaultProps = {
  locationEvents: [],
  baseUrl : '',
  locationId: 0,
  locationName: '',
  isFetching: false
};

ByLocation.propTypes = {
  locationId: PropTypes.number.isRequired,
  locationEvents: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  locationName: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationEvents.isFetching ? state.locationEvents.isFetching : false,
    locationEvents: state.locationEvents.locationEvents ? state.locationEvents.locationEvents.events.event : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ByLocation);