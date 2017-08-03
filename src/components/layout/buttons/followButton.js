import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userFollowActions from '../../../actions/customer/userFollowActions';

class FollowButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingFollows: true, isFollowing: false };
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  componentWillMount() {
    this.checkFollows();
  }

  checkFollows() {
    if (this.props.followedBy != undefined) {
      for (let i = 0; i < this.props.followedBy.length; i++) {
        if (this.props.followedBy[i].customerReference == this.props.customerReference) {
          this.setState({isFollowing: true});
        }
      }
    }
  }

  followUser(e) {
    this.props.userFollowActions.followUser(this.props.customerReference)
      .then (response => {
          this.setState({isFollowing: true});
          this.props.updateStats(true);
        }
      )
      .catch(error => {

      });
  }

  unfollowUser(e) {
    this.props.userFollowActions.unfollowUser(this.props.customerReference)
      .then (response => {
          this.setState({isFollowing: false});
          this.props.updateStats(false);
        })
      .catch(error => {

      });
  }

  render() {
    if (!this.state.isFollowing) {
      return (
        <div className={this.props.isActiveUser ? "hide" : "twPc-button"}>
          <a href="#" onClick={this.followUser} className="btn btn-sm btn-secondary" data-remote="true">
            <i className="fa fa-check"></i>
            Follow
          </a>
        </div>
      );
    }
    else {
      return (
        <div className={this.props.isActiveUser ? "hide" : "twPc-button"}>
          <a href="#" onClick={this.unfollowUser} className="btn btn-sm btn-secondary" data-remote="true">
            <i className="fa fa-check"></i>
            Following
          </a>
        </div>
      );
    }
  }
}

FollowButton.defaultProps = {
  isActiveUser : false,
  customerReference : '',
  followedBy: []
};

FollowButton.propTypes = {
  userFollowActions : PropTypes.object.isRequired,
  isActiveUser : PropTypes.bool.isRequired,
  customerReference : PropTypes.string.isRequired,
  followedBy : PropTypes.array.isRequired,
  updateStats: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    userFollowActions: bindActionCreators(userFollowActions, dispatch)
  };
}

export default connect(mapDispatchToProps)(FollowButton);

