import React, {PropTypes} from 'react';

const MapMarker = ({longitude, latitude, text}) => {
  return (
    <div className="pin">

    </div>
  );
};

MapMarker.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  text: PropTypes.string,
};

export default MapMarker;
