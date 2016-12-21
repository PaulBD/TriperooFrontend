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
        backgroundImage: 'url(' + this.props.place.imageUrl + ')'
      };

      let html = null;

      if (this.props.type == "city") {
        html = (
          <div className="owl-cap">
              <Weather id={this.props.id} type={this.props.type} />
              <h1 className="owl-cap-title fittext">{this.props.place.name}</h1>
              <div className="owl-cap-price">
                  <small>{this.props.place.country} / {this.props.place.county}</small>
              </div>
          </div>);
      }
      else {
        html = (
          <div className="owl-cap">
              <h1 className="owl-cap-title fittext">{this.props.place.name}</h1>
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
  place:{}
};

Header.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    place: PropTypes.object.isRequired
};

export default Header;