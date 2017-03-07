import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';
import Loader from '../common/loadingDots';
import AutoComplete from '../common/autocomplete';

class Register extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCityIdChange = this.handleCityIdChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearchUrlClick = this.handleSearchUrlClick.bind(this);

    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);

    this.state = { emailAddress: '', password: '', firstName: '', lastName: '', currentCity: '', currentCityId: '', errors:'' };
  }

  submitFacebookForm(response) {
    const creds = { emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, currentCityId: 1};
    this.props.actions.loginFacebookUser(creds);
  }

  submitStandardForm(e) {
    e.preventDefault();
    const creds = { emailAddress: this.state.emailAddress.trim(), password: this.state.password.trim(), firstName: this.state.firstName.trim(), lastName: this.state.lastName.trim(), currentCityId: this.state.currentCityId };
    this.props.actions.registerUser(creds);
  }

  handleFirstNameChange(e) {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    e.preventDefault();
    this.setState({ lastName: e.target.value });
  }

  handleEmailAddressChange(e) {
    e.preventDefault();
    this.setState({ emailAddress: e.target.value });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleCityChange(value) {
    this.setState({ currentCity: value });
  }

  handleCityIdChange(value) {
    this.setState({ currentCityId: value });
  }

  handleSearchUrlClick(value) { }
  handleTypeChange(value) {}


  render(){

    if (this.props.isAuthenticated)
    {
      let event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': false });
      let node = document.getElementById('closeRegistration');

      if (event != null && node != null)
      {
        node.dispatchEvent(event); 
      }
    }

    return (
          <div className="modal fade" id="signupModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelAuthentication" role="document">
              <div className={this.props.isFetching ? "modal-content hide" : "modal-content"}>
                <div className="modal-body">
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

                    <div className="gap gap-small"></div>
                    <div className="col-md-12 text-xs-center">
                      <FacebookLogin appId="347205502054817" autoLoad={false} fields="name,email,picture"  cssClass="my-facebook-button-class" textButton="" callback={this.submitFacebookForm} />
                    </div>
                    <div className="gap gap-small"></div>
                    <div className="col-md-12  text-xs-center signupSeperator">
                      <strong>or</strong>
                      <hr />
                    </div>
                    <form className="modalForm"  onSubmit={this.submitStandardForm}>
                      <div className="col-md-12">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-user input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter First Name" type="text" onChange={this.handleFirstNameChange} />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-user input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Last Name" type="text" onChange={this.handleLastNameChange} />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Email Address" type="text" onChange={this.handleEmailAddressChange} />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
                              <input className="form-control" type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
                            <AutoComplete changeType={this.handleTypeChange} changeId={this.handleCityIdChange} changeValue={this.handleCityChange} changeUrl={this.handleSearchUrlClick} searchType="city" placeholder="Current Location" cssClass="typeahead form-control" />
                          </div>
                          <p className="smlText">By clicking "Create My Account," you are agreeing to the Terms of Service and the Privacy Policy. You'll 
                          also receive email updates about your account, sent to you by Triperoo. You can opt out in Account Settings.</p>
                      </div>
                      <div className="col-md-12 text-xs-center">
                          <input className="btn btn-primary" type="submit" value="Create My Account" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer text-xs-center">
                  <a href="#" data-dismiss="modal" id="closeRegistration">Close</a>
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

Register.defaultProps = {
  isAuthenticated: false
};

Register.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isFetching: state.authentication.isFetching,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
