import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as headerActions from '../../../actions/headerActions';
import Loader from '../../common/loadingDots';

class FeaturedHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadHeader(this.props.headerType);
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
        <div className="bg-holder full text-xs-center text-white holidayPage">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className={header.title ? "bg-front full-center" : "bg-front full-center hide"}>
              <div className={header.title ? "owl-cap" : "owl-cap hide"}>
                  <h1 className="owl-cap-title fittext">{header.title}</h1>
                  <div className="owl-cap-price">
                    <small>{header.subTitle}</small>
                    {price}
                  </div>
                  <a href={header.url} className="btn btn-white btn-ghost">
                  <i className="fa fa-angle-right"></i> {header.buttonText}</a>
              </div>
          </div>
          <Loader showLoader={showLoader} />
        </div>);
  }
}

FeaturedHeader.defaultProps = {
  header: {}
};

FeaturedHeader.propTypes = {
  header: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  headerType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    header: state.header[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedHeader);