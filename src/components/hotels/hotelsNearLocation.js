import React, {PropTypes} from 'react';
import HotelThumb from './thumb';

const HotelsNearLocation = ({longitude, latitude, pageSize, locationName, locationType, parentName, parentUrl}) => {
  let searchHotels = parentUrl + '/hotels';
  let title = "Top Hotels";

  if (locationType != 'Country') {
    title = "Top Hotels Near " + locationName;
  }
    return (
      <div className="row greyBg detailSubHeader">
        <div className="gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>{title}</h4>
            </div>
            <div className="col-md-4 text-right">
              <p><a href={searchHotels}>Find more hotels in {parentName}</a></p>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <HotelThumb />
                </div>
                <div className="col-md-3">
                  <HotelThumb />
                </div>
                <div className="col-md-3">
                  <HotelThumb />
                </div>
                <div className="col-md-3">
                  <HotelThumb />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </div>
    );
};

HotelsNearLocation.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  pageSize: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  parentName: PropTypes.string,
  parentUrl: PropTypes.string
};

export default HotelsNearLocation;
