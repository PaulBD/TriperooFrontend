import React, {PropTypes} from 'react';
import StarRating from '../../common/starRating';
import cookie from 'react-cookie';
import ReactGA from 'react-ga';

class AirportHotelCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.trackClick = this.trackClick.bind(this);
  }

  trackClick() {
    ReactGA.event({ category: 'Airport Parking', action: 'Click', label: this.props.airportHotel.name });
  }

  render(){

    let url = 'https://app.holidayextras.co.uk/hotels/upgrades?';
    url += 'room_types[0]=' + this.props.searchRequest.roomType;

    if (this.props.searchRequest.collectCarDate != undefined)
    {
      url += '&check_in=' + this.props.searchRequest.arrivalDate;
      url += '&park_from=' + this.props.searchRequest.dropOffCarDate;
      url += '&park_to=' + this.props.searchRequest.collectCarDate;
    }
    else {
      url += '&check_in=' + this.props.searchRequest.arrivalDate + ' 00:00';}

    url += '&code=HP' + this.props.airportHotel.code;
    url += '&agent=AW135';
    url += '&location=' + this.props.location;
    url += '&request_id=' + cookie.load('triperooUserId');
    url += '&operator_initials=PBD';

    let image = 'http://secure.holidayextras.co.uk' + this.props.airportHotel.tripappImagesList[0];
    return (
      <div className={this.props.css}>
        <div className="card airportParking" key={this.props.airportHotel.code}>
          <img className="card-img-top" src={image} />
          <div className="card-block">
            <StarRating starRating={this.props.airportHotel.star_Rating} className="icon-list list-inline-block mb0"/>
            <h4 className="card-title"><strong>{this.props.airportHotel.name}</strong></h4>
            <div className="row no-wrap">
              <div className="col-md-5">
                <h5 className="card-title price">
                  <strong>£{this.props.airportHotel.price.toFixed(2)}</strong><br/>
                  {this.props.airportHotel.price != this.props.airportHotel.nonDiscPrice ? (<strike>£{this.props.airportHotel.nonDiscPrice.toFixed(2)}</strike>) : ''}
                </h5>
              </div>
              <div className="col-md-7">
                <a href={url} className="btn btn-primary mb-1" target="_blank" onClick={this.trackClick}>Book Now</a>
              </div>
            </div>
            {this.props.airportHotel.noncancellable_nonrefundable ? <p className="tagCollection"><span className="tag tag-default selected">No refunds or amendments</span></p> : ''}
            <p className="card-text mb-1"><small><i className="fa fa-clock-o"></i> <u>Transfers</u> {this.props.airportHotel.tripappTransferTip}</small></p>
            {this.props.airportHotel.noncancellable_nonrefundable ? '' : <p className="card-text mb-1"><small>{this.props.airportHotel.tripappSellpoint1}</small></p>}
          </div>
        </div>
      </div>
    );
  }
}

AirportHotelCard.defaultProps = {
  airportHotel: {},
  searchRequest: {}
};

AirportHotelCard.propTypes = {
  airportHotel: PropTypes.object.isRequired,
  searchRequest: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default AirportHotelCard;
