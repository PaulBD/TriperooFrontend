import React, {PropTypes} from 'react';
import cookie from 'react-cookie';
import ReactGA from 'react-ga';

class AirportLoungeCard extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.trackClick = this.trackClick.bind(this);
    }

    trackClick() {
      ReactGA.event({ category: 'Airport Lounge', action: 'Click', label: this.props.airportLounge.name });
    }

    render(){

      console.log(this.props.airportLounge);

      let url = 'https://app.holidayextras.co.uk/lounges/payment?';
      url += 'from=' + this.props.searchRequest.arrivalDate + " " + this.props.searchRequest.arrivalTime;
      url += '&agent=AW135';
      url += '&code=HP' + this.props.airportLounge.code;
      url += '&location=' + this.props.location;
      url += '&adults=' + this.props.adults;
      url += '&children=' + this.props.children;
      url += '&infants=' + this.props.infants;
      url += '&request_id=' + cookie.load('triperooUserId');
      url += '&operator_initials=PBD';
      url += '&product_type=lounges';



      let image = 'http://secure.holidayextras.co.uk' + this.props.airportLounge.tripappImagesList[0];
      return (
        <div className={this.props.css}>
          <div className="card airportLoungeCard" key={this.props.airportLounge.code}>
            <img className="card-img-top" src={image} />
            <div className="card-block">
              <h4 className="card-title"><strong>{this.props.airportLounge.name}</strong></h4>
              <div className="row no-wrap">
                <div className="col-md-5">
                  <h5 className="card-title price">
                    <strong>£{this.props.airportLounge.price.toFixed(2)}</strong><br/>
                    {this.props.airportLounge.nonDiscPrice != this.props.airportLounge.price ? (<strike>£{this.props.airportLounge.nonDiscPrice.toFixed(2)}</strike>) : ''}
                  </h5>
                </div>
                <div className="col-md-7">
                  <a href={url} className="btn btn-primary mb-1" target="_blank" onClick={this.trackClick}>Book Now</a>
                </div>
              </div>
              {this.props.airportLounge.advance_Purchase ? <p className="tagCollection"><span className="tag tag-default selected">No refunds or amendments</span></p> : ''}
              <p className="card-text mb-1"><small><i className="fa fa-clock-o"></i> Open from {this.props.airportLounge.openingTime} to {this.props.airportLounge.closingTime}</small></p>
              {this.props.airportLounge.why_BookOne}
            </div>
          </div>
        </div>
    );
  }
}

AirportLoungeCard.defaultProps = {
    airportLounge: {},
    searchRequest: {}
};

AirportLoungeCard.propTypes = {
    airportLounge: PropTypes.object.isRequired,
    searchRequest: PropTypes.object.isRequired,
    css: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    adults: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    infants: PropTypes.string.isRequired
};

export default AirportLoungeCard;