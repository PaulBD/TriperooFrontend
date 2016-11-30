import React from "react";

var Register = React.createClass({
      render: function() {
        return (
          <div className="modal fade" id="signupModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelAuthentication" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                      <div className="gap gap-small"></div>
                    <div className="col-md-12 text-xs-center">
                      <img src="/static/img/fbsignupV2.png" className="facebookBtn" />
                    </div>
                    <div className="gap gap-small"></div>
                    <div className="col-md-12  text-xs-center signupSeperator">
                      <strong>or</strong>
                      <hr />
                    </div>
                    <form className="modalForm">
                      <div className="col-md-12">
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-user input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Full Name" type="text" />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Enter Email Address" type="text" />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
                              <input className="form-control" type="password" placeholder="Enter Password" />
                          </div>
                          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
                              <input className="form-control" placeholder="Current City" type="text" />
                          </div>
                          <p className="smlText">By clicking "Create My Account," you are agreeing to the Terms of Service above and the Privacy Policy. You'll 
                          also receive email updates about your account, sent to you by Triperoo. You can opt out in Account Settings.</p>
                      </div>
                      <div className="col-md-12 text-xs-center">
                          <input className="btn btn-primary" type="submit" value="Create My Account" />
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

export default Register;