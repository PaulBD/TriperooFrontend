import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dealActions from '../../../actions/location/travelContent/dealActions';
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
    this.props.dealActions.loadDealsByLocation(this.props.locationId, 1, 0, false)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render() {

    const {deals} = this.props;

    let style = {};
    let price = '';

    if (!this.state.isLoading)
    {
      if (deals.length > 0) {

        style = {
          backgroundImage: 'url(' + deals[0].merchant_image_url + ')'
        };

        price = deals.price;

        if ((price !== '') && (price !== '00.00')) {
          price = <p className="mb20">{price}</p>;
        }

        return (
            <div className="bg-holder">
              <div className="bg-mask"></div>
              <div className="bg-parallax" style={style}></div>
              <div className="bg-content">
                <div className="container">
                  <div className="gap gap-big text-md-center text-xs-center text-lg-center text-white">
                    <h5 className="last-minute-title">{deals[0].product_name}</h5>
                    <h3>{deals[0].description}</h3>
                    {price}
                    <a className="btn btn-lg btn-white btn-ghost" href={deals[0].aw_deep_link} target="_blank">View
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
  deals: []
};

LastMinuteDeal.propTypes = {
  deals: PropTypes.array.isRequired,
  dealActions: PropTypes.object.isRequired,
  locationId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    deals: state.deals.deals ? state.deals.deals : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dealActions: bindActionCreators(dealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastMinuteDeal);
