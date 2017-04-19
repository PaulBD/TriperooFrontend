import React, {PropTypes} from 'react';

class EventModal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div className="modal fade" id="eventModal" role="dialog" aria-labelledby="eventModal" aria-hidden="true">
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="card">
            <h3 className="card-header">{this.props.eventName}</h3>
            <div className="card-block">
              <div className="col-md-4">
                <img className="card-img-top mb-2" src={this.props.image} />
                <p className="card-text text-xs-center">{this.props.ticketLink ? <a href={this.props.ticketLink} className="btn btn-primary" target="_blank">Buy Tickets</a> : ''} </p>
              </div>
              <div className="col-md-8">
                <p className="card-text mb-0"><i className="fa fa-clock-o"></i> {this.props.startTime}</p>
                <p className="card-text mb-0"><i className="fa fa-map-marker"></i> {this.props.venueName}, {this.props.venueAddress}, {this.props.venueCity}</p>
                <p className="card-text mb-2"><i className="fa fa-credit-card"></i> {this.props.ticketCost ? this.props.ticketCost : 'Unknown'}</p>
                <p className="card-text"><strong>Description</strong><br />{this.props.eventDescription ? this.props.eventDescription.length > 520 ? this.props.eventDescription.substring(0, 520) : this.props.eventDescription : 'No description found.'}</p>
              </div>
            </div>
            <div className="card-block text-xs-center">
              <a href="#" data-dismiss="modal">Close</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventModal.defaultProps = {
  eventName: '',
  eventDescription: '',
  startTime: '',
  venueName: '',
  venueAddress: '',
  venueCity: '',
  venueWebsiteAddress: '',
  longitude: '',
  latitude: '',
  websiteAddress: '',
  image: '',
  ticketCost: '',
  ticketLink: ''
};

EventModal.propTypes = {
  eventName: PropTypes.string,
  eventDescription: PropTypes.string,
  startTime: PropTypes.string,
  venueName: PropTypes.string,
  venueAddress: PropTypes.string,
  venueCity: PropTypes.string,
  venueWebsiteAddress: PropTypes.string,
  websiteAddress: PropTypes.string,
  longitude: PropTypes.string,
  latitude: PropTypes.string,
  image: PropTypes.string,
  ticketCost: PropTypes.string,
  ticketLink: PropTypes.string
};

export default EventModal;
