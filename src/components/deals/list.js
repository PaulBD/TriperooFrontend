import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as trendingDealActions from '../../actions/trendingDealActions';
import * as hotDealActions from '../../actions/hotDealActions';
import * as specialDealActions from '../../actions/specialDealActions';
import * as dealActions from '../../actions/dealActions';

import DealList from './dealList';
import Loader from '../common/loadingDots';

class Deals extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { deals: [], isLoading: 1 };
  }

  componentDidMount() {

    switch (this.props.searchType) {
      case "topHotels":
         this.props.dealActions.loadHotelDeals(this.props.id, this.props.searchType);
        break;
      case "topAttractions":
         this.props.dealActions.loadAttractionDeals(this.props.id, this.props.searchType);
        break;
      case "topRestaurants":
         this.props.dealActions.loadRestaurantDeals(this.props.id, this.props.searchType);
        break;
    }

    this.state = { isLoading: 0 };
  }

  render() {

    let deals = '';
    let url = '';

    switch (this.props.searchType)
    {
      case "trending":
        deals = (<DealList deals={this.props.trendingDeals} />);
        url = '/holidays/trending-now';
        break;
      case "hot":
        deals = (<DealList deals={this.props.hotDeals} />);
        url = '/holidays/hot-deals';
        break;
      case "special":
        deals = (<DealList deals={this.props.specialDeals} />);
        url = '/holidays/special-deals';
        break;
      case "topHotels":
        deals = (<DealList deals={this.props.hotelDeals} />);
        url = this.props.path + '/hotels/top-hotels';
        break;
      case "topAttractions":
        deals = (<DealList deals={this.props.attractionDeals} />);
        url = this.props.path + '/attractions/top-attractions';
        break;
      case "topRestaurants":
        deals = (<DealList deals={this.props.restaurantDeals} />);
        url = this.props.path + '/restaurants/top-restaurants';
        break;
    }

    return (
        <div>
            <h3>{this.props.title} <small><a href={url}>view all</a></small></h3>
            {deals}
            <Loader showLoader={this.state.isLoading} />
        </div>    
    );
  }
}

Deals.propTypes = {
  trendingDeals: PropTypes.array.isRequired,
  hotDeals: PropTypes.array.isRequired,
  specialDeals: PropTypes.array.isRequired,
  hotelDeals: PropTypes.array.isRequired,
  restaurantDeals: PropTypes.array.isRequired,
  attractionDeals: PropTypes.array.isRequired,

  trendingActions: PropTypes.object.isRequired,
  hotActions: PropTypes.object.isRequired,
  specialActions: PropTypes.object.isRequired,

  dealActions: PropTypes.object.isRequired,

  searchType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
  path: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    trendingDeals: state.trendingDeals,
    hotDeals: state.hotDeals,
    specialDeals: state.specialDeals,
    hotelDeals: state.hotelDeals,
    restaurantDeals: state.restaurantDeals,
    attractionDeals: state.attractionDeals,
    path: ownProps.location !== undefined && ownProps.location.pathname !== undefined ? ownProps.location.pathname : ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    trendingActions: bindActionCreators(trendingDealActions, dispatch),
    hotActions: bindActionCreators(hotDealActions, dispatch),
    specialActions: bindActionCreators(specialDealActions, dispatch),
    dealActions: bindActionCreators(dealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deals);