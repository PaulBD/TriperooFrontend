import React, {PropTypes} from 'react';
import Loader from '../../common/loadingDots';
import Item from './navigationItem';
let titleCase = require('title-case');

class NavigationWrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    let places = '';

    if (this.props.location !== undefined) {
      places = (
        <ul className="list text-xs-center list-inline user-profile-statictics mb30 l30">
          <Item item="Hotels" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-bed user-profile-statictics-icon" />
          <Item item="Attractions" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-ticket user-profile-statictics-icon" />
          <Item item="Restaurants" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-cutlery user-profile-statictics-icon" />
          <Item item="Nightlife" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-glass user-profile-statictics-icon" />
          <Item item="Events" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-calendar-o user-profile-statictics-icon" />
          <Item item="Reviews" parentUrl={this.props.location.url} showCount={true} showName={true} cssClass="fa fa-comment user-profile-statictics-icon" />
         </ul> 
      );
    }

    return (            
      <div className="search-tabs search-tabs-bg search-tabs-to-top">
        <div className="tabbable">
          <div className="tab-content">
            <div className="tab-pane fade in active text-xs-center" id="tab-1">
              <h2 className="text-xs-center">Explore, Plan &amp; Book Your Visit to {titleCase(this.props.name)}</h2>
              <div className="gap gap-small"></div>
              {places}                    
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

NavigationWrapper.defaultProps = {
  location: {}
};

NavigationWrapper.propTypes = {
    location: PropTypes.object.isRequired,
    name: PropTypes.string
};


export default NavigationWrapper;