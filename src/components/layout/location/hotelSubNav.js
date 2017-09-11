import React, {PropTypes} from 'react';

class HotelSubNav extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div className="row row-nowrap greyBg hotelInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link active" href="#photos"><i className="fa fa-camera"></i> Photos</a></li>
                <li className="nav-item"><a className="nav-link" href="#about"><i className="fa fa-info-circle"></i> About The Hotel</a></li>
                <li className="nav-item"><a className="nav-link" href="#map"><i className="fa fa-map-marker"></i> On the Map</a></li>
                <li className="nav-item"><a className="nav-link" href="#rooms"><i className="fa fa-bed"></i> Room Availability</a></li>
                <li className="nav-item"><a className="nav-link" href="#info"><i className="fa fa-bars"></i> Useful Information</a></li>
                <li className="nav-item"><a className="nav-link" href="#tab-7"><i className="fa fa-comments"></i> Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelSubNav;
