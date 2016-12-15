import React, {PropTypes} from 'react';
import { Link } from "react-router";

class Header extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      let header = '';

      if (this.props.showHeader) {
          header = (
          <header id="main-header">
                <div className="header-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <Link to="/" className="logo">
                          <img src="/static/img/logo-invert.png" alt="Triperoo - Explore the world" />
                        </Link>
                      </div>
                      <div className="col-md-2 col-md-offset-2">&nbsp;</div>
                      <div className="col-md-7">
                          <div className="top-user-area clearfix">
                            <ul className="top-user-area-list list list-horizontal list-border">
                              <li><Link to="explore-destinations" title="Destinations">Destinations</Link></li>
                              <li><Link to="holidays" title="Holidays">Holidays</Link></li>
                              <li><Link to="hotels" title="Hotels">Hotels</Link></li>
                              <li><Link to="flights" title="Flights">Flights</Link></li>
                              <li><Link to="travel-extras" title="Travel Extras">Travel Extras</Link></li>
                              <li><a href="#" data-toggle="modal" data-target="#reviewModel" title="Write a Review">Write a Review</a></li>
                              <li><a href="#" data-toggle="modal" data-target="#signupModel" title="Sign Up">Sign Up</a></li>
                              <li><a href="#" data-toggle="modal" data-target="#loginModel" title="Log In">Log In</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </header>
          );
        } else {
          header = (<header id="main-header" className="hide">&nbsp;</header>);
        }
        return (
          <div>
           {header}
          </div>
      );
   }
}

Header.propTypes = {
  showHeader: PropTypes.bool.isRequired
};

export default Header;