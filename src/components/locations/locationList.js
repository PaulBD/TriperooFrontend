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
				let cssClass = "col-md-4";

				if (i > 4) {
					cssClass = "col-md-4";
				}

				if (this.props.locations != null)
				{
					if ((this.props.locations.length == 3) || (this.props.locations.length == 6))
					{
						cssClass = "col-md-4";
					}
				}

				let spacer = '';

				switch (i)
				{
					case 3:
					case 6:
						spacer = <div className="gap gap-small"></div>;
						break;
				}

				return (
						<div className={cssClass} key={location.regionID}>
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
  locations: []
};

LocationList.propTypes = {
	locations: PropTypes.array.isRequired
};

export default LocationList;
