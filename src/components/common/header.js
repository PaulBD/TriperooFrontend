import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currencyActions from '../../actions/currencyActions';
import { Link } from "react-router";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openCurrencyMenu = this.openCurrencyMenu.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.state = { currency: 'GBP', currencyIcon: '£', isMenuActive: 0 };
  }
  openCurrencyMenu(e) {
    this.setState({ isMenuActive: 1 });
  }

  selectCurrency(e) {
    this.setState({ currency: e.target.getAttribute('data-name'), currencyIcon: e.target.getAttribute('data-currency'), isMenuActive:0 });

    this.props.actions.saveCurrency(e.target.getAttribute('data-name'));
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
                          <img src="/static/img/logo-invert-v3.png" alt="Triperoo - Explore the world" />
                        </Link>
                      </div>
                      <div className="col-md-2 col-md-offset-2">&nbsp;</div>
                      <div className="col-md-7">
                          <div className="top-user-area clearfix">
                            <ul className="top-user-area-list list list-horizontal list-border">
                              <li><a href="/explore-destinations" title="Destinations">Destinations</a></li>
                              <li><a href="/hotels" title="Hotels">Hotels</a></li>
                              <li><a href="/flights" title="Flights">Flights</a></li>
                              <li><a href="/travel-extras" title="Travel Extras">Travel Extras</a></li>
                              <li><a href="#" data-toggle="modal" data-target="#reviewModel" title="Write a Review">Write a Review</a></li>
                              <li><a href="#" data-toggle="modal" data-target="#signupModel" title="Sign Up">Sign Up</a></li>
                              <li><a href="#" data-toggle="modal" data-target="#loginModel" title="Log In">Log In</a></li>
                              <li className={this.state.isMenuActive ? 'nav-drop active-drop' : 'nav-drop'}><a href="#" onClick={this.openCurrencyMenu}>{this.state.currency} {this.state.currencyIcon}<i className="fa fa-angle-down"></i>
                              <i className="fa fa-angle-up"></i></a>
                                <ul className="list nav-drop-menu">
                                  <li><a href="#" onClick={this.selectCurrency} data-name="GBP" data-currency="£">GBP<span className="right">£</span></a></li>
                                  <li><a href="#" onClick={this.selectCurrency} data-name="EUR" data-currency="€">EUR<span className="right">€</span></a></li>
                                  <li><a href="#" onClick={this.selectCurrency} data-name="USD" data-currency="$">USD<span className="right">$</span></a></li>
                                  <li><a href="#"  onClick={this.selectCurrency} data-name="JPY" data-currency="円">JPY<span className="right">円</span></a></li>
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
  showHeader: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currency: state.currency
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currencyActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
