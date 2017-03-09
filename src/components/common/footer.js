import React, {PropTypes} from 'react';
import { Link, browserHistory } from "react-router";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';

import Newsletter from "./newsletter";
import SocialButtons from "../content/static/socialButtons";

class Footer extends React.Component {
   constructor(props, context) {
     super(props, context);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    this.props.authActions.logoutUser();
  }

  render() {
    let menu = '';

    if (this.props.isAuthenticated) {
      menu = (<ul className="list list-footer">
                <li><a href="/explore-destinations" title="Destinations">Destinations</a></li>
                <li><a href="/hotels" title="Hotels">Hotels</a></li>
                <li><a href="/flights" title="Flights">Flights</a></li>
                <li><a href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                <li><a href="#" onClick={this.onLogout} title="Log Out">Log Out</a></li>
              </ul>
            );
    }
    else {
      menu = (<ul className="list list-footer">
                <li><a href="/explore-destinations" title="Destinations">Destinations</a></li>
                <li><a href="/hotels" title="Hotels">Hotels</a></li>
                <li><a href="/flights" title="Flights">Flights</a></li>
                <li><a href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                <li><a href="#" data-toggle="modal" data-target="#reviewModel" title="Write a Review">Write a Review</a></li>
                <li><a href="#" data-toggle="modal" data-target="#signupModel" title="Sign Up">Sign Up</a></li>
                <li><a href="#" data-toggle="modal" data-target="#loginModel" title="Log In">Log In</a></li>
              </ul>
            );
    }
      return (
		<footer id="main-footer">
            <div className="container">
                <div className="row row-wrap">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                {menu}
                            </div>
                            <div className="col-md-6">
                                <ul className="list list-footer">
                                    <li><Link to="about-us">About Us</Link></li>
                                    <li><Link to="become-a-local-expert">Become a Local Expert</Link></li>
                                    <li><Link to="support">Support</Link></li>
                                    <li><Link to="faqs">FAQs</Link></li>
                                    <li><Link to="privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                      <Newsletter />
                    </div>
                    <div className="col-md-4">
                        <a className="logo" href="index.html">
                            <img src="/static/img/logo-invert.png" alt="Triperoo" title="Triperoo" />
                        </a>
                        <p className="mb20">Get the best deals from the top travel websites, plus reviews on the best hotels, restaurants, attractions & more from local experts!</p>
                        <SocialButtons />
                    </div>
                </div>
            </div>
        </footer>
      );
   }
}


Footer.propTypes = {
  authActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
