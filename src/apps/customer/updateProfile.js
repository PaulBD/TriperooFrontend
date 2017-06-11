import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserHeader from '../../components/customer/user/userHeader';
import UserProfileForm from '../../components/customer/forms/profileForm';
import TriperooLoader from '../../components/common/triperooLoader';
import UserProfile from '../../components/customer/user/userProfile';
import Toastr from 'toastr';

class UpdateProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeField = this.changeField.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.submitStandardForm = this.submitStandardForm.bind(this);

    this.state = {
      loading: false,
      isUpdating: false,
      isUpdatingPassword: false,
      isFacebookSignup: false,
      creds: {
        name: '',
        emailAddress: '',
        bio: '',
        dateOfBirth: '',
        currentLocation:'',
        currentLocationId: 0,
        pass: '',
        phoneNumber: ''
      },
      errors:''
    };
  }

  componentDidMount() {
    document.title = 'Update Profile';
    window.scrollTo(0, 0);

    this.setState({loading: true});

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        if (this.props.user.profile) {
          this.setState({
            loading: false,
            isFacebookSignup: this.props.user.isFacebookSignup,
            creds: {
              name: this.props.user.profile.name,
              emailAddress: this.props.user.profile.emailAddress,
              bio: this.props.user.profile.bio,
              currentLocation: this.props.user.profile.currentLocation,
              currentLocationId: this.props.user.profile.currentLocationId,
              dateOfBirth: this.props.user.profile.dateOfBirth,
              pass: this.props.user.profile.pass,
              phoneNumber: this.props.user.profile.phoneNumber
            },
            errors: ''
          });
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }


  submitStandardForm(e) {
    e.preventDefault();
    if ((this.state.creds.name.length > 0) && (this.state.creds.currentLocationId > 0) && (this.state.creds.emailAddress.length > 0))
    {
      this.setState({isUpdating: true});
      this.props.userActions.updateUser(this.state.creds)
        .then(() => {
          this.setState({isUpdating: false, errors: this.props.errorMessage});
          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
            Toastr.success('Profile saved');
          }
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({isUpdating: false, errors: error});
        });
    }
    else {
      this.setState({isUpdating: false, errors: "Please supply valid profile details"});
    }

  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    let creds = this.state.creds;
    creds.currentLocationId = cityId;
    creds.currentLocation = city;
    this.setState({creds: creds});
  }

  changeField(event) {
    event.preventDefault();
    const field = event.target.name;
    let creds = this.state.creds;
    creds[field] = event.target.value;
    this.setState({creds: creds});
  }

  render(){
    if (this.props.isAuthenticated && this.props.isActiveUser) {
      if (!this.state.loading) {
        return (
          <div className="container">
            <div className="gap gap-small"></div>
            <div className="row">
              <div className="col-md-4">
                <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Update Profile</h4>
                    <hr />
                    <UserProfileForm name={this.state.creds.name}
                                     emailAddress={this.state.creds.emailAddress}
                                     bio={this.state.creds.bio}
                                     dateOfBirth={this.state.creds.dateOfBirth}
                                     cityId={this.state.creds.currentLocationId}
                                     city={this.state.creds.currentLocation}
                                     password={this.state.creds.pass}
                                     phoneNumber={this.state.creds.phoneNumber}
                                     isFacebookSignup={this.state.isFacebookSignup}
                                     isUpdating={this.state.isUpdating}
                                     onSubmit={this.submitStandardForm} onChange={this.changeField}
                                     onChangeAutoComplete={this.onChangeAutoComplete} errors={this.props.errors}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gap gap"></div>
          </div>
        );
      }
      else {
        return (<TriperooLoader />);
      }
    }
    else {
      return (<p>Unauthenticated!</p>);
    }
  }
}


UpdateProfile.defaultProps = {
  user: {}
};

UpdateProfile.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null,
    errorMessage: state.user.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
