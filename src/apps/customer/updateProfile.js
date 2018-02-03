import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserProfileForm from '../../components/forms/authentication/profileForm';
import MarketingPreferencesForm from '../../components/forms/authentication/marketingPreferences';
import TriperooLoader from '../../components/loaders/globalLoader';
import CustomerHeader from '../../components/layout/customer/customerNavigation';
import Toastr from 'toastr';

class UpdateProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeField = this.changeField.bind(this);
    this.changeMarketingField = this.changeMarketingField.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitMarketingForm = this.submitMarketingForm.bind(this);

    this.state = {
      loading: true,
      isUpdating: false,
      isUpdatingMarketing: false,
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
      marketing: {
        optInEmail: 0,
        optInPost: 0,
        optInTelephone: 0,
        optInText: 0,
        gdprConsent: 0
      },
      errors:''
    };
  }

  componentWillMount() {
    document.title = 'Update Profile';
    window.scrollTo(0, 0);

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
            marketing: {
              optInEmail: this.props.user.marketing.optInEmail ? 1 : 0,
              optInPost: this.props.user.marketing.optInPost ? 1 : 0,
              optInTelephone: this.props.user.marketing.optInTelephone ? 1 : 0,
              optInText: this.props.user.marketing.optInText ? 1 : 0,
              gdprConsent: this.props.user.marketing.gdprConsent ? 1 : 0
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
      this.setState({isUpdating: false, errors: "Please supply valid customer details"});
    }

  }

  submitMarketingForm(e) {
    e.preventDefault();
    this.setState({isUpdatingMarketing: true});
    this.props.userActions.updateMarketingPreferences(this.state.marketing)
      .then(() => {
        this.setState({isUpdatingMarketing: false, errors: this.props.errorMessage});
        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          Toastr.success('Marketing preferences saved');
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isUpdatingMarketing: false, errors: error});
      });
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

  changeMarketingField(event){

    const field = event.target.name;
    let marketing = this.state.marketing;

    if (!marketing[field])
    {
      marketing[field] = 1;
    }
    else {
      marketing[field] = 0;
    }
    this.setState({marketing: marketing});
  }

  render(){
    if (this.props.isAuthenticated && this.props.isActiveUser) {
      if (!this.state.loading) {
        return (
          <div>
            <CustomerHeader user={this.props.user} isAuthenticated={this.props.isAuthenticated} isActiveUser={this.props.isActiveUser} pageName="Update Profile"/>
            <div className="container">
              <div className="gap gap-small"></div>
              <div className="row">
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
                                 onSubmit={this.submitStandardForm}
                                 onChange={this.changeField}
                                 onChangeAutoComplete={this.onChangeAutoComplete}
                                 errors={this.props.errorMessage}
                />
              </div>
              <div className="gap gap-small"></div>
              <div className="row">
                <MarketingPreferencesForm optInEmail={this.state.marketing.optInEmail}
                                          optInPost={this.state.marketing.optInPost}
                                          optInTelephone={this.state.marketing.optInTelephone}
                                          optInText={this.state.marketing.optInText}
                                          gdprConsent={this.state.marketing.gdprConsent}
                                          isUpdating={this.state.isUpdatingMarketing}
                                          onSubmit={this.submitMarketingForm}
                                          onChange={this.changeMarketingField}
                                          errors={this.props.marketingErrorMessage}
                                          />
              </div>
              <div className="gap gap"></div>
            </div>
          </div>
        );
      }
      else {
        return (<TriperooLoader />);
      }
    }
    else {
      return (
        <div className="container customerPhotos">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-12 text-center" role="alert">
              <p  className="alert alert-info text-center">
                You do not have access to this page, please log in and try again.
              </p>
            </div>
          </div>
        </div>
      );
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
  errorMessage: PropTypes.string,
  marketingErrorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid.trim() == user.userId.trim() : false,
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
