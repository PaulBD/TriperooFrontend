import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as headerActions from '../../../actions/headerActions';
import StarRating from '../../common/starRating';
import Loader from '../../common/loadingDots';

class LastMinuteDeal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadLastMinuteDeal(this.props.featureType);
  }

  render() {

    const {header} = this.props;

    let showLoader = true;
    let style = {};
    let price = '';

    if (header)
    {
      showLoader = false;
      
      style = {
        backgroundImage: 'url(' + header.backgroundImage + ')'
      };

      price = header.price;

      if (price !== '') {
        price = <h5>{price}</h5>;
      }
    }

    return (
        <div className="bg-holder">
          <div className="bg-mask"></div>
          <div className="bg-parallax" style={style}></div>
          <div className="bg-content">
            <div className="container">
              <div className="gap gap-big text-xs-center text-white">
                  <h2 className="text-uc mb20">{header.headline}</h2>
                  <StarRating starRating={header.starRating ? header.starRating : 0} className="icon-list list-inline-block mb0 last-minute-rating" />
                  <h5 className="last-minute-title">{header.title}</h5>
                  <p className="last-minute-date">{header.subTitle}</p>
                  <p className="mb20">{header.price}</p><a className="btn btn-lg btn-white btn-ghost" href={header.url}>{header.buttonText} <i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
          <Loader showLoader={showLoader} />
        </div>
      );
  }
}

LastMinuteDeal.defaultProps = {
  header: {}
};

LastMinuteDeal.propTypes = {
  header: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  featureType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    header: state.lastMinute[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LastMinuteDeal);