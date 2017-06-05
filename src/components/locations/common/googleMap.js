import React, {PropTypes} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './mapMarker';

const GoogleMap = ({longitude, latitude, text, zoom}) => {

  let center = {lat: latitude, lng: longitude};
  return (
    <div className="googleMapWrapper">
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        bootstrapURLKeys={{key: "AIzaSyDObkGQJw9q8qKkINjQ9fR7YTuSwNCBtoY"}}
        options={{
          scrollwheel: false,
        }}
      >
        <Marker
          lat={latitude}
          lng={longitude}
          text={text}
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  text: PropTypes.string,
  zoom: PropTypes.number
};

export default GoogleMap;
