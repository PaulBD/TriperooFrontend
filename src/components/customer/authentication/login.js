import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import Loader from '../../common/loadingDots';
import FacebookButton from './facebookButton';
import ForgotPasswordForm from '../forms/forgotPasswordForm';
import LoginForm from '../forms/loginForm';
import Toastr from 'toastr';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitResetPasswordForm = this.submitResetPasswordForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.changeForgotPassword = this.changeForgotPassword.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

    this.changeField = this.changeField.bind(this);

    this.state = {
      creds: {
        emailAddress: '',
        password: ''
      },
      errors:'',
      isLoggingIn: false,
      isForgotPassword: false,
      isSendingPassword: false,
      hasSentPassword: false
    };
  }

  submitFacebookForm(response) {
    this.setState({creatingUser: true});
    this.props.actions.loginFacebookUser({ emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, cityId: 1, city: 'London'})
      .then(() => {
        this.setState({creatingUser: false, errors: this.props.errorMessage});

        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          this.closeLoginModal(null);
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({creatingUser: false, errors: error});
      });
  }

  submitStandardForm(e) {
    e.preventDefault();
    if ((this.state.creds.emailAddress != '' && this.state.creds.emailAddress.length > 0) && (this.state.creds.password != '' && this.state.creds.password.length > 0)) {
      this.setState({isLoggingIn: true});
      this.props.actions.loginUser(this.state.creds)
        .then(() => {
          this.setState({isLoggingIn: false, errors: this.props.errorMessage});

          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
            this.closeLoginModal(null);
          }
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({isLoggingIn: false, errors: error});
        });
    }
    else {
      this.setState({isLoggingIn: false, errors: "Please supply valid login credentials"});
    }
  }

  submitResetPasswordForm(e) {
    e.preventDefault();
    if (this.state.creds.emailAddress != '' && this.state.creds.emailAddress.length > 0) {
      this.setState({isSendingPassword: true}); //, creds: { emailAddress: this.state.creds.emailAddress, password: ''}});
      this.props.actions.resetPassword(this.state.creds)
        .then(() => {
          this.setState({isSendingPassword: false, hasSentPassword: this.props.errorMessage == '' && this.props.errorMessage.length == 0, errors: this.props.errorMessage});
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({isSendingPassword: false, errors: error});
        });
    }
    else {
      this.setState({isSendingPassword: false, errors: "Please supply a valid email address"});
    }
  }

  changeField(event) {
    event.preventDefault();
    const field = event.target.name;
    let creds = this.state.creds;
    creds[field] = event.target.value;
    this.setState({creds: creds});
  }

  changeForgotPassword(e) {
    e.preventDefault();
    this.setState({ isForgotPassword: true, errors: '' });
  }

  changeLogin(e) {
    e.preventDefault();
    this.setState({ isForgotPassword: false, errors: '' });
  }

  closeLoginModal(e) {
    if (e != null) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  render(){
    return (
      <div>
        <div className={this.state.isForgotPassword ? "modal-dialog modelAuthentication hide" : "modal-dialog modelAuthentication"} role="document">
          <div className={!this.state.creatingUser && !this.state.isLoggingIn ? "modal-content" : "modal-content hide"}>
            <div className="modal-body">
              <div className="row">
                <div className="gap gap-mini"></div>
                <div className="col-md-12 text-center">
                  <FacebookButton onCallback={this.submitFacebookForm}/>
                </div>
                <div className="gap gap-mini"></div>
                <div className="col-md-12 text-center signupSeperator">
                  <strong>or</strong>
                  <hr />
                </div>
              <div className="gap gap-mini"></div>
                <LoginForm emailAddress={this.state.creds.emailAddress} password={this.state.creds.password} isLoggingIn={this.state.isLoggingIn} onSubmit={this.submitStandardForm} onChange={this.changeField} onChangeLogin={this.changeForgotPassword} errors={this.state.errors}/>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.closeLoginModal}>Close</a>
            </div>
          </div>
          <div className={this.state.creatingUser || this.state.isLoggingIn ? "modal-content" : "modal-content hide"}>
            <Loader showLoader={true} />
          </div>
        </div>
        <div className={this.state.isForgotPassword ? "modal-dialog modelAuthentication " : "modal-dialog modelAuthentication hide"} role="document">
          <ForgotPasswordForm emailAddress={this.state.creds.emailAddress} hasSentPassword={this.state.hasSentPassword} isSendingPassword={this.state.isSendingPassword} onSubmit={this.submitResetPasswordForm} onChange={this.changeField} onChangeLogin={this.changeLogin} errors={this.state.errors}/>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  isAuthenticated: false,
  isFetching: false,
  hasSentPassword: false
};

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasSentPassword: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage,
    hasSentPassword: state.authentication.hasSentPassword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
