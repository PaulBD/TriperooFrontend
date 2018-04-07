import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';
import * as authenticationActions from '../../../actions/customer/authenticationActions';

import Newsletter from "../../forms/customer/newsletter";
import SocialButtons from "../../content/static/socialButtons";

class Footer extends React.Component {
   constructor(props, context) {
     super(props, context);
     this.onLogout = this.onLogout.bind(this);
     this.writeReview = this.writeReview.bind(this);
     this.login = this.login.bind(this);
     this.signup = this.signup.bind(this);
     this.createTrip = this.createTrip.bind(this);
  }

  writeReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(0, '', '');
  }

  login(e) {
    e.preventDefault();
    this.props.modalActions.openLogin();
  }

  signup(e) {
    e.preventDefault();
    this.props.modalActions.openSignup();
  }

  onLogout(e) {
    e.preventDefault();
    this.props.authActions.logoutUser();
    browserHistory.push('/');
  }

  createTrip(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(0, '', '', '', '', '', 0, '', '', '', '', '', '', false, 0, 0, '', '', '');
  }

  render() {
     return (
		<footer id="main-footer">
            <div className="container">
                <div className="row row-wrap">
                    <div className="col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-6 mb-0">
                              <ul className="list list-footer">
                                <li><a href="/explore-destinations" title="Destinations">Destinations</a></li>
                                <li className="hide"><a href="/hotels" title="Hotels">Hotels</a></li>
                                <li><a href="/flights" title="Flights">Flights</a></li>
                                <li className="hide"><a href="/restaurants" title="Restaurants">Restaurants</a></li>
                                <li className="hide"><a href="/things-to-do" title="Things To Do">Things To Do</a></li>
                                <li><a href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                                <li className={this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.createTrip} title="Create a Trip">Create a Trip</a></li>

                                <li className={this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.onLogout} title="Log Out">Log Out</a></li>
                                <li className={this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.writeReview} title="Write a Review">Write a Review</a></li>
                                <li className={!this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.signup}title="Sign Up">Sign Up</a></li>
                                <li className={!this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.login} title="Log In">Log In</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-6 mb-0">
                                <ul className="list list-footer">
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/support">Support</a></li>
                                    <li className="hide"><a href="/faqs">FAQs</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-of-use">Terms of Use</a></li>
                                  <li><a href="/community-guidelines">Community Guidelines</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                      <Newsletter />
                    </div>
                    <div className="col-md-4">
                        <a className="logo" href="/">
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
  modalActions: PropTypes.object.isRequired,
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
    authActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
