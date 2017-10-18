import React, {PropTypes} from 'react';

class AdminHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
    return (

      <div className="hold-transition login-page">

        <link rel="stylesheet" href="/static/css/admin.css" />
        <div className="login-box">
          <div className="login-logo">
            <b>Triperoo</b>Admin
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form action="../../index2.html" method="post">
              <div className="form-group has-feedback">
                <span className="fa fa-envelope form-control-feedback"></span>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group has-feedback">
                <span className="fa fa-lock form-control-feedback"></span>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AdminHome.propTypes = {

}


export default AdminHome;
