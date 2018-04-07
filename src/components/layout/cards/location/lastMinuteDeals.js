import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dealActions from '../../../../actions/location/travelContent/dealActions';
import Loader from '../../../loaders/contentLoader';
import Toastr from 'toastr';

class LastMinuteDeals extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingDeals: true };
  }

  componentWillMount() {
    if (this.props.locationId > 0) {
      this.loadDeals(this.props.locationId, this.props.pageSize, 0);
    }
  }

  loadDeals(locationId, pageSize, pageNumber) {
    this.setState({isLoadingDeals: true });
    this.props.dealActions.loadDealsByLocation(locationId, pageSize, pageNumber, true)
      .then(() => this.setState({isLoadingDeals: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingDeals: false});
      });
  }

  render(){
    if (!this.state.isLoadingDeals)
    {
      console.log(this.props.deals);
      return (
        <div className="col-md-12">
          {this.props.title ? <h4 className="locationTitle">{this.props.title}</h4> : ''}
          <div className="row">
            {
              this.props.deals.map((deal, index) => {
                const bgImage = {
                  backgroundImage: "url(" + deal.merchant_image_url + ")"
                };

                return (
                  <div className="col-md-3" key={index}>
                    <div className="card locationCardWrapper">
                      <div className="cardBgImage" style={bgImage}>

                      </div>
                      <div className="card-body cardPadding">
                        <h5 className="card-title locationCard">{deal.product_name.length > 30 ? deal.product_name.substring(0, 27) + '...' : deal.product_name}</h5>

                        <p className="card-text">{deal.description}</p>
                        <p className="card-text">{deal.search_price > 0 ? deal.search_price + ' ' + deal.currency : ''}</p>
                        <a href={deal.aw_deep_link} target="_blank" className="btn btn-primary btn-sm">View Deal</a>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="col-md-12">
          <Loader showLoader={true}/>
        </div>
      );
    }
  }
}

LastMinuteDeals.defaultProps = {
  name: '',
  locationId: 0,
  locationName: '',
  pageSize: 8,
  deals: [],
  isFetching: false,
  title: ''
};

LastMinuteDeals.propTypes = {
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  deals: PropTypes.array.isRequired,
  dealActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  title: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    deals: state.deals.deals ? state.deals.deals : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dealActions: bindActionCreators(dealActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastMinuteDeals);
