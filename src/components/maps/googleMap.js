import React, {PropTypes} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './mapMarker';

const GoogleMap = ({longitude, latitude, text, zoom, markerArray, locationType, isLoading}) => {

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
          scrollwheel: false
        }}
      >
        {
          !isLoading && locationType != 'city' ? markerArray != undefined && markerArray.length > 0 ?
            markerArray.map(function (item, i) {
              console.log(item.regionName);
              return(<Marker lat={item.locationCoordinates.latitude} lng={item.locationCoordinates.longitude} text={item.regionName} markerKey={i} key={i} />);
          })
          : <Marker lat={center.lat} lng={center.lng} text={text} markerKey={0} key="marker0"/>
            : null
        }

      </GoogleMapReact>
    </div>
  );
};

GoogleMap.defaultProps = {
  isLoading: false
};

GoogleMap.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  markerArray: PropTypes.array,
  locationType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool
};

export default GoogleMap;
