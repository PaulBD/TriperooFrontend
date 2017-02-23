import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as customerActions from '../../actions/customerActions';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitForm = this.submitForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = { emailAddress: '', password: '', errors:'', isLoading: 0 };
  }

  responseFacebook(response) {
    const creds = { emailAddress: response.email, facebookId: response.userID, name: response.name, image: response.picture.data.url}
    this.props.actions.loginFacebookUser(creds);
  }

  submitFacebookForm(e) {
    e.preventDefault();
  }

  submitForm(e) {
    e.preventDefault();

    if ((this.state.emailAddress.length > 0) && (this.state.password.length > 0))
    {
      const creds = { emailAddress: this.state.emailAddress.trim(), password: this.state.password.trim() };
      this.props.actions.loginUser(creds);
    }
    else {
      this.setState({ errors: 'username' });
    }
  }

  handleEmailAddressChange(e) {
    e.preventDefault();
    this.setState({ emailAddress: e.target.value, errors: '' });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value, errors: '' });
  }

  render(){

  let emailAddress = this.state.emailAddress;
  let password = this.state.password;

  if (this.props.isAuthenticated)
  {
    var event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': false });
    var node = document.getElementById('close');

    if (event != null && node != null)
    {
      node.dispatchEvent(event);
    }
  }

  return (
    <div className="modal fade" id="loginModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog modelAuthentication" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
                <div className="gap gap-small"></div>
              <div className="col-md-12 text-xs-center">
                <FacebookLogin appId="347205502054817" autoLoad={true} fields="name,email,picture" cssClass="my-facebook-button-class" textButton="" callback={this.responseFacebook} />
              </div>
              <div className="gap gap-small"></div>
              <div className="col-md-12 text-xs-center signupSeperator">
                <strong>or</strong>
                <hr />
              </div>
              <form className="modalForm" onSubmit={this.submitForm}>
                <div className={this.state.errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                  <div className="bg-danger form-danger">
                  {this.state.errors}
                  </div>
                </div>
                <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                <div className="bg-danger form-danger">
                  {this.props.errorMessage}
                  </div>
                </div>
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
              </form>
            </div>
          </div>
          <div className="modal-footer text-xs-center">
            <a href="#" data-dismiss="modal" id="close">Close</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Login.defaultProps = {
  isAuthenticated: false
};

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.customer.isAuthenticated,
    errorMessage: state.customer.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
