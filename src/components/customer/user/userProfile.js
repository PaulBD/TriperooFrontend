import React, {PropTypes} from 'react';

import ReviewButton from '../../reviews/reviewButton';
import QuestionButton from '../../questions/questionButton';
import TripButton from '../../common/bookmarkButton';

class UserProfileNavigation extends React.Component {
  render() {
    let style = {
      backgroundImage: 'url("http://lorempixel.com/850/280/nature/4/")'
    };

    if (this.props.user && this.props.user.profile) {
      return (
        <div className="col-md-12">
          <div className="twPc-div">
            <a className="twPc-bg twPc-block"></a>
            <div>
              <div className={this.props.isActiveUser ? "hide" : "twPc-button"}>
                <a href="/user/1/follow" className="btn btn-sm btn-secondary" data-remote="true">
                  <i className="fa fa-check"></i>
                  Follow
                </a>
              </div>
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
                    <a href="https://twitter.com/mertskaplan">
                      <span className="twPc-StatLabel twPc-block">Reviews</span>
                      <span className="twPc-StatValue">{this.props.user.stats ? this.props.user.stats.reviewCount : 0}</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a href="https://twitter.com/mertskaplan/following">
                      <span className="twPc-StatLabel twPc-block">Following</span>
                      <span className="twPc-StatValue">{this.props.user.stats ? this.props.user.stats.followingCount : 0}</span>
                    </a>
                  </li>
                  <li className="twPc-ArrangeSizeFit">
                    <a href="https://twitter.com/mertskaplan/followers">
                      <span className="twPc-StatLabel twPc-block">Followers</span>
                      <span className="twPc-StatValue">{this.props.user.stats ? this.props.user.stats.followerCount : 0}</span>
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
            <div className="col-md-6">
              <TripButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType=""  />
            </div>
            <div className="col-md-6">
              <QuestionButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" />
            </div>
          </div>
          <div className={this.props.isActiveUser ? "row" : "hide"}>
            <div className="col-md-12">
              <ReviewButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" />
            </div>
          </div>
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
