import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelDealsActions from '../../../actions/hotelDealsActions';
import StarRating from '../../common/starRating';
import Loader from '../../common/loadingDots';

class LastMinuteDeal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadHotelDealsByLocation(this.props.locationId, 1, 0);
  }

  render() {

    const {hotelDeals} = this.props;

    let style = {};
    let price = '';

    if (hotelDeals.length > 0)
    {
      style = {
        backgroundImage: 'url(' + hotelDeals[0].merchant_image_url + ')'
      };

      price = hotelDeals.price;

      if ((price !== '') && (price !== '00.00')) {
        price = <p className="mb20">{price}</p>;
      }

      return (
        <div className="bg-holder">
          <div className="bg-mask"></div>
          <div className="bg-parallax" style={style}></div>
          <div className="bg-content">
            <div className="container">
              <div className="gap gap-big text-xs-center text-white">
                  <h5 className="last-minute-title">{hotelDeals[0].product_name}</h5>
                  <h3>{hotelDeals[0].description}</h3>
                  {price}
                  <a className="btn btn-lg btn-white btn-ghost" href={hotelDeals[0].aw_deep_link} target="_blank">View Deal <i className="fa fa-angle-right"></i></a>
                  <br />
                  <small>Clicking this link will redirect you to Travelzoo</small>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else 
    {
      return (
        <div className="bg-holder">
          <div className="bg-mask"></div>
          <div className="bg-parallax"></div>
            <div className="bg-content">
            <div className="container">
              <div className="gap gap-big text-xs-center text-white loadingHotelDeal">
                <Loader showLoader={this.props.isFetching} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

LastMinuteDeal.defaultProps = {
  hotelDeals: [],
  isFetching: false
};

LastMinuteDeal.propTypes = {
  hotelDeals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationsList.isFetching ? state.locationsList.isFetching : false,
    hotelDeals: state.hotelDeals.hotelDeals ? state.hotelDeals.hotelDeals : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(hotelDealsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastMinuteDeal);