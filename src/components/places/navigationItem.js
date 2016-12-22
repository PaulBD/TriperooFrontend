import React, {PropTypes} from 'react';

class NavigationItem extends React.Component {
	render(){

	let count = '';
	let name = '';

	if (this.props.showCount == 1) {
		if (this.props.item !== undefined && this.props.item.count > 0) {
			count = (<h5>{this.props.item.count}</h5>);
		}
	}

	if (this.props.showName == 1) {
		name = (<p>{this.props.item.name}</p>);
	}

	if (this.props.item !== undefined && this.props.item.name.length > 0) {

		if (this.props.isActive == 1)
		{
			return (
				<li>
					<a href={this.props.item.url} className="active">
						<i className={this.props.cssClass}></i>
						{count}
						{name}
					</a>
				</li>
				);
			}
		else {
			return (
				<li>
					<a href={this.props.item.url}>
						<i className={this.props.cssClass}></i>
						{count}
						{name}
					</a>
				</li>
				);
		}
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
	cssClass: "fa user-profile-statictics-icon",
	showCount: true,
	showName: true
};

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
	showCount: PropTypes.number,
	showName: PropTypes.number,
	isActive: PropTypes.number,
	cssClass: PropTypes.string
};

export default NavigationItem;
