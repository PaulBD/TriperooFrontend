import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';

class FacebookSignup extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.submitFacebookForm = this.submitFacebookForm.bind(this);
      this.state = { emailAddress: '', password: '', errors:'', isLoading: 0 };
  }

  submitFacebookForm(response) {
      const creds = { emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, currentCityId: 1};
      this.props.actions.loginFacebookUser(creds);
  }

  render(){
    if (!this.props.isAuthenticated) {
      return (
        <div className="container">
          <hr />
          <div className="gap"></div>
          <div className="row">
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
              <div className="col-md-6 text-xs-right">
                  <h5 className="signupText">Join Now to get started</h5>
              </div>
              <div className="col-md-6 text-xs-left">
                  <FacebookLogin appId="347205502054817" autoLoad={false} fields="name,email,picture"  cssClass="my-facebook-button-class" textButton="" callback={this.submitFacebookForm} />
              </div>
          </div> 
          <div className="gap"></div>
          <hr /> 
        </div>
      );
    }
    else { 
      return null; 
    }
  }
}

FacebookSignup.defaultProps = {
  isAuthenticated: false,
  isFetching: false
};

FacebookSignup.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignup);
