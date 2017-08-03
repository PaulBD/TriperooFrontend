import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hotelActions from '../../../actions/location/travelContent/hotelActions';
import Loader from '../../loaders/contentLoader';

class LastMinuteDeal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentDidMount() {
    this.loadDeals();
  }

  loadDeals() {
    this.setState({isLoading: true});
    this.props.hotelActions.loadHotelDealsByLocation(this.props.locationId, 1, 0)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render() {

    const {hotelDeals} = this.props;

    let style = {};
    let price = '';

    if (!this.state.isLoading)
    {
      if (hotelDeals.length > 0) {

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
                  <div className="gap gap-big text-center text-white">
                    <h5 className="last-minute-title">{hotelDeals[0].product_name}</h5>
                    <h3>{hotelDeals[0].description}</h3>
                    {price}
                    <a className="btn btn-lg btn-white btn-ghost" href={hotelDeals[0].aw_deep_link} target="_blank">View
                      Deal <i className="fa fa-angle-right"></i></a>
                    <br />
                    <small>Clicking this link will redirect you to Travelzoo</small>
                  </div>
                </div>
              </div>
            </div>
        );
      }
      else {
        return null;
      }
    }
    else
    {
      return (
        <div className="col-md-12">
          <div className="bg-holder">
            <div className="bg-mask"></div>
            <div className="bg-parallax"></div>
            <div className="bg-content">
              <div className="container">
                <div className="gap gap-big text-center text-white loadingHotelDeal">
                  <Loader showLoader={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

LastMinuteDeal.defaultProps = {
  hotelDeals: []
};

LastMinuteDeal.propTypes = {
  hotelDeals: PropTypes.array.isRequired,
  hotelActions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hotelDeals: state.hotels.hotelDeals ? state.hotels.hotelDeals : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hotelActions: bindActionCreators(hotelActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastMinuteDeal);
