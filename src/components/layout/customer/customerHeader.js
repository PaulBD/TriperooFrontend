import React, {PropTypes} from 'react';
let _ = require('lodash');
import ReviewButton from '../../layout/buttons/reviewButton';
import QuestionButton from '../../layout/buttons/questionButton';
import TripButton from '../../layout/buttons/bookmarkButton';
import FollowButton from '../../layout/buttons/followButton';

class UserHeader extends React.Component {

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
      return (
        <div>
          <div className="top-area show-onload userProfile">
            <div className="bg-holder full text-white">
              <div className="bg-mask"></div>
              <div className="bg-img blur" style={style}></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12">
                    <a href={this.props.user.profile.profileUrl} className="twPc-avatarLink header">
                      <img src={this.props.user.profile.imageUrl ? this.props.user.profile.imageUrl : '/static/img/userProfileImg.png'} className="twPc-avatarImg"/>
                    </a>
                    <div className="twPc-divUser header">
                      <div className="twPc-divName">
                        <a href={this.props.user.profile.profileUrl}>{this.props.user.profile.name}</a>
                      </div>
                      <span>{this.props.user.profile.currentLocation}</span>
                      <FollowButton isActiveUser={this.props.isActiveUser} customerReference={this.props.user.customerReference.replace('customer:', '')} followedBy={this.props.user.followedBy} updateStats={this.updateStats}/>

                    </div>
                  </div>
                  <div className="col-md-4 hidden-sm-down text-right">
                    <div className="row customerHeader">
                      <div className="col-md-3 text-center">
                        <h3>{this.state.stats ? this.state.stats.likeCount : 0}</h3>
                        <h4>{this.state.stats ? this.state.stats.likeCount == 1 ? 'like' : 'likes' : 'likes'}</h4>
                      </div>
                      <div className="col-md-3 text-center">
                        <h3>{this.state.stats ? this.state.stats.reviewCount : 0}</h3>
                        <h4>{this.state.stats ? this.state.stats.reviewCount == 1 ? 'review' : 'reviews' : 'reviews'}</h4>
                      </div>
                      <div className="col-md-3 text-center">
                        <h3>{this.state.stats ? this.state.stats.followerCount : 0}</h3>
                        <h4>{this.state.stats ? this.state.stats.followerCount == 1 ? 'follower' : 'followers' : 'followers'}</h4>
                      </div>
                      <div className="col-md-3 text-center">
                        <h3>{this.state.stats ? this.state.stats.followingCount : 0}</h3>
                        <h4>following</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jumbotron customerSubHeader hidden-sm-up">
            <div className="container">
              <div className="row">
                <div className="gap gap-mini"></div>
                <div className="col-3 text-center">
                  <h4>{this.state.stats ? this.state.stats.likeCount : 0}</h4>
                  <small>{this.state.stats ? this.state.stats.likeCount == 1 ? 'like' : 'likes' : 'likes'}</small>
                </div>
                <div className="col-3 text-center">
                  <h4>{this.state.stats ? this.state.stats.reviewCount : 0}</h4>
                  <small>{this.state.stats ? this.state.stats.reviewCount == 1 ? 'review' : 'reviews' : 'reviews'}</small>
                </div>
                <div className="col-3 text-center">
                  <h4>{this.state.stats ? this.state.stats.followerCount : 0}</h4>
                  <small>{this.state.stats ? this.state.stats.followerCount == 1 ? 'follower' : 'followers' : 'followers'}</small>
                </div>
                <div className="col-3 text-center">
                  <h4>{this.state.stats ? this.state.stats.followingCount : 0}</h4>
                  <small>following</small>
                </div>
              </div>
            </div>
          </div>
          <div className={this.props.isActiveUser ? "jumbotron customerSubHeader" : "hide"}>
            <div className="container">
              <div className="row">
                <div className="gap gap-mini"></div>
                <div className="col-md-6">
                  <span className={this.props.user.profile.bio ? '' : 'hide'}>
                    <strong>About</strong><br/>
                    {this.props.user.profile.bio}
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-4 text-right">
                      <TripButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType=""  />
                      <div className="gap gap-mini"></div>
                    </div>
                    <div className="col-md-4 text-right">
                      <QuestionButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" pageSize={3} pageNumber={0} />
                    </div>
                    <div className="col-md-4 text-right">
                      <ReviewButton name="sidePanel" locationId={0} locationName="" locationNameLong="" locationType="" pageNumber={0} pageSize={0} />
                    </div>
                  </div>
                </div>
                <div className="gap gap-mini hidden-sm-up"></div>
              </div>
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

UserHeader.defaultProps = {
  user: {},
  isAuthenticated: false,
  isActiveUser: false
};

UserHeader.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired
};

export default UserHeader;
