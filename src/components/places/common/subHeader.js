import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import initialState from '../../../reducers/initialState';
import Item from '../navigation/navigationItem';

let titleCase = require('title-case');

class SubHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


	render(){    

        let url = '';

        if (this.props.area !== undefined && this.props.area.overview !== undefined) {
            url = this.props.area.imageUrl;
        }

        let style = {
            backgroundImage: 'url(' + url + ')'
        };

        let places = '';
        let breadcrumb = '';

        let countryUrl = '';
        let cityUrl = '';
        let placeUrl = this.props.area.url + '/' + this.props.pageType;
        let pageType = '';

        if ((this.props.area !== undefined) && (this.props.area.data.hotels.count > 0)) {
          places = (
            <ul className="list text-xs-right list-inline cityNav">
                <Item item={this.props.area.data.hotels} showCount={0} showName={0} isActive={this.props.pageType == 'hotels' ? 1 : 0} cssClass="fa fa-bed user-profile-statictics-icon" />
                <Item item={this.props.area.data.flights} showCount={0} showName={0} isActive={this.props.pageType == 'flights' ? 1 : 0} cssClass="fa fa-plane user-profile-statictics-icon" />
                <Item item={this.props.area.data.attractions} showCount={0} showName={0} isActive={this.props.pageType == 'attractions' ? 1 : 0} cssClass="fa fa-ticket user-profile-statictics-icon" />
                <Item item={this.props.area.data.restaurants} showCount={0} showName={0} isActive={this.props.pageType == 'restaurants' ? 1 : 0} cssClass="fa fa-cutlery user-profile-statictics-icon" />
                <Item item={this.props.area.data.bars} showCount={0} showName={0} isActive={this.props.pageType == 'bars' ? 1 : 0} cssClass="fa fa-glass user-profile-statictics-icon" />
                <Item item={this.props.area.data.reviews} showCount={0} showName={0} isActive={this.props.pageType == 'reviews' ? 1 : 0} cssClass="fa fa-comment user-profile-statictics-icon" />
                <Item item={this.props.area.data.questions} showCount={0} showName={0} isActive={this.props.pageType == 'questions' ? 1 : 0} cssClass="fa fa-question user-profile-statictics-icon" />
            </ul> 
          );
        }

        if ((this.props.area !== undefined) && (this.props.area.data.hotels.count > 0)) {
            breadcrumb = returnBreadcrumb(this.props.area.countryUrl, this.props.area.country, this.props.area.url, this.props.area.name, placeUrl, this.props.pageType);
        }
        
        if ((this.props.area !== undefined) && (this.props.area.data.hotels.count > 0)) {
            pageType = titleCase(this.props.pageType);
        }

	    return (
        <div className="top-area show-onload infoPage">
            <div className="bg-holder full text-white">
                <div className="bg-mask"></div>
                <div className="bg-img" style={style}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-7">
                            {breadcrumb}
                            <h1>{pageType}</h1>
                        </div>
                        <div className="col-md-4 col-xs-5">
                            {places}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

function returnBreadcrumb(countryUrl, countryName, cityUrl, cityName, placeUrl, pageType) {

    if ((cityName !== undefined) && (countryName !== undefined))
    {
        return (
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href={countryUrl}>{countryName}</a></li>
              <li className="breadcrumb-item"><a href={cityUrl}>{cityName}</a></li>
              <li className="breadcrumb-item active"><a href={placeUrl}>{titleCase(pageType)}</a></li>
            </ol>
        );
    } else { return ''; }
}

SubHeader.defaultProps = {
    area: initialState.area
};

SubHeader.propTypes = {
    area: PropTypes.object.isRequired,
    pageType: PropTypes.string.isRequired,
    countryName: PropTypes.string,
    countryId: PropTypes.number,
    cityName: PropTypes.string,
    cityId: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    countryId: ownProps.params.countryId ? parseInt(ownProps.params.countryId) : 0,
    countryName: ownProps.params.country,
    cityId: ownProps.params.cityId ? parseInt(ownProps.params.cityId) : 0,
    cityName: ownProps.params.city
  };
}

function mapDispatchToProps(dispatch) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);