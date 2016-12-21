import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../../actions/placeActions';
import Loader from '../common/loadingDots';
import Weather from '../common/weather';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.props.actions.loadPlace(this.props.id, this.props.type);
    this.state = { isLoading: false };
  }

  render() {

    const {place} = this.props.place;

    let url = '';

    if (place !== undefined) {
      url = place.imageUrl;
    }

    let style = {
      backgroundImage: 'url(' + url + ')'
    };

    return (
      <div className="top-area show-onload cityPage">
          <div className="bg-holder full text-xs-center text-white">
              <div className="bg-mask"></div>
              <div className="bg-img" style={style}></div>
              <div className="bg-front full-center">
                  <div className="owl-cap">
                      <Weather id={this.props.id} type={this.props.type} />
                      <h1 className="owl-cap-title fittext">{place.name}</h1>
                      <div className="owl-cap-price">
                          <small>{place.country} / {place.county}</small>
                      </div>
                      <div className="gap gap"></div>
                  </div>
                  <Loader showLoader={this.state.isLoading} />
              </div>
          </div>
      </div>
      );
  }
}

Header.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    place: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    place: state.place
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);