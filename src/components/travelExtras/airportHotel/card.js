import React, {PropTypes} from 'react';

class AirportHotelCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
      let image = 'http://secure.holidayextras.co.uk' + this.props.airportHotel.logo;
      let bookingUrl = this.props.airportHotel.bookingURL;

      //http://secure.holidayextras.co.uk/v1/carpark/HPLGU2.js
let image2 = 'http://secure.holidayextras.co.uk' + this.props.airportHotel.tripappImagesList[0];
      return (
        <div className={this.props.css}>
          <div className="card airportHotel" key={this.props.airportHotel.code}>
            <img className="card-img-top" src={image2} />
            <div className="card-block">
              <h4 className="card-title"><strong>{this.props.airportHotel.name}</strong></h4>
              <div className="row no-wrap">
                <div className="col-md-5">
                  <h5 className="card-title price">
                    <strong>£{this.props.airportHotel.totalPrice.toFixed(2)}</strong><br/>
                    {this.props.airportHotel.gatePrice != '0.00' ? (<strike>£{this.props.airportHotel.gatePrice.toFixed(2)}</strike>) : ''}
                  </h5>
                </div>
                <div className="col-md-7">
                  <a href="#" className="btn btn-primary mb-1">Book Now</a>
                </div>
              </div>
              {this.props.airportHotel.advance_Purchase ? <p className="tagCollection"><span className="tag tag-default selected">No refunds or amendments</span></p> : ''}
              {this.props.airportHotel.sellpoint_Location ? <p className="card-text mb-0"><small><i className="fa fa-map-marker"></i> {this.props.airportHotel.sellpoint_Location}</small></p> : ''}
              {this.props.airportHotel.sellpoint_Security ? <p className="card-text mb-0"><small><i className="fa fa-lock"></i> {this.props.airportHotel.sellpoint_Security}</small></p> : ''}
              {this.props.airportHotel.sellpoint_Transfers ? <p className="card-text mb-0"><small><i className="fa fa-clock-o"></i> {this.props.airportHotel.sellpoint_Transfers}</small></p> : this.props.airportHotel.transfers ? <p className="card-text mb-0"><small><i className="fa fa-clock-o"></i> {this.props.airportHotel.transfers}</small></p> : ''}
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
    css: PropTypes.string.isRequired
};

export default AirportHotelCard;