import React, {PropTypes} from 'react';
import Loader from '../../loaders/contentLoader';
let moment = require('moment');

class TripHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    let style = {};

    if (this.props.trip.tripDetails.image != undefined) {
      style = {
        backgroundImage: 'url(' + this.props.trip.tripDetails.image + ')'
      };
    }

    if (this.props.hasLoaded) {
      let tripUrl = this.props.user.profile.profileUrl + "/trips";
      return (
        <div className="top-area show-onload locationPage">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img blur" style={style}></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={this.props.user.profile.profileUrl}>{this.props.user.profile.name}</a></li>
                    <li className="breadcrumb-item"><a href={tripUrl}>Trips</a></li>
                    <li className="breadcrumb-item active">{this.props.trip.tripName}</li>
                  </ol>
                  <h1>{this.props.trip.tripName}</h1>

                  <p className="tripDate">{moment(this.props.trip.tripDetails.tripStart).format('LL')} to {moment(this.props.trip.tripDetails.tripEnd).format('LL')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="top-area show-onload infoPage">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img"></div>
            <div className="container">
              <div className="row">
                <Loader showLoader={true} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

TripHeader.defaultProps = {
  trip:{},
  user:{}
};

TripHeader.propTypes = {
  trip: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  hasLoaded: PropTypes.bool
};

export default TripHeader;
