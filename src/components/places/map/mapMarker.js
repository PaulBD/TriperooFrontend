import React, {PropTypes} from 'react';

class MapMarker extends React.Component {

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

 		let markerId = 'marker-' + this.props.id;

 		let style = {
 			display: 'none'
 		};

 		let info = '';

 		if (this.state.showInfo == 1) {
 			style = {
 				display: 'block'
 			};
 		}

 		let price = 'Full';
			
		if (this.props.text !== 'Full' && parseFloat(this.props.text) > 0) {
 			price = "£" + this.props.text;
 		}

		info = (<div className="mapInfo" style={style}>{price}</div>);

    	return (
       	<div className="mapMarker" id={markerId} onMouseEnter={this.onMouseEnterContent} onMouseLeave={this.onMouseLeaveContent}>
       		{info}
       	</div>
    	);
  	}
}

MapMarker.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number
};

export default MapMarker;