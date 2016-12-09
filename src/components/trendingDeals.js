import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as trendingDealActions from '../actions/trendingDealActions';
import DealList from './common/dealList';

class TrendingDeals extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { trendingDeals: [] };

      this.props.actions.loadTrendingDeals();
  }

  render() {

    const {trendingDeals} = this.props;

    return (
        <div>
            <h3>Trending Now <small ><a href="/holidays/trending-now">view all</a></small></h3>
            <DealList deals={trendingDeals} />
        </div>    
    );
  }
}

TrendingDeals.propTypes = {
  trendingDeals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    trendingDeals: state.trendingDeals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(trendingDealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingDeals);