import React, {Component, PropTypes} from 'react';
import initialState from '../../../reducers/initialState';
import Item from '../navigation/navigationItem';

let titleCase = require('title-case');

class SubHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


	render(){    

        let url = '';

        if (this.props.place !== undefined && this.props.place.overview !== undefined) {
            url = this.props.place.imageUrl;
        }

        let style = {
            backgroundImage: 'url(' + url + ')'
        };

        let places = '';

        if ((this.props.place !== undefined) && (this.props.place.data.hotels.count > 0)) {
          places = (
            <ul className="list text-xs-right list-inline cityNav">
                <Item item={this.props.place.data.hotels} showCount={0} showName={0} isActive={this.props.pageType == 'hotels' ? 1 : 0} cssClass="fa fa-bed user-profile-statictics-icon" />
                <Item item={this.props.place.data.flights} showCount={0} showName={0} isActive={this.props.pageType == 'flights' ? 1 : 0} cssClass="fa fa-plane user-profile-statictics-icon" />
                <Item item={this.props.place.data.attractions} showCount={0} showName={0} isActive={this.props.pageType == 'attractions' ? 1 : 0} cssClass="fa fa-ticket user-profile-statictics-icon" />
                <Item item={this.props.place.data.restaurants} showCount={0} showName={0} isActive={this.props.pageType == 'restaurants' ? 1 : 0} cssClass="fa fa-cutlery user-profile-statictics-icon" />
                <Item item={this.props.place.data.bars} showCount={0} showName={0} isActive={this.props.pageType == 'bars' ? 1 : 0} cssClass="fa fa-glass user-profile-statictics-icon" />
                <Item item={this.props.place.data.reviews} showCount={0} showName={0} isActive={this.props.pageType == 'reviews' ? 1 : 0} cssClass="fa fa-comment user-profile-statictics-icon" />
                <Item item={this.props.place.data.questions} showCount={0} showName={0} isActive={this.props.pageType == 'questions' ? 1 : 0} cssClass="fa fa-question user-profile-statictics-icon" />
            </ul> 
          );
        }

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
                              <li className="breadcrumb-item"><a href={this.props.place.countryUrl}>{this.props.place.country}</a></li>
                              <li className="breadcrumb-item"><a href={this.props.place.url}>{this.props.place.name}</a></li>
                              <li className="breadcrumb-item active">{titleCase(this.props.pageType)}</li>
                            </ol>
                            <h1>{titleCase(this.props.pageType)}</h1>
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

SubHeader.defaultProps = {
    place: initialState.place
};

SubHeader.propTypes = {
    place: PropTypes.object.isRequired,
    pageType: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};

export default SubHeader;