import React, {PropTypes} from 'react';

class LocationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/400x300.png';
  }

  render() {
	let i = 0;
	return (
		<div className="row">
			{
			this.props.locations.map(location => {

				i += 1;

				let spacer = '';

				switch (i)
				{
					case 3:
					case 6:
					case 9:
					case 12:
					case 15:
					case 18:
					case 21:
					case 24:
						spacer = <div className="gap gap-small"></div>;
						break;
				}

				return (
						<div className={this.props.cssClass} key={location.regionID}>
							<a className="hover-img" href={location.url}>
								<img src={location.image ? location.image : '/static/img/400x300.png'}  alt={location.regionName} onError={this.handleMissingImage} />
								<h5 className="hover-title hover-hold">{location.regionName}</h5>
							</a>
						{spacer}
						</div>
				);
			})
		}
		</div>
	);
	}
}

LocationList.defaultProps = {
  locations: [],
  cssClass: 'col-md-4'
};

LocationList.propTypes = {
	locations: PropTypes.array.isRequired,
	cssClass: PropTypes.string
};

export default LocationList;
