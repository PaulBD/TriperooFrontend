import React from "react";
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.submitForm = this.submitForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = { username: '', password: '', errors:{}, isLoading: 0 };
  }

  responseFacebook(response) {
    console.log(response);
  }
 

  submitFacebookForm(e) {
    e.preventDefault();
  }

  submitForm(e) {
    e.preventDefault();
  }

  handleUsernameChange(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  render(){
  return (
          <div className="modal fade" id="loginModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelAuthentication" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                      <div className="gap gap-small"></div>
                    <div className="col-md-12 text-xs-center">
                      <img src="/static/img/fbcontinue.png" className="facebookBtn" />
                      <FacebookLogin appId="347205502054817" autoLoad={true} fields="name,email,picture" cssClass="my-facebook-button-class" textButton="Continue with Facebook" callback={this.responseFacebook} />
                    </div>
                    <div className="gap gap-small"></div>
                    <div className="col-md-12 text-xs-center signupSeperator">
                      <strong>or</strong>
                      <hr />
                    </div>
                    <form className="modalForm" onSubmit={this.submitForm}>
                      <div className="col-md-12">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Email Address" type="text" onChange={this.handleUsernameChange} />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
                              <input className="form-control" type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} />
                          </div>
                      </div>
                      <div className="col-md-12 text-xs-center">
                          <input className="btn btn-primary" type="submit" value="Login" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer text-xs-center">
                  <a href="#" data-dismiss="modal">Close</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

Login.defaultProps = {

};

Login.propTypes = {

};

function mapStateToProps(state, ownProps) {

}

function mapDispatchToProps(dispatch) {

}

export default Login;
