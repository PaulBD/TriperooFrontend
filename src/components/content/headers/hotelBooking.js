import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class HotelBooking extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    let hotelUrl = this.props.location.url + '/hotels';
    let hotelDetailUrl = this.props.location.url + '/hotels/' + this.props.hotelId + '?arrivalDate=' + this.props.arrivalDate + '&nights=' + this.props.nights + '&guests=' + this.props.guests;

    let style = {
      backgroundImage: 'url(' + this.props.hotelImage + ')'
    };

    return (
      <div className="top-area show-onload infoPage">
        <div className="bg-holder full text-white">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a
                    href={this.props.location.url}>{this.props.location.regionNameLong}</a></li>
                  <li className="breadcrumb-item"><a href={hotelUrl}>Hotels In {this.props.location.regionName}</a></li>
                  <li
                    className="breadcrumb-item"><a href={hotelDetailUrl}>{titleCase(this.props.hotelName)}</a></li>
                  <li className="breadcrumb-item active">Book</li>
                </ol>
                <h1>Book {titleCase(this.props.hotelName)}</h1>
                <p className="text-center hidden-sm-up">Secure booking - only takes 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotelBooking.propTypes = {
  location: PropTypes.object,
  hotelId: PropTypes.number.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  nights: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  hotelImage: PropTypes.string.isRequired,
  hotelName: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired

};

export default HotelBooking;
