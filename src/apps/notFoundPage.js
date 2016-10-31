import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="full-page">
        <div className="bg-holder full">
            <div className="bg-mask"></div>
            <div className="bg-blur notFoundBg"></div>
            <div className="bg-holder-content full text-white">
                <a className="logo-holder" href="index.html">
                    <img src="/static/img/logo-white.png" alt="Image Alternative text" title="Image Title" />
                </a>
                <div className="full-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <p className="text-hero">404</p>
                                <h1>Page is not found</h1>
                                <p>Aptent vulputate gravida curae lacinia imperdiet tempus erat vulputate posuere 
                                mollis quisque magna facilisi sagittis ridiculus consequat a nisl tincidunt</p>
                                <a className="btn btn-white btn-ghost btn-lg mt5" href="index.html">
                                <i className="fa fa-long-arrow-left"></i> to Homepage</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="footer-links">
                    <li><a href="#">About</a>
                    </li>
                    <li><a href="#">Help</a>
                    </li>
                    <li><a href="#">Hot Deals</a>
                    </li>
                    <li><a href="#">Popular Locations</a>
                    </li>
                    <li><a href="#">Cheap Flights</a>
                    </li>
                    <li><a href="#">Business</a>
                    </li>
                    <li><a href="#">Media</a>
                    </li>
                    <li><a href="#">Developers</a>
                    </li>
                    <li><a href="#">Advertise</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default NotFoundPage;
