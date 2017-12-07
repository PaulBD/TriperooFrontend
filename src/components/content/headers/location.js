import React, {PropTypes} from 'react';
import WeatherSummary from '../../layout/weather/summary';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    let style = {
      backgroundImage: 'url(' + this.props.location.image + ')'
    };

    let html = null;

    if (this.props.location.regionType == "City") {
      html = (
        <div className="owl-cap">
          <WeatherSummary locationId={this.props.location.regionID} type={this.props.location.regionType} />
          <h1 className="owl-cap-title fittext">{this.props.location.regionName}</h1>
          <div className="owl-cap-price">
            <small>{this.props.location.regionNameLong}</small>
          </div>
        </div>
      );
    }
    else {
      html = (
        <div className="owl-cap">
          <h1 className="owl-cap-title fittext">{this.props.location.regionName}</h1>
          <div className="owl-cap-price">
            <small><a href={this.props.location.parentUrl}>{this.props.location.parentRegionName}</a></small>
          </div>
        </div>
      );
    }

    return (
      <div className="top-area show-onload cityPage">
        <div className="bg-holder full text-lg-center text-xs-center text-white">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className="bg-front full-center">
            {html}
            <div className="gap gap"></div>
          </div>
        </div>
      </div>
    );

  }
}

Header.defaultProps = {
  location:{}
};

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
