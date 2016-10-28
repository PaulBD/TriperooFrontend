import React from 'react';
import { Link } from "react-router";

class Header extends React.Component {
    render() {
        return (
            <header id="main-header">
              <div className="header-top">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <Link to="/" className="logo">
                        <img src="/static/img/logo-invert.png" alt="Triperoo" title="Triperoo" />
                      </Link>
                    </div>
                    <div className="col-md-3 col-md-offset-2">
                      <form className="main-header-search">
                       <div className="form-group form-group-icon-left">
                         <i className="fa fa-search input-icon"></i>
                         <input type="text" className="form-control" />
                       </div>
                      </form>
                      </div>
                      <div className="col-md-4">
                        <div className="top-user-area clearfix">
                          <ul className="top-user-area-list list list-horizontal list-border">
                            <li><Link to="login">Log In</Link></li>
                            <li><Link to="register">Register</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </header>
      );
   }
}

export default Header;