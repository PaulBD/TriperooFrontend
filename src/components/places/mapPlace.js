import React, {PropTypes} from 'react';

class MapPlace extends React.Component {

	constructor(props) {
		super(props);
    	this.onMouseEnterContent = this.onMouseEnterContent.bind(this);
    	this.onMouseLeaveContent = this.onMouseLeaveContent.bind(this);
    	this.state = { showInfo: 0, id: this.props.id };
	}

	onMouseEnterContent(e) {
		this.setState({ showInfo: 1, id: this.props.id });
		let html = document.getElementById("place-" + this.props.id);
		html.className = "hoverActive";
	}

	onMouseLeaveContent(e) {   
		this.setState({ showInfo: 0, id: this.props.id });
		let html = document.getElementById("place-" + this.props.id);
		html.className = "";
	}

 	render() {

 		let info = '';

 		if (this.state.showInfo == 1) {
 			let price = 'Full';

 			if (this.props.text !== 'Full' && parseFloat(this.props.text) > 0) {
	 			price = "£" + this.props.text;
	 		}

 			info = (<div className="mapInfo">{price}</div>);
 		}

    	return (
       	<div className="mapMarker" onMouseEnter={this.onMouseEnterContent} onMouseLeave={this.onMouseLeaveContent}>
       		{info}
       	</div>
    	);
  	}
}

MapPlace.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number
};

export default MapPlace;