import React, {Component, PropTypes} from 'react';
var titleCase = require('title-case');

class CityHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

	render(){
	return (
<div className="top-area show-onload infoPage">
            <div className="bg-holder full text-white">
                <div className="bg-mask"></div>
                <div className="bg-img chester"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-7">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a href="/">Home</a></li>
                              <li className="breadcrumb-item"><a href="/place/united-kingdom">United Kingdom</a></li>
                              <li className="breadcrumb-item"><a href="/place/united-kingdom/chester">Chester</a></li>
                              <li className="breadcrumb-item active">{titleCase(this.props.pageType)}</li>
                            </ol>
                            <h1>{titleCase(this.props.pageType)}</h1>
                        </div>
                        <div className="col-md-4 col-xs-5">
                        <ul className="list text-xs-right list-inline cityNav">
                                <li>
                                    <a href="/place/united-kingdom/chester/hotels" title="Book a hotel" className="active">
                                        <i className="fa fa-bed user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/chester/restaurants" title="Book a Restaurant">
                                        <i className="fa fa-cutlery user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/chester/pubs" title="Visit a Bar">
                                        <i className="fa fa-glass user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/chester/attractions" title="Visit an Attraction">
                                        <i className="fa fa-ticket user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/place/united-kingdom/chester/reviews" title="Read Reviews">
                                        <i className="fa fa-comment user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="Post Questions">
                                        <i className="fa fa-question user-profile-statictics-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       	);
	}
}

CityHeader.propTypes = {
  pageType: PropTypes.func.isRequired,
  city: PropTypes.func.isRequired,
  country: PropTypes.func.isRequired
};
CityHeader.defaultProps = {

};

export default CityHeader;