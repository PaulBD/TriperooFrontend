import React, {PropTypes} from 'react';

class EventCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/100x100.png';
  }

  changeEvent(name, description, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink) {
    this.props.changeEvent(name, description, startTime, venueName, venueAddress, venueCity, websiteAddress, venueWebsiteAddress, venueLongitude, venueLatitude, image, ticketCost, ticketLink);
  }

  render(){

    if (this.props.locationEvent != undefined)
    {
      let image = this.props.locationEvent.image ? this.props.locationEvent.image.block200.url.replace('small', 'block100') : '/static/img/100x100.png';
      let price = this.props.locationEvent.price;
      let ticketLink = '';

      if (this.props.locationEvent.tickets != undefined)
      {
        if (this.props.locationEvent.tickets.link.length > 0)
        {
          ticketLink = this.props.locationEvent.tickets.link[0].url;
        }
      }

      return (
        <a href="#" onClick={this.changeEvent.bind(this, this.props.locationEvent.title, this.props.locationEvent.descriptionDecoded, this.props.locationEvent.start_time, this.props.locationEvent.venue_name, this.props.locationEvent.venue_address, this.props.locationEvent.region_name, this.props.locationEvent.url, this.props.locationEvent.venue_url, this.props.locationEvent.longitude, this.props.locationEvent.latitude, image, price, ticketLink)} data-toggle="modal" data-target="#eventModal"  className={this.props.cssClass} key={this.props.key}>
          <div className="card text-xs-left">
            <div className="card-block eventCard">
              <div className="col-md-4">
                <img src={image} onError={this.handleMissingImage}/>
              </div>
              <div className="col-md-8">
                <h4 className="card-title">{this.props.locationEvent.title}</h4>
                <p className="card-subtitle mb-1 text-muted cardAddress"><i className="fa fa-map-marker"></i> {this.props.locationEvent.venue_name}, {this.props.locationEvent.venue_address}, {this.props.locationEvent.city_name} {this.props.locationEvent.postal_code}</p>
                <p className="card-subtitle mb-1 text-muted cardAddress"><i className="fa fa-clock-o"></i> {this.props.locationEvent.start_time}</p>
              </div>
            </div>
          </div>
        </a>
      );
    }
    else {
      return null;
    }
  }
}

EventCard.defaultProps = {
  locationEvent: {},
  cssClass: '',
  key: 0
};

EventCard.propTypes = {
  locationEvent: PropTypes.object.isRequired,
  changeEvent: PropTypes.func,
  cssClass: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired
};

export default EventCard;