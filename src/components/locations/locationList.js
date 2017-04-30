import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class LocationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/placeholder.png';
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

				let locationType = location.subClass;

				switch (location.subClass)
				{
					case "tree":
						locationType = 'Park / Common';
						break;
					case "sign":
						locationType = 'Area of Interest';
						break;
					case "civic":
						locationType = 'Important Buildings';
						break;
					case "anchor":
						locationType = 'Docklands';
						break;
					case "icecream":
						locationType = 'Activities';
						break;
					case "stadium":
						locationType = 'Sport Venues';
						break;
					case "medical":
						locationType = 'Hospitals, Medical Buildings';
						break;
					case "school":
						locationType = 'Schools, Colleages, Universities';
						break;
					case "theater":
						locationType = 'Theatres';
						break;
					case "historic":
						locationType = 'Historic Venues';
						break;

				}

				return (
						<div className={this.props.cssClass} key={location.regionID}>
							<a className="hover-img" href={location.url}>
								<img src={location.image ? location.image : '/static/img/placeholder.png'}  alt={location.regionName} onError={this.handleMissingImage} />
								<div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
									<div className="text-small">
										<h5>{location.regionName.length > 33 ? location.regionName.substring(0,33) + '...' : location.regionName}</h5>
										<p>{titleCase(locationType)}</p>
									</div>
								</div>
								<ul className="hover-icon-group-center-top">
                                    <li>
                                        <a className="fa fa-comments box-icon-normal round" href="#" title="Like"></a>
                                    </li>
                                    <li>
                                        <a className="fa fa-picture-o box-icon-normal round" href="#" title="Bookmark"></a>
                                    </li>
                                    <li>
                                        <a className="fa fa-bookmark box-icon-normal round" href="#" title="Review"></a>
                                    </li>
                                </ul>
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
