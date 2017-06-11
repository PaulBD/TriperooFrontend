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
    let spacer = '';

    switch (this.props.cssClass) {
      case 'col-md-3':
        switch (this.props.position) {
          case 3:
          case 7:
          case 11:
          case 15:
          case 17:
            spacer = <div className="gap gap-small"></div>;
            break;
        }
        break;
      case 'col-md-4':
        switch (this.props.position) {
          case 2:
          case 5:
          case 8:
          case 11:
          case 14:
            spacer = <div className="gap gap-small"></div>;
            break;
        }
      break;
      case 'col-md-6':
        switch (this.props.position) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 9:
            spacer = <div className="gap gap-small"></div>;
            break;
        }
        break;
    }

    let shareText = 'Hey! I have created a trip on Triperoo which I thought you might like called' + this.props.trip.listName + '. Check it out!';

    let imageUrl = "/static/img/placeholder.png";

    if (this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0) {
        if (this.props.trip.bookmarks[0].image) {
          imageUrl = this.props.trip.bookmarks[0].image;
        }
    }

    console.log(imageUrl);
    return (

      <div className={this.props.cssClass} key={this.props.key}>
        <figure className="snip1492">

          <a href={url}>
          <img src={imageUrl} alt={this.props.trip.listName} onError={this.handleMissingImage}  />
          </a>
          <figcaption>
            <h3>{this.props.trip.listName}</h3>
            <p>All this modern technology just makes people try to do everything at once.</p>
            <hr />
            <div className="price">
              {this.props.trip.bookmarks && this.props.trip.bookmarks.length > 0 ? this.props.trip.bookmarks.length : 0} Bookmarks
            </div>
            <div className="date">
              {moment(this.props.trip.startDate).format('YYYY-MM-DD')} to {moment(this.props.trip.endDate).format('YYYY-MM-DD')}
           </div>
            <hr />
            <div className="date">Share with friends</div>
            <div className="text-xs-center">
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
          </figcaption>
        </figure>

        {spacer}
      </div>
    );
  }
}

TripItem.defaultProps = {
  trip: {},
  key: '',
  cssClass: 'col-md-3',
  position: 0
};

TripItem.propTypes = {
  parentUrl: PropTypes.string.isRequired,
  trip: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
  position: PropTypes.number,
  cssClass: PropTypes.string
};

export default TripItem;
