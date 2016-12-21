import React, {PropTypes} from 'react';

class NavigationItem extends React.Component {
	render(){

	let count = '';

	if (this.props.item !== undefined && this.props.item.count > 0) {
		count = (<h5>{this.props.item.count}</h5>);
	}

	if (this.props.item !== undefined && this.props.item.name.length > 0) {
		return (
		<li>
			<a href={this.props.item.url}>
				<i className={this.props.cssClass}></i>
				{count}
				<p>{this.props.item.name}</p>
			</a>
		</li>
		);
	} else { 
		return false;
		}
	}
}

NavigationItem.defaultProps = {
	item: {
		name: '',
		url: '',
		count: 0
	},
	cssClass: "fa user-profile-statictics-icon"
};

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
	cssClass: PropTypes.string
};

export default NavigationItem;
