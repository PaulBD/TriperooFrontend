import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../../actions/customer/authenticationActions';
import ReviewIcon from '../../location/reviewIcon';
import PhotoIcon from '../../location/photoIcon';
import BookmarkIcon from '../../location/bookmarkIcon';
import VisitIcon from '../../location/visitIcon';
let titleCase = require('title-case');

class LocationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
    e.target.src = '/static/img/placeholder-large.png';
  }

  render() {
console.log(this.props.locations.locations);
    let i = 0;
	return (
		<div className="row">
			{
			this.props.locations.locations.map(location => {

				i += 1;

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
          case "neighbor":
            locationType = "";
            break;

				}

				let fallbackImage = location.image;

        if (location.photos) {
          if (location.photos.photoList) {
            if (location.photos.photoList.length > 0) {
              if (location.photos.photoList[0].width == 0)
              {
                fallbackImage = location.photos.photoList[0].prefix + location.photos.photoList[0].suffix;
              }
              else {
                fallbackImage = location.photos.photoList[0].prefix + '2000x2000' + location.photos.photoList[0].suffix;
              }
            }
          }
        }

        const bgImage = {
          backgroundImage: "url(" + fallbackImage + ")"
        };

				return (
					<div className={this.props.cssClass} key={location.regionType == "Attractions" ? location.locationDetail.productCode : location.regionID}>
						<div className="hover-img bgImage" style={bgImage}>
							<div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                <a  href={location.url}>
								<div className="text-small">
									<h5>{location.regionName.length > 31 ? location.regionName.substring(0,31) + '...' : location.regionName}</h5>
									<p className={locationType.length == 0 ? "hide" : ""}>{titleCase(locationType)}</p>
                  <p className={location.regionType == "Attractions" ? "" : "hide"}>{location.regionType == "Attractions" ? location.locationDetail.pricing.priceGBP + ' GBP' : ""}</p>
								</div>
                </a>
							</div>
              <ul className={this.props.isAuthenticated ? "hover-icon-group-center-top" : "hide"}>
                <li>
                  <ReviewIcon locationId={location.regionID} locationName={location.regionNameLong} locationType={location.subClass} key={location.regionID}/>
                </li>
                <li>
                  <PhotoIcon locationId={location.regionID} locationName={location.regionName} locationNameLong={location.regionNameLong} locationType={location.subClass} key={location.regionID}/>
                </li>
                <li>
                  <BookmarkIcon parentLocationId={location.parentRegionID} parentLocationName={location.parentRegionName} parentLocationNameLong={location.parentRegionNameLong} parentLocationImage={location.parentRegionImage}  locationNameLong={location.regionNameLong} locationUrl={location.url} locationImage={location.image} locationId={location.regionID} locationName={location.regionName} locationType={location.subClass} key={location.regionID} latitude={location.locationCoordinates ? location.locationCoordinates.latitude : 0} longitude={location.locationCoordinates ? location.locationCoordinates.longitude : 0}/>
                </li>
                <li>
                  <VisitIcon parentLocationId={location.parentRegionID} parentLocationName={location.parentRegionName} parentLocationNameLong={location.parentRegionNameLong} parentLocationImage={location.parentRegionImage}  locationNameLong={location.regionNameLong} locationUrl={location.url} locationImage={location.image} locationId={location.regionID} locationName={location.regionName} locationType={location.subClass} key={location.regionID} latitude={location.locationCoordinates ? location.locationCoordinates.latitude : 0} longitude={location.locationCoordinates ? location.locationCoordinates.longitude : 0}/>
                </li>
              </ul>

						</div>
					</div>
				);
			})
		}
		</div>
	);
	}
}

LocationList.defaultProps = {
  locations: {},
  cssClass: 'col-md-4'
};

LocationList.propTypes = {
	locations: PropTypes.object.isRequired,
	cssClass: PropTypes.string,
  authActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currency: state.currency,
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
