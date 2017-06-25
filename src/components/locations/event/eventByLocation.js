import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../../actions/location/event/eventsActions';
import EventList from './eventList';

class EventByLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadEventsByKeyword(this.props.locationId, this.props.keyword, 1, 0);
  }

  render(){

    if (this.props.locationEvents != undefined)
    {
      return (
        <div>
          <div className="gap gap-small"></div>



        </div>
      );
    }
    else { return null; }
  }
}

EventByLocation.defaultProps = {
  locationEvents: [],
  baseUrl : '',
  locationId: 0,
  locationName: '',
  isFetching: false
};

EventByLocation.propTypes = {
  locationId: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(EventByLocation);
