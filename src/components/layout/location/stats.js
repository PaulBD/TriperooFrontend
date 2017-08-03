import React, {PropTypes} from 'react';
import StarRating from '../../forms/common/starRating';
let stringify = require('json-stable-stringify');

class LocationStats extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.likeLocation = this.likeLocation.bind(this);
    this.unlikeLocation = this.unlikeLocation.bind(this);
    this.state = { stats: this.props.stats, showLike: true };
  }

  componentWillMount() {
    this.checkLike();
  }

  checkLike() {

    let triperooCommon = JSON.parse(localStorage.getItem('triperoo_common'));

    if (triperooCommon != undefined && triperooCommon.likes != undefined) {
      for (let i = 0; i < triperooCommon.likes.length; i++) {
        if (triperooCommon.likes[i] == this.props.locationId) {
          this.setState({showLike: false});
        }
      }
    }
  }

  likeLocation(e) {
    e.preventDefault();
    this.props.likeLocation(true);
    this.setState({showLike: false});

    // Add likes to a common cookie
    let triperooCommon = JSON.parse(localStorage.getItem('triperoo_common'));

    if (triperooCommon != undefined && triperooCommon.likes != undefined) {
      triperooCommon = {likes: []};
    }

    triperooCommon.likes.push(this.props.locationId);
    localStorage.setItem('triperoo_common', stringify(triperooCommon));
  }

  unlikeLocation(e) {
    e.preventDefault();
    this.props.likeLocation(false);

    let triperooCommon = JSON.parse(localStorage.getItem('triperoo_common'));
    if (triperooCommon != undefined && triperooCommon.likes != undefined) {
      for (let i = 0; i < triperooCommon.likes.length; i++) {
        if (triperooCommon.likes[i] == this.props.locationId) {
          triperooCommon.likes.splice(i, 1);
          this.setState({showLike: true});
          localStorage.setItem('triperoo_common', stringify(triperooCommon));
        }
      }
    }
  }

  render(){
    let reviewUrl = this.props.locationUrl + '/reviews';
    return (
      <div className="sidebar-widget">
        <hr className="hrTop"/>
        <div className="row">
          <div className="col-md-6 col-6">
            <StarRating starRating={this.state.stats.averageReviewScore} className="icon-list list-inline-block mb0 last-minute-rating statStars"/>
          </div>
          <div className="col-md-6 col-6">
            <p className="statText">
              <a href={reviewUrl}>{this.state.stats.reviewCount} review's</a><br />
              {this.state.stats.likeCount} {this.state.stats.likeCount == 1 ? 'person likes' : 'people like'} {this.props.locationName}<br />
              {this.state.showLike ? <a href="#" onClick={this.likeLocation}><i className="fa fa-like"></i> Like</a> : <a href="#" onClick={this.unlikeLocation}>Unlike</a>}</p>
          </div>
        </div>
        <hr className="hrBottom" />
      </div>
    );
  }
}

LocationStats.defaultProps = {
  stats: {},
  locationUrl: '',
  locationName: '',
  showLike: true
};

LocationStats.propTypes = {
  showLike: PropTypes.bool.isRequired,
  stats: PropTypes.object.isRequired,
  locationUrl: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  likeLocation: PropTypes.func
};

export default LocationStats;
