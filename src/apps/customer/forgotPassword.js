import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';
import NewPasswordForm from '../../components/forms/authentication/newPasswordForm'
import Toastr from 'toastr';

class ForgotPassword extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitPassword = this.submitPassword.bind(this);
    this.changeField = this.changeField.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      isUpdatingPassword: false,
      hasUpdatedPassword: false,
      creds: {
        newPassword: '',
        newPasswordB: ''
      },
      errors:''
    };
  }

  login(e) {
    e.preventDefault();
    this.props.modalActions.openLogin();
  }

  submitPassword(e) {
    e.preventDefault();
    if (this.state.creds.newPassword.length > 0)
    {
      if (this.state.creds.newPasswordB.length > 0)
      {
        if (this.state.creds.newPassword == this.state.creds.newPasswordB)
        {
          this.setState({isUpdatingPassword: true});
          this.props.authActions.updatePassword(this.state.creds, this.props.encryptedGuid)
            .then(() => {
              this.setState({isUpdatingPassword: false, hasUpdatedPassword:true});
              Toastr.success('Password has been updated');
            })
            .catch(error => {
              Toastr.error(error);
              this.setState({isUpdatingPassword: false, errors: error});
            });
        }
        else {
          this.setState({errors: 'Passwords do not match'});
        }
      }
      else {
        this.setState({errors: 'Please confirm your password'});
      }
    }
    else {
      this.setState({errors: 'Please specify a new password'});
    }
  }

  changeField(event) {
    event.preventDefault();
    const field = event.target.name;
    let creds = this.state.creds;
    creds[field] = event.target.value;
    this.setState({creds: creds});
  }

  render() {

    document.title = 'Reset Password';

    if (this.state.hasUpdatedPassword) {
      return (
        <div>
          <div className="container">
            <div className="gap gap-small"></div>
            <div className="row restaurantList">
              <div className="col-md-6">
                <h4>Forgot Password</h4>
                <p>Password has changed, please click <a href="#" onClick={this.login}>here</a> to login.</p>
              </div>
              <div className="col-md-6">&nbsp;</div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="container">
            <div className="gap gap-small"></div>
            <div className="row restaurantList">
              <div className="col-md-6 ">
                <h4>Forgot Password</h4>
                <p>Enter your new password below.</p>
                <NewPasswordForm onSubmit={this.submitPassword} isUpdating={this.state.isUpdatingPassword}
                                 onChange={this.changeField} errors={this.state.errors}/>
              </div>
              <div className="col-md-6">&nbsp;</div>
            </div>
            <div className="gap gap-small"></div>
          </div>
        </div>
      );
    }
  }
}


ForgotPassword.defaultProps = {
  user: {},
  hasUpdatedPassword: false
};

ForgotPassword.propTypes = {
  authActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
  encryptedGuid: PropTypes.string,
  errorMessage: PropTypes.string,
  hasUpdatedPassword: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    encryptedGuid: ownProps.params.guid,
    user: state.user.user ? state.user.user : null,
    errorMessage: state.user.errorMessage,
    hasUpdatedPassword: state.user.hasUpdatedPassword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
