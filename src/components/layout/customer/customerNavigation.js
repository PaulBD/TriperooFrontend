import React, {PropTypes} from 'react';
let _ = require('lodash');
import FollowButton from '../../layout/buttons/followButton';

class UserNavigation extends React.Component {

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
                      <li className="breadcrumb-item active">{this.props.pageName}</li>
                    </ol>
                    <h1>{this.props.pageName}</h1>
                  </div>
                </div>
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

UserNavigation.defaultProps = {
  user: {},
  isAuthenticated: false,
  isActiveUser: false,
  pageName: ''
};

UserNavigation.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  pageName: PropTypes.string.isRequired
};

export default UserNavigation;
