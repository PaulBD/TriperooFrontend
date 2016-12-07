import React from 'react';
import UserProfile from '../../components/userProfile';
import UserProfileForm from '../../components/userProfileForm';
import ChangePassword from '../../components/changePassword';
// Since this component is simple and static, there's no parent container for it.
export default class UpdateProfile extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <UserProfile />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-5">
                            <UserProfileForm />
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <h4>Change Password</h4>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
