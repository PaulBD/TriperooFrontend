import React, {PropTypes} from 'react';
import Modal from '../../../popups/eventPopup';
import Loader from '../../../loaders/contentLoader';

class EventList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { eventName: 'test' };
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/placeholder250.png';
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

                if (this.props.cssClass == 'col-md-4')
                {
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
                } else {
                  switch (i)
                  {
                    case 4:
                    case 8:
                    case 12:
                    case 16:
                    case 20:
                    case 24:
                    case 28:
                    case 32:
                      spacer = <div className="gap gap-small"></div>;
                      break;
                  }
                }

                let image = locationEvent.image ? locationEvent.image.block250.url : '';
                let price = locationEvent.price;
                let ticketLink = '';

                if (locationEvent.tickets != undefined)
                {
                  if (locationEvent.tickets.link.length > 0)
                  {
                    ticketLink = locationEvent.tickets.link[0].url;
                  }
                }

                if (image == '')
                {
                  switch (locationEvent.categories.category[0].name)
                  {
                    case 'Concerts &amp; Tour Dates':
                      image = '/static/img/music_default.jpg';
                      break;
                    case 'Comedy':
                      image = '/static/img/comedy_default.jpg';
                      break;
                    case 'Film':
                      image = '/static/img/movies_default.jpg';
                      break;
                    case 'Performing Arts':
                      image ='/static/img/performing_arts_default.jpg';
                      break;
                  }
                }

                let buyButton = '';

                if (this.props.isFeature)
                {
                  if (locationEvent.tickets)
                  {
                    if (locationEvent.tickets.link.length > 0)
                    {
                      buyButton = (<a href={locationEvent.tickets.link[0].url} className="btn btn-primary" target="_blank">Find Tickets</a>);
                    }
                  }
                  else {
                    buyButton = (<a href={locationEvent.url} className="btn btn-primary" target="_blank">Find Tickets</a>);
                  }
                }

                return (
                  <div className={this.props.cssClass} key={locationEvent.id}>
                    <div className="hover-img" >
                      <img src={image}  alt={locationEvent.title} onError={this.handleMissingImage} />
                      <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold eventText">
                        <h5 className="eventTitle">{locationEvent.title}</h5>
                          <div className="text-small">
                          <p><i className="fa fa-map-marker"></i> {locationEvent.venue_name}, {locationEvent.city_name}</p>
                          <p className={locationEvent.price ? "" : "mb-2"}><i className="fa fa-clock-o"></i> {locationEvent.start_time}</p>
                          <p className={locationEvent.price ? "card-text mb-2" : "hide"}><i className="fa fa-credit-card"></i> <span dangerouslySetInnerHTML={{__html: locationEvent.price}}></span></p>
                          {buyButton}
                        </div>
                      </div>
                    </div>
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
      if (!this.props.isFetching)
      {
          return (<div className="row"><div className="col-md-12"><p>There are no events in this category this week.</p></div></div>);
      } else {
        return (
          <div className="row">
            <Loader showLoader={true} />

          </div>
        );
      }
    }
  }
}

EventList.defaultProps = {
  locationEvents: [],
  cssClass: 'col-md-',
  isFetching: true,
  isFeature: false
};

EventList.propTypes = {
  locationEvents: PropTypes.array.isRequired,
  cssClass: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFeature: PropTypes.bool.isRequired
};

export default EventList;
