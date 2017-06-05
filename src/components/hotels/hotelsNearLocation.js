import React, {PropTypes} from 'react';

const HotelsNearLocation = ({longitude, latitude, pageSize, locationName, parentName, parentUrl}) => {
  let searchHotels = parentUrl + '/hotels';
  return (
    <div className="row greyBg detailSubHeader">
      <div className="gap gap-small"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
              <h3>Hotels Near {locationName}</h3>=
          </div>
          <div className="col-md-4 text-xs-right">
            <p><a href={searchHotels}>Find more hotels in {parentName}</a></p>
          </div>
          <div className="col-md-12">=
              <p>Hotels</p>
              <p>Hotels</p><p>Hotels</p>=
          </div>
        </div>
      </div>
      <div className="gap gap-small"></div>
    </div>
  );
};

HotelsNearLocation.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  pageSize: PropTypes.number,
  locationName: PropTypes.string,
  parentName: PropTypes.string,
  parentUrl: PropTypes.string
};

export default HotelsNearLocation;
