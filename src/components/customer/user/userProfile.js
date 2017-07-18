import React, {PropTypes} from 'react';

import ReviewButton from '../../reviews/reviewButton';
import QuestionButton from '../../questions/questionButton';
import TripButton from '../../common/bookmarkButton';
import FollowButton from './followButton';
let _ = require('lodash');

class UserProfileNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { stats: this.props.user.stats };
    this.updateStats = this.updateStats.bind(this);
  }
  componentWillMount() {
    this.setState({stats: _.cloneDeep(this.props.user.stats)});
  }

  updateStats(follow) {
    let stats = this.state.stats;
    follow ? stats.followerCount += 1 : stats.followerCount -= 1;
    this.setState({stats: stats});
  }

  render() {
    let style = {};

    if (this.props.user.profile != undefined) {
      if (this.props.user.profile.backgroundImageUrl != undefined) {
        style = {
          backgroundImage: 'url(' + this.props.user.profile.backgroundImageUrl + ')'
        };
      }
    }

    if (this.props.user && this.props.user.profile) {

      let followingUrl = this.props.user.profile.profileUrl + '/following';
      let followerUrl = this.props.user.profile.profileUrl + '/followers';
      let reviewUrl = this.props.user.profile.profileUrl + '/reviews';

      return (
        <div className="col-md-12">
          <div className="twPc-div">
            <a className="twPc-bg twPc-block" style={style}></a>
            <div>
              <FollowButton isActiveUser={this.props.isActiveUser} customerReference={this.props.user.customerReference.replace('customer:', '')} followedBy={this.props.user.followedBy} updateStats={this.updateStats}/>
              <a href={this.props.user.profile.profileUrl} className="twPc-avatarLink">
                <img src={this.props.user.profile.imageUrl ? this.props.user.profile.imageUrl : '/static/img/userProfileImg.png'} className="twPc-avatarImg"/>
              </a>
              <div className="twPc-divUser">
                <div className="twPc-divName">
                  <a href={this.props.user.profile.profileUrl}>{this.props.user.profile.name}</a>
                </div>
                <span>{this.props.user.profile.currentLocation}</span>
              </div>
              <div className="twPc-divStats">
                <ul className="twPc-Arrange">
                  <li className="twPc-ArrangeSizeFit">
                    <span className="twPc-StatLabel twPc-block">Likes</span>
                    <span className="twPc-StatValue">{this.state.stats ? this.state.stats.likeCount : 0}</span>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a href={reviewUrl}>
                      <span className="twPc-StatLabel twPc-block">Reviews</span>
                      <span className="twPc-StatValue">{this.state.stats ? this.state.stats.reviewCount : 0}</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a href={followerUrl}>
                      <span className="twPc-StatLabel twPc-block">Followers</span>
                      <span className="twPc-StatValue">{this.state.stats ? this.state.stats.followerCount : 0}</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a href={followingUrl}>
                      <span className="twPc-StatLabel twPc-block">Following</span>
                      <span className="twPc-StatValue">{this.state.stats ? this.state.stats.followingCount : 0}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={this.props.user.profile.bio ? "twPc-divDesc" : "hide"}>
                <p>{this.props.user.profile.bio}</p>
              </div>
            </div>
          </div>
          <div className={this.props.isActiveUser ? "row" : "hide"}>
            <div className="col-md-6 col-12">
                <div className="gap-small"></div>
              <TripButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType=""  />
            </div>
            <div className="col-md-6 col-12">
                <div className="gap-small"></div>
              <QuestionButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" pageSize={3} pageNumber={0} />
            </div>
            <div className="col-md-12 col-12">
                <div className="gap-small"></div>
              <ReviewButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" />
            </div>
          </div>
          <div className="gap-small"></div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

UserProfileNavigation.defaultProps = {
  user: {},
  isAuthenticated: false,
  isActiveUser: false
};

UserProfileNavigation.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired
};

export default UserProfileNavigation;
