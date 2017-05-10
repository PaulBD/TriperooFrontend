import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Item from './navigation/navigationItem';
import StarRating from '../common/starRating';

let titleCase = require('title-case');

class LocationHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

  render(){    

        let style = {
          backgroundImage: 'url(' + this.props.location.image + ')'
        };

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
                                  <li className="breadcrumb-item"><a href={this.props.location.parentUrl}>{this.props.location.parentRegionNameLong}</a></li>
                                  <li className="breadcrumb-item active">{this.props.location.regionName}</li>
                                </ol>
                                <h1>{this.props.location.regionName}</h1>
                            </div>
                            <div className="col-md-4 col-xs-5 text-xs-right">
                                <div className="gap gap-small"></div>
                                <p className="reviewsHeader">
                                    <StarRating starRating={4} className="icon-list list-inline-block mb0 last-minute-rating"/>
                                    0 Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LocationHeader.defaultProps = {
  location:{}
};

LocationHeader.propTypes = {
    location: PropTypes.object.isRequired,
    contentType: PropTypes.string.isRequired
};

export default LocationHeader;