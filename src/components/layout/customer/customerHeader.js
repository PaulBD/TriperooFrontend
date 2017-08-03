import React, {PropTypes} from 'react';

class UserHeader extends React.Component {
  render(){
    if (this.props.user && this.props.user.profile) {
      return (
        <div className="top-area show-onload userProfile">
          <div className="bg-holder full text-white">
            <div className="bg-mask"></div>
            <div className="bg-img"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">

                  <img src={this.props.user.profile.imageUrl ? this.props.user.profile.imageUrl : '/static/img/userProfileImg.png'} className="user-profile-avatar"/>
                  <h1 className="userTitle">{this.props.user.profile.name}</h1>
                </div>
                <div className="col-md-12 text-center">
                  <p className="userStats">x Reviews, x Countries, 3 Cities</p>
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

UserHeader.defaultProps = {
  user: {},
  isAuthenticated: false
};

UserHeader.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired
};

export default UserHeader;
