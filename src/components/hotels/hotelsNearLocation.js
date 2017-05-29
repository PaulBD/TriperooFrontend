import React, {PropTypes} from 'react';

const HotelsNearLocation = ({longitude, latitude, pageSize}) => {

  return (
    <div>
      Hotels Near Me
    </div>
  );
};

HotelsNearLocation.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  pageSize: PropTypes.number
};

export default HotelsNearLocation;
