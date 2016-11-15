import React from "react";

export default class ImageGallery extends React.Component {
    render(){
    return (
        <div className="fotorama" data-allowfullscreen="true" data-nav="thumbs">
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF living room" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL rooftop pool" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF library" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="The pool" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite2" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY LIBERDADE" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 1" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL de luxe" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel THE CLIFF BAY spa suite" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 2" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO luxury suite" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel EDEN MAR suite" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO lobby" />
            <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO suite lhotel living room" />
        </div>
        );
    }
}