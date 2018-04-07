import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import Loader from '../loaders/contentLoader';
import SignupForm from '../forms/authentication/signupForm';
import FacebookButton from '../layout/buttons/facebookButton';
import FacebookForm from '../forms/authentication/facebookForm';
import Toastr from 'toastr';

class Register extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.changeField = this.changeField.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.showFacebookLocationForm = this.showFacebookLocationForm.bind(this);

    this.state = {
      creds: {
        accessToken: '',
        emailAddress: '',
        password: '',
        facebookId: '',
        name: '',
        imageUrl: '',
        cityId: 0,
        city: '',
        optIn: 1
      },
      useFacebook: false,
      errors:'',
      creatingUser: false
    };
  }

  showFacebookLocationForm(response) {
    this.setState({creatingUser: true, useFacebook: false, creds: { accessToken: response.accessToken, emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, city: '', cityId: 0, password: '', optIn: 1}});

    this.props.actions.getFacebookUser({accessToken: this.state.creds.accessToken, emailAddress: this.state.creds.emailAddress, facebookId: this.state.creds.facebookId, name: this.state.creds.name, imageUrl: this.state.creds.imageUrl, cityId: this.state.creds.cityId, city: this.state.creds.city})
      .then(() => {
        if (this.props.user != undefined)
        {
          if (this.props.user != undefined)
          {
            if (this.props.user.profile.currentLocation == '' || this.props.user.profile.currentLocation == 0)
            {
              this.setState({useFacebook: true});
            }
            else {
              this.login();
            }
          }
          else {
            this.setState({useFacebook: true});
          }
        } else {
          this.setState({useFacebook: true});
        }
      })
      .catch(error => {
        console.log(error);
        Toastr.error(error);
        this.setState({creatingUser: false, errors: error});
      });
  }

  submitFacebookForm(e) {
    e.preventDefault();
    this.login();
  }

  login() {

    this.props.actions.loginFacebookUser({accessToken: this.state.creds.accessToken, emailAddress: this.state.creds.emailAddress, facebookId: this.state.creds.facebookId, name: this.state.creds.name, imageUrl: this.state.creds.imageUrl, cityId: this.state.creds.cityId, city: this.state.creds.city, optIn: this.state.creds.optIn})
      .then(() => {
        this.setState({creatingUser: false, errors: this.props.errorMessage});
        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          this.closeSignupModal(null);
        }
      })
      .catch(error => {
        console.log(error);
        Toastr.error(error);
        this.setState({creatingUser: false, errors: error});
      });
  }

  submitStandardForm(e) {
    e.preventDefault();
    if ((this.state.creds.name.length > 0) && (this.state.creds.cityId > 0) && (this.state.creds.emailAddress.length > 0) && (this.state.creds.password.length > 0))
    {
      this.setState({creatingUser: true});
      this.props.actions.registerUser(this.state.creds)
        .then(() => {
          this.setState({creatingUser: false, errors: this.props.errorMessage});

          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
            this.closeSignupModal(null);
          }
        })
        .catch(error => {
          console.log(error);
          Toastr.error(error);
          this.setState({creatingUser: false, errors: error});
        });
    }
    else {
      this.setState({creatingUser: false, errors: "Please supply valid sign up details"});
    }
  }

  closeSignupModal(e) {
    if (e != null) {
      e.preventDefault();
    }

    browserHistory.push("/welcome");

    this.props.closeModal();
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  changeField(event) {
    //event.preventDefault();
    const field = event.target.name;
    let creds = this.state.creds;


    if (field == 'optIn')
    {
      if (this.state.creds.optIn == 0)
      {
        creds[field] = 1;
      }
      else {
        creds[field] = 0;
      }
    }
    else {
      creds[field] = event.target.value;
    }

    this.setState({creds: creds});
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    let creds = this.state.creds;
    creds.cityId = cityId;
    creds.city = city;
    this.setState({creds: creds});
  }

  render(){
    return (
      <div className="modal-dialog modelAuthentication" role="document">
        <div className={!this.state.creatingUser && !this.state.isLoggingIn && !this.state.useFacebook  ? "modal-content" : "modal-content hide"}>
          <div className="modal-body">
            <div className="row">
              <div className="gap gap-mini"></div>
              <div className="col-md-12 text-center">
                <FacebookButton onCallback={this.showFacebookLocationForm}/>
              </div>
              <div className="gap gap-mini"></div>
              <div className="col-md-12  text-center signupSeperator">
                <strong>or</strong>
                <hr />
              </div>
              <div className="gap gap-mini"></div>
              <SignupForm name={this.state.creds.name} emailAddress={this.state.creds.emailAddress} password={this.state.creds.password} cityId={this.state.creds.cityId} city={this.state.creds.city} optIn={this.state.creds.optIn} isSigningUp={this.state.creatingUser} onSubmit={this.submitStandardForm} onChange={this.changeField} onChangeAutoComplete={this.onChangeAutoComplete} errors={this.state.errors} />
            </div>
          </div>
          <div className="modal-footer text-center">
            <p className="closeText mb-0"><a href="#" onClick={this.closeModal}>Close</a></p>
          </div>
        </div>
        <div className={this.state.isFetching ? "modal-content" : "modal-content hide"}>
          <Loader showLoader={this.props.isFetching} />
        </div>
        <div className={this.state.useFacebook ? "modal-dialog modelAuthentication " : "modal-dialog modelAuthentication hide"} role="document"><div className="modal-body">
          <div className="row">
            <div className="gap gap-mini"></div>
            <FacebookForm errors={this.state.errors} isUpdating={this.state.creatingUser} onSubmit={this.submitFacebookForm} onChangeAutoComplete={this.onChangeAutoComplete} city="" optIn={this.state.creds.optIn} onChange={this.changeField}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

Register.defaultProps = {
  isAuthenticated: false,
  user: {}
};

Register.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  closeModal: PropTypes.func,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isFetching: state.authentication.isFetching,
    errorMessage: state.authentication.errorMessage,
    user: state.authentication.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
