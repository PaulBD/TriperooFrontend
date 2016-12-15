import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as specialDealActions from '../actions/specialDealActions';
import DealList from './common/dealList';
import Loader from './common/loadingDots';

class SpecialDeals extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { specialDeals: [], isLoading: true };
  }

  componentDidMount() {
      this.props.actions.loadSpecialDeals();
      this.state = { isLoading: false };
  }

  render() {

    const {specialDeals} = this.props;

    return (
        <div>
            <h3>Special Deals <small ><a href="/holidays/special-deals">view all</a></small></h3>
            <DealList deals={specialDeals} />
            <Loader showLoader={this.state.isLoading} />
        </div>    
    );
  }
}

SpecialDeals.propTypes = {
  specialDeals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    specialDeals: state.specialDeals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(specialDealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialDeals);