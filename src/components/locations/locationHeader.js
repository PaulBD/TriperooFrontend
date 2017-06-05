import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import Loader from '../common/loadingDots';

class LocationHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){

    let style = {
      backgroundImage: 'url(' + this.props.location.image + ')'
    };

    if (this.props.hasLoaded) {
      return (
        <div className="top-area show-onload locationPage">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img" style={style}></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-xs-7">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a
                      href={this.props.location.parentUrl}>{this.props.location.parentRegionNameLong}</a></li>
                    <li className="breadcrumb-item active">{this.props.location.regionName}</li>
                  </ol>
                  <h1>{this.props.location.regionName}</h1>
                  <div className="reviewsHeader">
                    <StarRating starRating={this.props.location.averageReviewScore}
                                className="icon-list list-inline-block mb0 last-minute-rating"
                                includeReviewCount={true}
                                reviewCount={this.props.location.reviewCount}/>

                  </div>
                </div>
                <div className="col-md-4 col-xs-5 text-xs-right">
                  <div className="gap gap-small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="top-area show-onload infoPage">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img"></div>
            <div className="container">
              <div className="row">
                <Loader showLoader={true} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

LocationHeader.defaultProps = {
  location:{}
};

LocationHeader.propTypes = {
  location: PropTypes.object.isRequired,
  hasLoaded: PropTypes.bool
};

export default LocationHeader;
