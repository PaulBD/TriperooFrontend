import React from "react";

var CommendCard = React.createClass({
      render: function() {

        return (
        <div className="card text-xs-left">
          <img src="/static/img/coffee.jpg" alt="Card image" />

          <div className="card-block testimonial">
            <h4 className="card-title">Coffee Commissary</h4>
            <h6 className="card-subtitle text-muted">801 N Fairfax Ave, Los Angeles, CA 90046, USA</h6>
            
            <div className="testimonial-author commentCardTestimonial">
                <img src="/static/img/50x50.png" alt="Image Alternative text" title="Sevenly Shirts - June 2012  2" />
                <p className="testimonial-author-name"><a href="#">Alison Mackenzie</a>'s review</p>
                <ul className="icon-list list-inline-block mb0 last-minute-rating">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>
            </div>
            <p className="card-text">
            Some quick example text to build 
            on the card title and make up the bulk of the cards content.
            </p>
            <p className="tagCollection">
            <strong>Recommended For:</strong><br />
            <span className="tag tag-default">Default</span> 
            <span className="tag tag-default">Default</span> 
            <span className="tag tag-default">Default</span> 
            </p>
          </div>
        </div> 
        );
    }
});

export default CommendCard;