import React, {PropTypes} from 'react';

class AirportParkingCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
      let image = 'http://secure.holidayextras.co.uk' + this.props.airportParking.logo;
      let bookingUrl = this.props.airportParking.bookingURL;

      //http://secure.holidayextras.co.uk/v1/carpark/HPLGU2.js
let image2 = 'http://secure.holidayextras.co.uk' + this.props.airportParking.tripappImagesList[0];
      return (
        <div className={this.props.css}>
          <div className="card airportParking" key={this.props.airportParking.code}>
            <img className="card-img-top" src={image2} />
            <div className="card-block">
              <h4 className="card-title"><strong>{this.props.airportParking.name}</strong></h4>
              <div className="row no-wrap">
                <div className="col-md-5">
                  <h5 className="card-title">
                    <strong>£{this.props.airportParking.totalPrice.toFixed(2)}</strong><br/>
                    {this.props.airportParking.gatePrice != '0.00' ? (<strike>£{this.props.airportParking.gatePrice.toFixed(2)}</strike>) : ''}
                  </h5>
                </div>
                <div className="col-md-7">
                  <a href="#" className="btn btn-primary mb-1">Book Now</a>
                </div>
              </div>
              {this.props.airportParking.advance_Purchase ? <p className="tagCollection"><span className="tag tag-default selected">No refunds or amendments</span></p> : ''}
              {this.props.airportParking.sellpoint_Location ? <p className="card-text mb-0"><small><i className="fa fa-map-marker"></i> {this.props.airportParking.sellpoint_Location}</small></p> : ''}
              {this.props.airportParking.sellpoint_Security ? <p className="card-text mb-0"><small><i className="fa fa-lock"></i> {this.props.airportParking.sellpoint_Security}</small></p> : ''}
              {this.props.airportParking.sellpoint_Transfers ? <p className="card-text mb-0"><small><i className="fa fa-clock-o"></i> {this.props.airportParking.sellpoint_Transfers}</small></p> : this.props.airportParking.transfers ? <p className="card-text mb-0"><small><i className="fa fa-clock-o"></i> {this.props.airportParking.transfers}</small></p> : ''}
            </div>
          </div>
        </div>
    );
  }
}

AirportParkingCard.defaultProps = {
    airportParking: {}
};

AirportParkingCard.propTypes = {
    airportParking: PropTypes.object.isRequired,
    css: PropTypes.string.isRequired
};

export default AirportParkingCard;