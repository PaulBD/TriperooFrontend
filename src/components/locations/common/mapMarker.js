import React, {PropTypes} from 'react';

const MapMarker = ({longitude, latitude, text, i}) => {
  return (
    <div className="pin" key={i}>
      <span>{text}</span>
    </div>
  );
};

MapMarker.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  text: PropTypes.string,
  i: PropTypes.number
};

export default MapMarker;
