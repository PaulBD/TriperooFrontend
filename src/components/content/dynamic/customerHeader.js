import React, {PropTypes} from 'react';
import Loader from '../../loaders/contentLoader';

class CustomerHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: true };
  }

  render() {
    let style = {};
    if (!this.props.isLoading) {

      if (this.props.userDetails.profile != undefined) {
        if (this.props.userDetails.profile.backgroundImageUrl != undefined) {
          style = {
            backgroundImage: 'url(' + this.props.userDetails.profile.backgroundImageUrl + ')'
          };
        }
      }

      console.log(this.props.userDetails);

      return (
        <div className="bg-holder full text-center text-white holidayPage">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className="bg-front full-center">
            <div className="owl-cap">
              <h1 className="owl-cap-title fittext">Welcome</h1>
              <div className="owl-cap-price">
                <small>{this.props.userDetails.profile.name}</small>
                {this.props.userDetails.profile.currentLocation}
              </div>
            </div>
          </div>
        </div>);
    }
    else {
      return (
        <div className="bg-holder full text-center text-white holidayPage">
          <Loader showLoader={true}/>
        </div>);
    }
  }
}

CustomerHeader.defaultProps = {
  userDetails: {}
};

CustomerHeader.propTypes = {
  userDetails: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CustomerHeader;
