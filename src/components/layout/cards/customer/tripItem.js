import React, {PropTypes} from 'react';
let moment = require('moment');

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

class TripItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
    alert(e);
    e.target.src='/static/img/placeholder.png';
  }

  render() {
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      TwitterShareButton
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const GooglePlusIcon = generateShareIcon('google');


    let shareText = 'Hey! I have created a trip on Triperoo which I thought you might like called' + this.props.trip.tripName + '. Check it out!';

    let imageUrl = "";

    imageUrl =  this.props.trip.tripDetails.image;

    if (imageUrl == undefined || imageUrl == '') {
      if (this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0) {
        if (this.props.trip.bookmarks[0].image) {
          imageUrl = this.props.trip.days[0].image;
        }
      }
    }

    if (imageUrl == '') {
      imageUrl = "/static/img/placeholder.png";
    }


    let style = {
      backgroundImage: 'url(' + imageUrl + ')'
    };

    return (
        <div className="card text-xs-left mb-4 text-center" key={this.props.key}>
          <div className="cardBg reviewBg" style={style} ></div>
          <div className="card-block testimonial">
            <h4 className="card-title">
              <a href={this.props.trip.url}>{this.props.trip.tripName}</a>
            </h4>
            <h6 className="card-subtitle mb-2 text-muted tripStartDate">{moment(this.props.trip.tripDetails.tripStart).format('YYYY-MM-DD')} to {moment(this.props.trip.tripDetails.tripEnd).format('YYYY-MM-DD')}</h6>
            <p className={this.props.trip.tripDetails.description ? "card-text" : "hide"}>
              {this.props.trip.tripDetails.description}
            </p>
            <hr />
            <div className="date text-center">Share with friends</div>
            <div className="text-center">
              <FacebookShareButton className="shareBtn" url={this.props.trip.url} title={shareText} picture={this.props.trip.days && this.props.trip.days.length > 0 ? this.props.trip.days[0].image : ''}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton className="shareBtn" url={this.props.trip.url} title={shareText} picture={this.props.trip.days && this.props.trip.days.length > 0 ? this.props.trip.days[0].image : ''}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <GooglePlusShareButton url={this.props.trip.url} className="shareBtn">
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
            </div>

          </div>
          <div className="card-footer">
            <small className="text-muted">{this.props.trip.days && this.props.trip.days.length > 0 ? this.props.trip.days.length : 0} Bookmarks</small>
          </div>
        </div>

    );
  }
}

TripItem.defaultProps = {
  trip: {},
  key: '',
  position: 0
};

TripItem.propTypes = {
  parentUrl: PropTypes.string.isRequired,
  trip: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
  position: PropTypes.number
};

export default TripItem;
