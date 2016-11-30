import React from "react";

var Login = React.createClass({
      render: function() {
        return (
          <div className="modal fade" id="loginModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelAuthentication" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                      <div className="gap gap-small"></div>
                    <div className="col-md-12 text-xs-center">
                      <img src="/static/img/fbcontinue.png" className="facebookBtn" />
                    </div>
                    <div className="gap gap-small"></div>
                    <div className="col-md-12  text-xs-center signupSeperator">
                      <strong>or</strong>
                      <hr />
                    </div>
                    <form className="modalForm">
                      <div className="col-md-12">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Email Address" type="text" />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
                              <input className="form-control" type="password" placeholder="Enter Password" />
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
});

export default Login;