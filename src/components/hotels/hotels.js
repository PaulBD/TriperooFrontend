import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as hotelActions from '../../actions/hotelActions';

import HotelList from './hotelList';
import Loader from '../common/loadingDots';

class Hotels extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { deals: [], isLoading: 1 };
  }

  componentDidMount() {
    this.props.hotelActions.loadHotels(this.props.id, this.props.searchType);
    this.state = { isLoading: 0 };
  }

  render() {

    return (
      <div>
          <HotelList hotels={this.props.hotels} />
          <Loader showLoader={this.state.isLoading} />
      </div>    
    );
  }
}

Hotels.propTypes = {
  id: PropTypes.number.isRequired,
  hotels: PropTypes.array.isRequired,
  hotelActions: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  searchType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hotels: state.hotels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);