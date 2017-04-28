import React, {PropTypes} from 'react';
import Modal from './model';
import Loader from '../common/loadingDots';

class EventList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { eventName: 'test' };
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/placeholder.png';
  }

  updateEventModal(eventName, eventDescription, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink) {
    this.setState({ eventName, eventDescription, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink });
  }

  render(){

    if ((this.props.locationEvents.length > 0) && (!this.props.isFetching))
    {

  let i = 0;
      let css = this.props.cssClass;
      return (
        <div className="row">
            {
              this.props.locationEvents.map(locationEvent => {
                i += 1;

                let spacer = '';

                switch (i)
                {
                  case 3:
                  case 6:
                  case 9:
                  case 12:
                  case 15:
                  case 18:
                  case 21:
                  case 24:
                    spacer = <div className="gap gap-small"></div>;
                    break;
                }

                let image = locationEvent.image ? locationEvent.image.block200.url.replace('small', 'block400') : '/static/img/400x400.png';
                let price = locationEvent.price;
                let ticketLink = '';

                if (locationEvent.tickets != undefined)
                {
                  if (locationEvent.tickets.link.length > 0)
                  {
                    ticketLink = locationEvent.tickets.link[0].url;
                  }
                }

                return (
                  <div className={this.props.cssClass} key={locationEvent.id}>
                    <a className="hover-img" href="#" onClick={this.updateEventModal.bind(this, locationEvent.title, locationEvent.descriptionDecoded, locationEvent.start_time, locationEvent.venue_name, locationEvent.venue_address, locationEvent.region_name, locationEvent.url, locationEvent.venue_url, locationEvent.longitude, locationEvent.latitude, image, price, ticketLink)} data-toggle="modal" data-target="#eventModal">
                      <img src={image ? image : '/static/img/placeholder.png'}  alt={locationEvent.title} onError={this.handleMissingImage} height={190}/>
                      <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                        <div className="text-small">
                          <h5 className="eventTitle">{locationEvent.title}</h5>
                          <p><i className="fa fa-clock-o"></i> {locationEvent.start_time}</p>
                        </div>
                      </div>
                    </a>
                    {spacer}
                  </div>
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
          <Loader showLoader={true} />
        </div>
      ); 
    }
  }
}

EventList.defaultProps = {
  locationEvents: [],
  cssClass: 'col-md-',
  isFetching: true
};

EventList.propTypes = {
  locationEvents: PropTypes.array.isRequired,
  cssClass: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default EventList;