import React, {PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import Marker from './mapMarker';

class MapWrapper extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

	const markers = renderMarkers(this.props.places);
	return (

		<div className="map">
			<GoogleMap id="placeMap" bootstrapURLKeys={{key: "AIzaSyBmQF5rseeOF7Fifo4ACea1bkOtfePdG58" }} center={this.props.center} zoom={this.props.zoom}>
				{markers}
			</GoogleMap>
		</div>
		);
	}
}

MapWrapper.defaultProps = {
	zoom: 14
}

MapWrapper.propTypes = {
	center: PropTypes.array,
	zoom: PropTypes.number,
	markers: PropTypes.array
};

function renderMarkers(places) {
	if (places.length > 0) {      
		return places.map((place, index) => (
			<Marker text={place.pricesFrom} id={place.ref} lat={parseFloat(place.coordinates.lat)} lng={parseFloat(place.coordinates.lon)} />
		));
	}
	else return [];
}

export default MapWrapper;
