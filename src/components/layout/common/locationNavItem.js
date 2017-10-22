import React, {PropTypes} from 'react';

class NavigationItem extends React.Component {
	render(){

		let count = '';
		let name = '';
		let navItem = '';

		if (this.props.showName) {
			name = (<p>{this.props.item}</p>);
		}

		if (this.props.item !== undefined && this.props.item.length > 0) {

		let className = this.props.isActive ? 'active' : '';

		let url = this.props.parentUrl + '/' + this.props.item.replace(' ', '-').replace(' ', '-').toLowerCase();

		navItem = (
			<a href={url} className={className}>
				<i className={this.props.cssClass}></i>
				{name}
			</a>
		);
	}

	return (
		<li>
			{navItem}
		</li>
		);
	}
}

NavigationItem.defaultProps = {
	item: '',
	parentUrl: '',
	cssClass: "fa user-profile-statictics-icon",
	showCount: true,
	showName: true
};

NavigationItem.propTypes = {
	item: PropTypes.string.isRequired,
	parentUrl: PropTypes.string.isRequired,
	showCount: PropTypes.bool,
	showName: PropTypes.bool,
	isActive: PropTypes.bool,
	cssClass: PropTypes.string
};

export default NavigationItem;
