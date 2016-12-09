import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as featureActions from '../../actions/featureActions';

class FeatureComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadFeatures(this.props.featureType);
  }

  render() {

    const {features} = this.props;

    if (features.length > 0)
    {

      let style = {
        backgroundImage: 'url(' + features[0].backgroundImage + ')'
      };

      let price = features[0].price;

      if (price !== '') {
        price = <h5>{price}</h5>;
      }

      return (
          <div className="bg-holder full text-xs-center text-white holidayPage">
            <div className="bg-mask"></div>
            <div className="bg-img" style={style}></div>
            <div className="bg-front full-center">
                <div className="owl-cap">
                    <h1 className="owl-cap-title fittext">{features[0].title}</h1>
                    <div className="owl-cap-price">
                    <small>{features[0].subTitle} {this.props.featureType}</small>
                    {price}
                    </div><a href={features[0].url} className="btn btn-white btn-ghost"><i className="fa fa-angle-right"></i> {features[0].buttonText}</a>
                </div>
            </div>
          </div>
      );
    }
    else { 
      return false;
    }
  }
}

FeatureComponent.propTypes = {
  features: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  featureType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    features: state.features
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(featureActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureComponent);