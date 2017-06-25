import React, {PropTypes} from 'react';
import StarRating from '../common/starRating';
import Loader from '../common/loadingDots';

class LocationHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { imageUrl : '' };
  }

  render(){

    checkImage(this.props.location.image, function() { this.setState({imageUrl: this.props.location.image}); }, function() { this.setState({imageUrl: ''}); });

    let style = {
      backgroundImage: 'url(' + this.props.location.image + ')'
    };

    if (this.state.imageUrl.length == 0) {

      if (this.props.location.photos) {
        if (this.props.location.photos.photoList) {
          if (this.props.location.photos.photoList.length > 0) {
            style.backgroundImage = 'url(' + this.props.location.photos.photoList[0].prefix + '2000x2000' + this.props.location.photos.photoList[0].suffix + ')';
          }
        }
      }
    }

    console.log(this.props.location);

    if (this.props.hasLoaded) {
      return (
        <div className="top-area show-onload locationPage">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img blur" style={style}></div>
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
                    <StarRating starRating={this.props.location.averageReviewScore ? this.props.location.averageReviewScore : 0}
                                className="icon-list list-inline-block mb0 last-minute-rating"
                                includeReviewCount={true}
                                reviewCount={this.props.location.reviewCount ? this.props.location.reviewCount : 0}/>

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

function checkImage(imageSrc, good, bad) {
  let img = new Image();
  img.onerror = bad;
  img.onload = good;
  img.src = imageSrc;
}

LocationHeader.defaultProps = {
  location:{}
};

LocationHeader.propTypes = {
  location: PropTypes.object.isRequired,
  hasLoaded: PropTypes.bool
};

export default LocationHeader;
