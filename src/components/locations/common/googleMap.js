import React, {PropTypes} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './mapMarker';

const GoogleMap = ({longitude, latitude, text, zoom}) => {

  let center = {lat: 0, lng: 0};

  if (latitude != undefined && longitude != undefined) {
    if (latitude.toString().length > 2 && longitude.toString().length > 2) {
      center = {lat: latitude, lng: longitude};
    }
  }

  return (
    <div className={center.lat != 0 && center.lng != 0 ? "googleMapWrapper" : "hide"}>
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        bootstrapURLKeys={{key: "AIzaSyDObkGQJw9q8qKkINjQ9fR7YTuSwNCBtoY"}}
        options={{
          scrollwheel: false,
        }}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
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
