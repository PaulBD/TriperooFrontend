import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotDealActions from '../actions/hotDealActions';
import DealList from './common/dealList';
import Loader from './common/loadingDots';

class HotDeals extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { hotDeals: [], isLoading: true };
  }

  componentDidMount() {
      this.props.actions.loadHotDeals();
      this.state = { isLoading: false };
  }

  render() {

    const {hotDeals} = this.props;

    return (
        <div>
            <h3>Hot Deals <small ><a href="/holidays/hot-deals">view all</a></small></h3>
            <DealList deals={hotDeals} />
            <Loader showLoader={this.state.isLoading} />
        </div>    
    );
  }
}

HotDeals.propTypes = {
  hotDeals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hotDeals: state.hotDeals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(hotDealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals);