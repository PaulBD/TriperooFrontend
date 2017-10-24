import React, {PropTypes} from 'react';

class NavigationItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (!this.props.showName) {
      $(this.refs.locationNav).tooltip();
    }
  }

	render(){

		let name = '';
		let navItem = '';

		if (this.props.showName) {
			name = (<p>{this.props.item}</p>);
		}

		if (this.props.item !== undefined && this.props.item.length > 0) {

		let className = this.props.isActive ? 'active' : 'inactive';

		let url = this.props.parentUrl + '/' + this.props.item.replace(' ', '-').replace(' ', '-').toLowerCase();

		navItem = (
			<a ref="locationNav" href={url} className={className} data-toggle="tooltip" data-placement="top" title={this.props.item} key={this.props.item}>
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
