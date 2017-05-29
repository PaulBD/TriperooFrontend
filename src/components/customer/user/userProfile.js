import React, {PropTypes} from 'react';

class UserProfileNavigation extends React.Component {
	render() {
    if (this.props.user && this.props.user.profile) {
      return (
        <aside className="user-profile-sidebar">
          <div className="user-profile-avatar text-center">
            <img
              src={this.props.user.profile.imageUrl ? this.props.user.profile.imageUrl : '/static/img/userProfileImg.png'}/>
            <h5>{this.props.user.profile.name}</h5>
          </div>
          <ul className="list user-profile-nav">
            <li><a href={this.props.user ? this.props.user.profile.profileUrl : ""}><i className="fa fa-map-o"></i>Overview</a>
            </li>
            <li className={this.props.isActiveUser ? "" : "hide"}><a
              href={this.props.user ? this.props.user.profile.profileUrl + "/profile" : ""}><i
              className="fa fa-user"></i>Update Profile</a></li>
            <li><a href={this.props.user ? this.props.user.profile.profileUrl + "/photos" : ""}><i
              className="fa fa-photo"></i>My Travel Photos</a></li>
            <li><a href={this.props.user ? this.props.user.profile.profileUrl + "/reviews" : ""}><i
              className="fa fa-comments"></i>My Reviews</a></li>
            <li><a href={this.props.user ? this.props.user.profile.profileUrl + "/bookmarks" : ""}><i
              className="fa fa-heart-o"></i>Bookmarks</a></li>
            <li className={this.props.isActiveUser ? "" : "hide"}><a
              href={this.props.user ? this.props.user.profile.profileUrl + "/booking-history" : ""}><i
              className="fa fa-clock-o"></i>My Bookings</a></li>
          </ul>
        </aside>
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
