import React, {PropTypes} from 'react';
import Item from './navigation/navigationItem';
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
        <div className="top-area show-onload infoPage">
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
                </div>
                <div className="col-md-4 col-xs-5 text-xs-right">
                  <div className="gap gap-small"></div>
                  <div className="reviewsHeader">
                    <StarRating starRating={this.props.location.averageReviewScore}
                                className="icon-list list-inline-block mb0 last-minute-rating"/>
                    {this.props.location.reviewCount == 1 ? this.props.location.reviewCount + ' Review' : this.props.location.reviewCount + ' Reviews'}
                  </div>
                </div>

                <div className="col-md-4 col-xs-5 hide">
                  <ul className="list text-xs-right list-inline cityNav">
                    <Item item="Reviews" parentUrl={this.props.location.url} showCount={false} showName={false}
                          isActive={false} cssClass="fa fa-comments user-profile-statictics-icon"/>
                    <Item item="Photos" parentUrl={this.props.location.url} showCount={false} showName={false}
                          isActive={false} cssClass="fa fa-picture-o user-profile-statictics-icon"/>
                    <Item item="Bookmark" parentUrl={this.props.location.url} showCount={false} showName={false}
                          isActive={false} cssClass="fa fa-bookmark user-profile-statictics-icon"/>
                  </ul>
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
