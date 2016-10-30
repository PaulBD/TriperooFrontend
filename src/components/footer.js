import React, {PropTypes} from 'react';
import { Link } from "react-router";
import Newsletter from "./newsletter";

class Footer extends React.Component {
   constructor(props, context) {
     super(props, context);
  }

   render() {

      return (
		<footer id="main-footer">
            <div className="container">
                <div className="row row-wrap">
                    <div className="col-md-3">
                        <a className="logo" href="index.html">
                            <img src="/static/img/logo-invert.png" alt="Triperoo" title="Triperoo" />
                        </a>
                        <p className="mb20">Booking, reviews and advices on hotels, resorts, flights, vacation rentals, travel packages, and lots more!</p>
                        <ul className="list list-horizontal list-space">
                            <li>
                                <a className="fa fa-facebook box-icon-normal round animate-icon-bottom-to-top" href="#"></a>
                            </li>
                            <li>
                                <a className="fa fa-twitter box-icon-normal round animate-icon-bottom-to-top" href="#"></a>
                            </li>
                            <li>
                                <a className="fa fa-google-plus box-icon-normal round animate-icon-bottom-to-top" href="#"></a>
                            </li>
                            <li>
                                <a className="fa fa-linkedin box-icon-normal round animate-icon-bottom-to-top" href="#"></a>
                            </li>
                            <li>
                                <a className="fa fa-pinterest box-icon-normal round animate-icon-bottom-to-top" href="#"></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                      <Newsletter />
                    </div>
                    <div className="col-md-2">
                        <ul className="list list-footer">
                            <li><Link to="about-us">About Us</Link></li>
                            <li><a href="#">Travel News</a>
                            </li>
                            <li><Link to="privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="terms">Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Have Questions?</h4>
                        <h4 className="text-color">+1-202-555-0173</h4>
                        <h4><a href="mailto:triperoo.co.uk" className="text-color">support@triperoo.co.uk</a></h4>
                        <p>24/7 Dedicated Customer Support</p>
                    </div>

                </div>
            </div>
        </footer>
      );
   }
}

export default Footer;
