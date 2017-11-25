import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dealActions from '../../../../actions/location/travelContent/dealActions';
import Loader from '../../../loaders/contentLoader';
let titleCase = require('title-case');
import Toastr from 'toastr';

class LastMinuteDeals extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingDeals: true };
  }

  componentWillMount() {
    this.loadDeals(this.props.locationId, this.props.pageSize, 0);
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
      return (
        <div className="col-md-12">
          {this.props.title ? <h4 className="locationTitle">{titleCase(this.props.title)}</h4> : ''}
          <div className="row">
            {
              this.props.deals.map((deal, index) => {

                const bgImage = {
                  backgroundImage: "url(" + deal.merchant_image_url + ")"
                };

                return (
                  <div className="col-md-6" key={deal.product_name}>
                    <div className="hover-img bgImage" style={bgImage}>
                      <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                        <a href={deal.aw_deep_link} target="_blank">
                          <div className="text-small">
                            <h5>{deal.product_name}</h5>
                            <p>{deal.description}</p>
                            <p>{deal.search_price > 0 ? deal.search_price + ' ' + deal.currency : ''}</p>
                          </div>
                        </a>
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
