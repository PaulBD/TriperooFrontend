import React from "react";

var CityMap = React.createClass({
      render: function() {

        return (
            <iframe
                      frameborder="0" 
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmQF5rseeOF7Fifo4ACea1bkOtfePdG58
                        &q=Chester,UK" allowfullscreen className="cityMap">
                    </iframe>
        );
    }
});

export default CityMap;