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
      this.state = { deals: [], isLoading: true };
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

    this.state = { isLoading: false };
  }

  render() {

    let deals = '';

    switch (this.props.searchType)
    {
      case "trending":
        deals = (<DealList deals={this.props.trendingDeals} />);
        break;
      case "hot":
        deals = (<DealList deals={this.props.hotDeals} />);
        break;
      case "special":
        deals = (<DealList deals={this.props.specialDeals} />);
        break;
      case "topHotels":
        deals = (<DealList deals={this.props.hotelDeals} />);
        break;
      case "topAttractions":
        deals = (<DealList deals={this.props.attractionDeals} />);
        break;
      case "topRestaurants":
        deals = (<DealList deals={this.props.restaurantDeals} />);
        break;
    }

    return (
        <div>
            <h3>{this.props.title} <small><a href="/holidays/trending-now">view all</a></small></h3>
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
  id: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    trendingDeals: state.trendingDeals,
    hotDeals: state.hotDeals,
    specialDeals: state.specialDeals,
    hotelDeals: state.hotelDeals,
    restaurantDeals: state.restaurantDeals,
    attractionDeals: state.attractionDeals
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