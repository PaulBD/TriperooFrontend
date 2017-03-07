import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';
import Loader from '../common/loadingDots';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitResetPasswordForm = this.submitResetPasswordForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.changeForgotPassword = this.changeForgotPassword.bind(this);
    this.changeLogin = this.changeLogin.bind(this);

    this.state = { emailAddress: '', password: '', errors:'', isForgotPassword: false };
  }

  submitFacebookForm(response) {
    const creds = { emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, currentCityId: 1};
    this.props.actions.loginFacebookUser(creds);
  }

  submitStandardForm(e) {
    e.preventDefault();
    const creds = { emailAddress: this.state.emailAddress.trim(), password: this.state.password.trim() };
    this.props.actions.loginUser(creds);
  }

  submitResetPasswordForm(e) {
    e.preventDefault();
    const creds = { emailAddress: this.state.emailAddress.trim() };
    this.props.actions.resetPassword(creds);
  }

  handleEmailAddressChange(e) {
    e.preventDefault();
    this.setState({ emailAddress: e.target.value, errors: '' });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value, errors: '' });
  }

  changeForgotPassword(e) {
    e.preventDefault();
    this.setState({ isForgotPassword: true, errors: '' });
  }

  changeLogin(e) {
    e.preventDefault();
    this.setState({ isForgotPassword: false, errors: '' });
  }

  render(){

  let emailAddress = this.state.emailAddress;
  let password = this.state.password;

  if (this.props.isAuthenticated)
  {
    let event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': false });
    let node = document.getElementById('closeLogin');

    if (event != null && node != null)
    {
      node.dispatchEvent(event); 
    }
  }
  
  return (
    <div className="modal fade" id="loginModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className={this.state.isForgotPassword ? "modal-dialog modelAuthentication hide" : "modal-dialog modelAuthentication"} role="document">
        <div className={this.props.isFetching ? "modal-content hide" : "modal-content"}>
          <div className="modal-body">
            <div className="row">
              <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                <div className="bg-danger form-danger">
                {this.props.errorMessage}
                </div>
              </div>
              <div className="gap gap-small"></div>
              <div className="col-md-12 text-xs-center">
                <FacebookLogin appId="347205502054817" autoLoad={false} fields="name,email,picture"  cssClass="my-facebook-button-class" textButton="" callback={this.submitFacebookForm} />
              </div>
              <div className="gap gap-small"></div>
              <div className="col-md-12 text-xs-center signupSeperator">
                <strong>or</strong>
                <hr />
              </div>
              <form className="modalForm" onSubmit={this.submitStandardForm}>
                <div className="col-md-12">
                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                        <input className="form-control" placeholder="Enter Email Address" type="text" onChange={this.handleEmailAddressChange} text={emailAddress}/>
                    </div>
                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
                        <input className="form-control" type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} text={password} />
                    </div>
                </div>
                <div className="col-md-12 text-xs-center">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
                <div className="gap gap-small"></div>
                <div className="col-md-12 text-xs-center">
                    <a href="#" onClick={this.changeForgotPassword}>Forgot Password? Click here</a>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer text-xs-center">
            <a href="#" data-dismiss="modal" id="closeLogin">Close</a>
          </div>
        </div>
        <div className={this.props.isFetching ? "modal-content" : "modal-content hide"}>
            <Loader showLoader={this.props.isFetching} />
        </div>
      </div>
      <div className={this.state.isForgotPassword ? "modal-dialog modelAuthentication " : "modal-dialog modelAuthentication hide"} role="document">
        <div className={this.props.isFetching ? "modal-content hide" : "modal-content"}>
          <div className="modal-body">
            <div className="row">
              <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                <div className="bg-danger form-danger">
                {this.props.errorMessage}
                </div>
              </div>
              <div className={this.props.hasSentPassword ? 'col-md-12' : 'col-md-12 hide'}>
                <div className="bg-success form-success">
                A reset password email has been sent
                </div>
              </div>
              <form className="modalForm" onSubmit={this.submitResetPasswordForm}>
                <div className="col-md-12 text-xs-center">
                  <p>Please enter your email address below and we'll send you an email to reset your password.</p>
                </div>
                <div className="col-md-12">
                  <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                    <input className="form-control" placeholder="Enter Email Address" type="text" onChange={this.handleEmailAddressChange} text={emailAddress}/>
                  </div>
                </div>
                <div className="col-md-12 text-xs-center">
                    <input className="btn btn-primary" type="submit" value="Reset Password" />
                </div>
                <div className="gap gap-small"></div>
                <div className="col-md-12 text-xs-center">
                  <a href="#" onClick={this.changeLogin}>Return to login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={this.props.isFetching ? "modal-content" : "modal-content hide"}>
            <Loader showLoader={this.props.isFetching} />
        </div>
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
  errorMessage: PropTypes.string
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
