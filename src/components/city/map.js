import React from "react";

export default class Map extends React.Component {
    render(){
    return (
            <iframe data-frameborder="0" data-src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmQF5rseeOF7Fifo4ACea1bkOtfePdG58&q=Chester,UK" data-allowfullscreen className="cityMap"></iframe>
        );
    }
}