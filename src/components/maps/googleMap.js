import React, {PropTypes} from 'react';

class TriperooGoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {


    if (window.google != undefined) {
      let map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: this.props.latitude, lng: this.props.longitude},
        zoom: 13,
        mapTypeId: 'roadmap'
      });

      let icon = {
        url: "/static/img/map-marker.png", // url
        scaledSize: new window.google.maps.Size(25, 25), // scaled size
        origin: new window.google.maps.Point(0, 0), // origin
        anchor: new window.google.maps.Point(0, 0) // anchor
      };

      if (this.props.markerArray.length > 0) {
        let markers = this.props.markerArray.map(function (location, i) {

          let infowindow = new window.google.maps.InfoWindow({
            content: '<div class="infoWindowContent"><div class="pic"><div class="text">' +
            '<p class="mb-0"><strong>' + location.regionName + '</strong></p>' +
            '<p class="mb-0"><small>' + location.subClass + ' Food</small></p>' +
            '<p class="mb-0"><small><a href="' + location.url + '">View</a></small></p></div>' +
            '</div>'
          });

          let marker = new window.google.maps.Marker({
            position: {lat: location.locationCoordinates.latitude, lng: location.locationCoordinates.longitude},
            icon: icon
          });

          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });

          return marker;
        });

        let markerCluster = new MarkerClusterer(map, markers,
          {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
          }
        );
      }
    }
  }


  render(){

      return (
        <div id="map" className="googleMapWrapper">

        </div>
      );
  }
}

TriperooGoogleMap.defaultProps = {
  markerArray: [],
  singleIcon: false
};

TriperooGoogleMap.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  markerArray: PropTypes.array,
  locationType: PropTypes.string.isRequired
};

export default TriperooGoogleMap;
