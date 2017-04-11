import React, {PropTypes} from 'react';
import cookie from 'react-cookie';
import ReactGA from 'react-ga';

class AirportParkingCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.trackClick = this.trackClick.bind(this);
    }

    trackClick() {
      ReactGA.event({ category: 'Airport Parking', action: 'Click', label: this.props.airportParking.name });
    }

    render(){

      console.log(this.props.airportParking);

      let url = 'https://app.holidayextras.co.uk/carparks/upgrades?';
      url += 'from=' + this.props.searchRequest.arrivalDate + " " + this.props.searchRequest.arrivalTime;
      url += '&to=' + this.props.searchRequest.departDate + " " + this.props.searchRequest.departTime;
      url += '&code=HP' + this.props.airportParking.code;
      url += '&agent=AW135';
      url += '&location=' + this.props.location;
      url += '&request_id=' + cookie.load('triperooUserId');
      url += '&operator_initials=PBD';

      let transferTrim = 195;

      if (this.props.airportParking.advance_Purchase)
      {
        transferTrim = 130;
      }

      let image = 'http://secure.holidayextras.co.uk' + this.props.airportParking.tripappImagesList[0];
      return (
        <div className={this.props.css}>
          <div className="card airportParking" key={this.props.airportParking.code}>
            <img className="card-img-top" src={image} />
            <div className="card-block">
              <h4 className="card-title"><strong>{this.props.airportParking.name}</strong></h4>
              <div className="row no-wrap">
                <div className="col-md-5">
                  <h5 className="card-title price">
                    <strong>£{this.props.airportParking.totalPrice.toFixed(2)}</strong><br/>
                    {this.props.airportParking.gatePrice != '0.00' ? (<strike>£{this.props.airportParking.gatePrice.toFixed(2)}</strike>) : ''}
                  </h5>
                </div>
                <div className="col-md-7">
                  <a href={url} className="btn btn-primary mb-1" target="_blank" onClick={this.trackClick}>Book Now</a>
                </div>
              </div>
              {this.props.airportParking.advance_Purchase ? <p className="tagCollection"><span className="tag tag-default selected">No refunds or amendments</span></p> : ''}
               <p className="card-text mb-1"><i className="fa fa-clock-o"></i> Transfers {this.props.airportParking.tripappTransferTip}</p>

            </div>
          </div>
        </div>
    );
  }
}

AirportParkingCard.defaultProps = {
    airportParking: {},
    searchRequest: {}
};

AirportParkingCard.propTypes = {
    airportParking: PropTypes.object.isRequired,
    searchRequest: PropTypes.object.isRequired,
    css: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

export default AirportParkingCard;