import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currencyActions from '../../actions/common/currencyActions';
import * as modalActions from '../../actions/common/modalActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import { Link, browserHistory } from "react-router";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openProfileMenu = this.openProfileMenu.bind(this);
    this.openCurrencyMenu = this.openCurrencyMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
    this.closeCurrencyMenu = this.closeCurrencyMenu.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.state = { currency: 'GBP', currencyIcon: '£', isCurrencyMenuActive: 0, isProfileMenuActive: 0 };
    this.writeReview = this.writeReview.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  openProfileMenu(e) {
    this.setState({ isProfileMenuActive: 1 });
  }

  closeProfileMenu(e) {
    this.setState({ isProfileMenuActive: 0 });
  }

  openCurrencyMenu(e) {
    this.setState({ isCurrencyMenuActive: 1 });
  }

  closeCurrencyMenu(e) {
    this.setState({ isCurrencyMenuActive: 0 });
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
    this.props.authActions.logoutUser();
  }

  selectCurrency(e) {
    this.setState({ currency: e.target.getAttribute('data-name'), currencyIcon: e.target.getAttribute('data-currency'), isCurrencyMenuActive:0 });
    this.props.curActions.saveCurrency(e.target.getAttribute('data-name'));
  }

  render() {

      let user = JSON.parse(localStorage.getItem('id_token'));

      return (
        <header id="main-header">
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/" className="logo">
                    <img src="/static/img/logo-invert-v3.png" alt="Triperoo - Explore the world" />
                  </Link>
                </div>
                <div className="col-md-9">
                    <div className="top-user-area clearfix">
                      <ul className="top-user-area-list list list-horizontal list-border">
                        <li><a href="/explore-destinations" title="Destinations">Destinations</a></li>
                        <li><a href="/hotels" title="Hotels">Hotels</a></li>
                        <li><a href="/flights" title="Flights">Flights</a></li>
                        <li><a href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                        <li className={!this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.signup} title="Sign Up">Sign Up</a></li>
                        <li className={!this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.login} title="Log In">Log In</a></li>
                        <li className={this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.writeReview} title="Write a Review">Write a Review</a></li>
                        <li className={this.props.isAuthenticated ? this.state.isProfileMenuActive ? "nav-drop active-drop" : "nav-drop" : "hide"} onMouseEnter={this.openProfileMenu} onMouseLeave={this.closeProfileMenu}><img className="origin round profileImg" src={user && user.userImage ? user.userImage : '/static/img/userProfileImg.png'} /><a href={user ? user.userProfile : ""}>{user ? user.userName : ""}<i className="fa fa-angle-down"></i>
                          <i className="fa fa-angle-up"></i></a>
                          <ul className="list nav-drop-menu headerList">
                            <li><a href={user ? user.userProfile + "/profile" : ""}><i className="fa fa-user"></i>Update Profile</a></li>
                            <li><a href={user ? user.userProfile + "/bookmarks" : ""}><i className="fa fa-heart-o"></i>Bookmarks</a></li>
                            <li><a href={user ? user.userProfile + "/photos" : ""}><i className="fa fa-camera"></i>My Travel Photos</a></li>
                            <li><a href={user ? user.userProfile + "/booking-history" : ""}><i className="fa fa-clock-o"></i>Booking History</a></li>
                          </ul>
                        </li>
                        <li className={this.props.isAuthenticated ? "" : "hide"}><a href="#" onClick={this.onLogout} title="Log Out">Log Out</a></li>
                        <li className={this.state.isCurrencyMenuActive ? 'nav-drop active-drop' : 'nav-drop'} onMouseEnter={this.openCurrencyMenu} onMouseLeave={this.closeCurrencyMenu}><a href="#">{this.state.currency} {this.state.currencyIcon}<i className="fa fa-angle-down"></i>
                          <i className="fa fa-angle-up"></i></a>
                          <ul className="list nav-drop-menu">
                            <li><a href="#" onClick={this.selectCurrency} data-name="GBP" data-currency="£">GBP<span className="right">£</span></a></li>
                            <li><a href="#" onClick={this.selectCurrency} data-name="EUR" data-currency="€">EUR<span className="right">€</span></a></li>
                            <li><a href="#" onClick={this.selectCurrency} data-name="USD" data-currency="$">USD<span className="right">$</span></a></li>
                            <li><a href="#" onClick={this.selectCurrency} data-name="JPY" data-currency="円">JPY<span className="right">円</span></a></li>
                            <li><a href="#" onClick={this.selectCurrency} data-name="CAD" data-currency="$">CAD<span className="right">$</span></a></li>
                            <li><a href="#" onClick={this.selectCurrency} data-name="AUD" data-currency="$">AUD<span className="right">A$</span></a></li>
                          </ul>
                        </li>
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

Header.propTypes = {
  showHeader: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  curActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currency: state.currency,
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    curActions: bindActionCreators(currencyActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
