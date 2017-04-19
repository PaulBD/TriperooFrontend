import React from 'react';
import UserProfile from '../../components/customers/userProfile';
import UserProfileForm from '../../components/customers/userProfileForm';
import ChangePassword from '../../components/customers/changePassword';
// Since this component is simple and static, there's no parent container for it.
export default class CustomerHome extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
        <div className="container">
            <div className="gap gap"></div>
            <div className="row">
                Home
            </div>
        </div>
    );
  }
}
