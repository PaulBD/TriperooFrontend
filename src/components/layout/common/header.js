import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currencyActions from '../../../actions/common/currencyActions';
import * as modalActions from '../../../actions/common/modalActions';
import * as authenticationActions from '../../../actions/customer/authenticationActions';

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
    this.createTrip = this.createTrip.bind(this);
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

  createTrip(e) {
    this.props.modalActions.openBookmark(0, '', '', 0, '', '', '', '', '');
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
                <div className="col-md-12">
                  <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand logo" href="/"><img src="/static/img/logo-invert-v3.png" alt="Triperoo - Explore the world" /></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item pull-xs-right"><a className="nav-link" href="/explore-destinations" title="Destinations">Destinations</a></li>
                        <li className="nav-item pull-xs-right"><a className="nav-link"href="/hotels" title="Hotels">Hotels</a></li>
                        <li className="nav-item pull-xs-right"><a className="nav-link"href="/flights" title="Flights">Flights</a></li>
                        <li className="nav-item pull-xs-right"><a className="nav-link"href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                        <li className={this.props.isAuthenticated ? "nav-item pull-xs-right" : "hide"}><a className="nav-link"href="#" onClick={this.createTrip} title="Create a Trip">Create a Trip</a></li>
                        <li className={!this.props.isAuthenticated ? "nav-item pull-xs-right" : "hide"}><a className="nav-link"href="#" onClick={this.signup} title="Sign Up">Sign Up</a></li>
                        <li className={!this.props.isAuthenticated ? "nav-item pull-xs-right" : "hide"}><a className="nav-link"href="#" onClick={this.login} title="Log In">Log In</a></li>
                        <li className={this.props.isAuthenticated ? "nav-item pull-xs-right" : "hide"}><a className="nav-link"href="#" onClick={this.writeReview} title="Write a Review">Write a Review</a></li>
                        <li className={this.props.isAuthenticated ? "nav-item dropdown" : "hide"}>
                          <a className="nav-link dropdown-toggle userMenu" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="origin round profileImg" src={user && user.userImage ? user.userImage : '/static/img/userProfileImg.png'} />
                            {user ? user.userName : ""}
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href={user ? user.userProfile : ""}>Profile Home <span className="pull-right"><i className="fa fa-home"></i></span></a>
                            <a className="dropdown-item" href={user ? user.userProfile + "/profile" : ""}>Update Profile <span className="pull-right"><i className="fa fa-user"></i></span></a>
                            <a className="dropdown-item" href={user ? user.userProfile + "/trips" : ""}>Trips <span className="pull-right"><i className="fa fa-heart-o"></i></span></a>
                            <a className="dropdown-item" href={user ? user.userProfile + "/reviews" : ""}>Reviews <span className="pull-right"><i className="fa fa-pencil"></i></span></a>
                            <a className="dropdown-item" href={user ? user.userProfile + "/photos" : ""}>Travel Photos <span className="pull-right"><i className="fa fa-camera"></i></span></a>
                            <a className="dropdown-item" href={user ? user.userProfile + "/booking-history" : ""}>Booking History <span className="pull-right"><i className="fa fa-clock-o"></i></span></a>
                            <a className="dropdown-item" onClick={this.onLogout}>Log Out <span className="pull-right"><i className="fa fa-lock"></i></span></a>
                          </div>
                        </li>
                        <li className={this.props.isAuthenticated ? "nav-item dropdown hide" : "hide"}>
                          <a className="nav-link dropdown-toggle" id="navbarDropdownCurrencyLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.currency} {this.state.currencyIcon}
                          </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownCurrencyLink">
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="GBP" data-currency="£">GBP<span className="pull-right">£</span></a>
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="EUR" data-currency="€">EUR<span className="pull-right">€</span></a>
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="USD" data-currency="$">USD<span className="pull-right">$</span></a>
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="JPY" data-currency="円">JPY<span className="pull-right">円</span></a>
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="CAD" data-currency="$">CAD<span className="pull-right">$</span></a>
                          <a className="dropdown-item" href="#" onClick={this.selectCurrency} data-name="AUD" data-currency="$">AUD<span className="pull-right">A$</span></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
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
