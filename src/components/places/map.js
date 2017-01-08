import React, {PropTypes} from 'react';
import GoogleMap from 'google-map-react';
import Place from './mapPlace';

class Map extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

	const places = renderPlaces(this.props.places);
	return (

		<div className="map">
			<GoogleMap bootstrapURLKeys={{key: "AIzaSyBmQF5rseeOF7Fifo4ACea1bkOtfePdG58" }} center={this.props.center} zoom={this.props.zoom}>
				{places}
			</GoogleMap>
		</div>
		);
	}
}

Map.defaultProps = {
	zoom: 14
}

Map.propTypes = {
	center: PropTypes.array,
	zoom: PropTypes.number,
	places: PropTypes.array
};

function renderPlaces(places) {
	if (places.length > 0) {      
		return places.map((place, index) => (
			<Place text={place.pricesFrom} id={place.ref} lat={parseFloat(place.coordinates.lat)} lng={parseFloat(place.coordinates.lon)} />
		));
	}
	else return [];
}

export default Map;
