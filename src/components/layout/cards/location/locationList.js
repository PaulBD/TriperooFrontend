import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../../actions/customer/authenticationActions';
import ReviewIcon from '../../location/reviewIcon';
import PhotoIcon from '../../location/photoIcon';
import BookmarkIcon from '../../location/bookmarkIcon';
import VisitIcon from '../../location/visitIcon';
let changeCase = require('change-case');

class LocationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
    e.target.src = '/static/img/placeholder-large.png';
  }

  render() {

    if (this.props.locations != undefined) {
      if (this.props.locations.locations != undefined) {
        if (this.props.locations.locations.length > 0) {
          return (
            <div className="row">
              {
                this.props.locations.locations.map((location, index) => {

                  let locationType = location.subClass;
                  let fallbackImage = location.image;

                  switch (location.subClass) {
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
                    case "sunglass":
                      locationType = 'Beaches';
                      break;
                    case "neighbor":
                      locationType = "";
                      break;
                  }

                  if (fallbackImage == '') {
                    switch (location.subClass) {
                      case "Chinese":
                        fallbackImage = '/static/img/chinese-takeaway.png';
                        break;
                      case "Restaurant":
                      case "British":
                        fallbackImage = '/static/img/gastropub.png';
                        break;
                      case "Indian":
                        fallbackImage = '/static/img/indian.png';
                        break;
                      case "Pub":
                        fallbackImage = '/static/img/pub-food.png';
                        break;
                      case "Cafe":
                        fallbackImage = '/static/img/cafe.png';
                        break;
                    }
                  }


                  if (location.photos) {
                    if (location.photos.photoList) {
                      if (location.photos.photoList.length > 0) {
                        if (location.photos.photoList[0].width == 0) {
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

                  let fallbackBgImage = {
                    backgroundImage: "url(/static/img/placeholder.png)"
                  }

                  return (
                    <div className={this.props.cssClass} key={location.regionType == "Attractions" ? location.locationDetail.productCode : location.regionID} >
                      <div className="hover-img bgImage" style={fallbackBgImage}>
                        <div className="hover-img bgImage" style={bgImage}>
                          <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                            <a href={location.url}>
                              <div className="text-small">
                                <h5>{location.regionName.length > 47 ? location.regionName.substring(0, 47) + '...' : location.regionName}</h5>
                                <p className={locationType.length == 0 ? "hide" : ""}>{changeCase.ucFirst(locationType)}</p>
                                <p
                                  className={location.regionType == "Attractions" ? "" : "hide"}>{location.regionType == "Attractions" ? location.locationDetail.pricing.priceGBP + ' GBP' : ""}</p>
                              </div>
                            </a>
                          </div>
                          <ul className={this.props.isAuthenticated && this.props.showIcons ? "hover-icon-group-center-top" : "hide"}>
                            <li>
                              <ReviewIcon locationId={location.regionID} locationName={location.regionNameLong}
                                          locationType={location.subClass} key={location.regionID}/>
                            </li>
                            <li>
                              <PhotoIcon locationId={location.regionID} locationName={location.regionName}
                                         locationNameLong={location.regionNameLong} locationType={location.subClass}
                                         key={location.regionID}/>
                            </li>
                            <li>
                              <BookmarkIcon parentLocationId={this.props.location.regionID}
                                            parentLocationName={this.props.location.regionName}
                                            parentLocationNameLong={this.props.location.regionNameLong}
                                            parentLocationImage={this.props.location.image}
                                            parentLocationUrl={this.props.location.url}
                                            parentLocationType={location.regionType}
                                            locationNameLong={location.regionNameLong} locationUrl={location.url}
                                            locationImage={location.image} locationId={location.regionID}
                                            locationName={location.regionName}
                                            locationType={location.subClass}
                                            locationLength={location.locationDetail ? location.locationDetail.duration : ""}
                                            key={location.regionID}
                                            latitude={location.locationCoordinates ? location.locationCoordinates.latitude : 0}
                                            longitude={location.locationCoordinates ? location.locationCoordinates.longitude : 0}
                                            price={location.locationDetail && location.locationDetail.pricing ? location.locationDetail.pricing.priceGBP : ""}
                                            bookingUrl={location.locationDetail ? location.locationDetail.bookingUrl : ""}
                              />
                            </li>
                            <li>
                              <VisitIcon parentLocationId={this.props.location.regionID}
                                         parentLocationName={this.props.location.regionName}
                                         parentLocationNameLong={this.props.location.regionNameLong}
                                         parentLocationImage={this.props.location.regionImage}
                                         locationNameLong={location.regionNameLong} locationUrl={location.url}
                                         locationImage={location.image} locationId={location.regionID}
                                         locationName={location.regionName} locationType={location.subClass}
                                         key={location.regionID}
                                         latitude={location.locationCoordinates ? location.locationCoordinates.latitude : 0}
                                         longitude={location.locationCoordinates ? location.locationCoordinates.longitude : 0}/>
                            </li>
                          </ul>
                          </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          );
        }
        else {
          return null;
        }
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }
}

LocationList.defaultProps = {
  location: {},
  locations: {},
  cssClass: 'col-md-4',
  showIcons: true
};

LocationList.propTypes = {
  location: PropTypes.object.isRequired,
  locations: PropTypes.object.isRequired,
  cssClass: PropTypes.string,
  authActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  showIcons: PropTypes.bool.isRequired
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
