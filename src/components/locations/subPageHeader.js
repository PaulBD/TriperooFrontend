import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Item from './navigation/navigationItem';

let titleCase = require('title-case');

class SubHeader extends React.Component {
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
                                  <li className="breadcrumb-item"><a href={this.props.location.url}>{this.props.location.regionNameLong}</a></li>
                                  <li className="breadcrumb-item active">{titleCase(this.props.contentType)}</li>
                                </ol>
                                <h1>{titleCase(this.props.contentType)}</h1>
                            </div>
                            <div className="col-md-4 col-xs-5">
                              <ul className="list text-xs-right list-inline cityNav">
                                <Item item="Hotels" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'hotels' ? true : false} cssClass="fa fa-bed user-profile-statictics-icon" />
                                <Item item="Attractions" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'attractions' ? true : false} cssClass="fa fa-ticket user-profile-statictics-icon" />
                                <Item item="Restaurants" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'restaurants' ? true : false} cssClass="fa fa-cutlery user-profile-statictics-icon" />
                                <Item item="Nightlife" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'nightlife' ? true : false} cssClass="fa fa-glass user-profile-statictics-icon" />
                                <Item item="Events" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'events' ? true : false} cssClass="fa fa-calendar-o user-profile-statictics-icon" />
                                <Item item="Reviews" parentUrl={this.props.location.url} showCount={false} showName={false} isActive={this.props.contentType == 'reviews' ? true : false} cssClass="fa fa-comment user-profile-statictics-icon" />
                              </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SubHeader.defaultProps = {
  location:{}
};

SubHeader.propTypes = {
    location: PropTypes.object.isRequired,
    contentType: PropTypes.string.isRequired
};

export default SubHeader;