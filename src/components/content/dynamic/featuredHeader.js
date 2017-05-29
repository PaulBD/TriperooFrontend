import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contentActions from '../../../actions/location/common/contentActions';
import Loader from '../../common/loadingDots';

class FeaturedHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.loadContent();
  }

  loadContent() {
    this.setState({isLoading: true})
    this.props.contentActions.loadHeaderContent(this.props.contentType)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render() {

    const {header} = this.props;
    let style = {};
    let price = '';

    if (header)
    {
      style = {
        backgroundImage: 'url(' + header.backgroundImage + ')'
      };

      price = header.price;

      if (price !== '') {
        price = <h5>{price}</h5>;
      }
    }

    if (!this.state.isLoading) {

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
        </div>);
    }
    else {
      return (
        <div className="bg-holder full text-xs-center text-white holidayPage">
          <Loader showLoader={true}/>
        </div>);
    }
  }
}

FeaturedHeader.defaultProps = {
  header: {}
};

FeaturedHeader.propTypes = {
  header: PropTypes.object.isRequired,
  contentActions: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return { header: state.content.header ? state.content.header[0] : {} };
}

function mapDispatchToProps(dispatch) {
  return {
    contentActions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedHeader);
