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
        zoom: this.props.zoom,
        mapTypeId: 'roadmap'
      });

      let icon = {
        url: "/static/img/map-marker.png", // url
        scaledSize: new window.google.maps.Size(25, 25)
      };

      if (this.props.markerArray.length > 0) {

        let markers = this.props.markerArray.map(function (location, i) {

          let boxContent = '';

          if (location.url == '') {
            boxContent = '<div class="infoWindowContent"><div class="pic"><div class="text">' +
              '<p class="mb-0"><strong>' + location.regionName + '</strong></p>' +
              '<p class="mb-0"><small>' + location.subClass + '</small></p></div>' +
              '</div>';
          }
          else {
            boxContent = '<div class="infoWindowContent"><a href="' + location.url + '"><div class="pic"><div class="text">' +
              '<p class="mb-0"><strong>' + location.regionName + '</strong></p>' +
              '<p class="mb-0"><small>' + location.subClass + '</small></p></div></a>' +
              '</div>';
          }



          let infowindow = new window.google.maps.InfoWindow({
            content: boxContent
          });

          let marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(location.locationCoordinates.latitude, location.locationCoordinates.longitude),
            icon: icon,
            map: map
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
  singleIcon: false,
  zoom: 13
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
