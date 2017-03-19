import React, {PropTypes} from 'react';
import Loader from '../common/loadingDots';
import Weather from '../common/weather';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.state = { isLoading: false };
  }

  render() {

      let style = {
        backgroundImage: 'url(' + this.props.location.image + ')'
      };

      let html = null;

      if (this.props.location.type == "City") {
        html = (
          <div className="owl-cap">
              <Weather id={this.props.id} type={this.props.location.type} />
              <h1 className="owl-cap-title fittext">{this.props.location.nameShort}</h1>
              <div className="owl-cap-price">
                  <small>{this.props.location.name}</small>
              </div>
          </div>
        );
      }
      else {
        html = (
          <div className="owl-cap">
              <h1 className="owl-cap-title fittext">{this.props.location.nameShort}</h1>
          </div>
        );
      }

      return (
        <div className="top-area show-onload cityPage">
            <div className="bg-holder full text-xs-center text-white">
                <div className="bg-mask"></div>
                <div className="bg-img" style={style}></div>
                <div className="bg-front full-center">
                    {html}
                    <Loader showLoader={this.state.isLoading} />
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
    id: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired
};

export default Header;