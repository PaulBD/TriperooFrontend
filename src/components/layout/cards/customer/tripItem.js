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

    let url =  this.props.parentUrl + "/trips/" + this.props.trip.id + '/' + this.props.trip.listName;

    let shareText = 'Hey! I have created a trip on Triperoo which I thought you might like called' + this.props.trip.listName + '. Check it out!';

    let imageUrl = "/static/img/placeholder.png";

    if (this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0) {
        if (this.props.trip.bookmarks[0].image) {
          imageUrl = this.props.trip.bookmarks[0].image;
        }
    }

    let style = {
      backgroundImage: 'url(' + imageUrl + ')'
    };

    return (
      <div className="card text-center" key={this.props.key}>
        <div className="cardBg reviewBg" style={style} ></div>
        <div className="card-block testimonial">
          <h4 className="card-title">
            <a href={url}>{this.props.trip.listName}</a>
          </h4>
          <h6 className="card-subtitle mb-2 text-muted tripStartDate">{moment(this.props.trip.startDate).format('YYYY-MM-DD')} to {moment(this.props.trip.endDate).format('YYYY-MM-DD')}</h6>
          <p className={this.props.trip.description ? "card-text" : "hide"}>
            {this.props.trip.description}
          </p>
          <hr />
          <div className="date text-center">Share with friends</div>
          <div className="text-center">
            <FacebookShareButton className="shareBtn" url={url} title={shareText} picture={this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0 ? this.props.trip.bookmarks[0].image : ''}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton className="shareBtn" url={url} title={shareText} picture={this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0 ? this.props.trip.bookmarks[0].image : ''}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <GooglePlusShareButton url={url} className="shareBtn">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
          </div>

        </div>
        <div className="card-footer">
          <small className="text-muted">{this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0 ? this.props.trip.bookmarks.length : 0} Bookmarks</small>
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
  position: PropTypes.number
};

export default TripItem;
