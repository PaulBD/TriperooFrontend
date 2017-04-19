import React, {PropTypes} from 'react';
import Modal from './model';
import EventCard from './eventCard';
import ContentLoader from '../common/contentLoader';

class EventList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { eventName: 'test' };
    this.updateEventModal = this.updateEventModal.bind(this);
  }

  updateEventModal(eventName, eventDescription, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink) {
    this.setState({ eventName, eventDescription, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink });
  }

  render(){

    if ((this.props.locationEvents.length > 0) && (!this.props.isFetching))
    {
      let css = this.props.cssClass;
      return (
        <div className="row">
            {
              this.props.locationEvents.map(locationEvent => {
                return (
                  <EventCard locationEvent={locationEvent} cssClass={css} key={locationEvent.id} changeEvent={this.updateEventModal} />
                );
              })
            }
            <Modal eventName={this.state.eventName} eventDescription={this.state.eventDescription} startTime={this.state.startTime} venueName={this.state.venueName} venueCity={this.state.venueCity} venueAddress={this.state.venueAddress} venueWebsiteAddress={this.state.venueWebsiteAddress} longitude={this.state.venueLongitude} latitude={this.state.venueLatitude} image={this.state.image} ticketCost={this.state.ticketCost} ticketLink={this.state.ticketLink} />
        </div>
      );
    }
    else { 
      return (
        <div className="row">              
          <div className="col-md-4">
            <ContentLoader showLoader={true} />
          </div>
          <div className="col-md-4">
            <ContentLoader showLoader={true} />
          </div>
          <div className="col-md-4">
            <ContentLoader showLoader={true} />
          </div>
        </div>
      ); 
    }
  }
}

EventList.defaultProps = {
  locationEvents: [],
  cssClass: 'col-md-4',
  isFetching: true
};

EventList.propTypes = {
  locationEvents: PropTypes.array.isRequired,
  cssClass: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default EventList;