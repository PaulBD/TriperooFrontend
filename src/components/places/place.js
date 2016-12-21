import React, {PropTypes} from 'react';

class Place extends React.Component {
    render(){
		return (
	        <div className={this.props.cssClass}>
				<a className="hover-img" href={this.props.url}>
					<img src={this.props.imageUrl} alt={this.props.name} />
				<h5 className="hover-title-center">{this.props.name}</h5>
				</a>
			</div>
		)
	}
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired
};

export default Place;
