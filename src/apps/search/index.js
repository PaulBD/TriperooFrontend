import React from 'react';
import Breadcrumb from '../../components/breadcrumb';

export default class SearchResults extends React.Component {
      componentDidMount() {
        window.scrollTo(0, 0);
    }
  
    render(){
    return (
<div className="container">
            <Breadcrumb />
            <div className="mfp-with-anim mfp-hide mfp-dialog mfp-search-dialog" id="search-dialog">
                <h3>Search for Hotel</h3>
                <form>
                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-highlight"></i>
                        <label>Where are you going?</label>
                        <input className="typeahead form-control" placeholder="City, Airport, Point of Interest, Hotel Name or U.S. Zip Code" type="text" />
                    </div>
                    <div className="input-daterange" data-date-format="M d, D">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                    <label>Check-in</label>
                                    <input className="form-control" name="start" type="text" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                    <label>Check-out</label>
                                    <input className="form-control" name="end" type="text" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group form-group-lg form-group-select-plus">
                                    <label>Rooms</label>
                                    <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                        <label className="btn btn-primary active">
                                            <input type="radio" name="options" />1</label>
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />2</label>
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />3</label>
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />3+</label>
                                    </div>
                                    <select className="form-control hidden">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option selected="selected">4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group form-group-lg form-group-select-plus">
                                    <label>Gutests</label>
                                    <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />1</label>
                                        <label className="btn btn-primary active">
                                            <input type="radio" name="options" />2</label>
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />3</label>
                                        <label className="btn btn-primary">
                                            <input type="radio" name="options" />3+</label>
                                    </div>
                                    <select className="form-control hidden">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option selected="selected">4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg" type="submit">Search for Hotels</button>
                </form>
            </div>
            <h3 className="booking-title">521 hotels in New York on Mar 22 - Apr 17 for 1 adult <small><a className="popup-text" href="#search-dialog" data-effect="mfp-zoom-out">Change search</a></small></h3>
            <div className="row">
                <div className="col-md-3">
                    <aside className="booking-filters text-white">
                        <h3>Filter By:</h3>
                        <ul className="list booking-filters-list">
                            <li>
                                <h5 className="booking-filters-title">Price</h5>
                                <input type="text" id="price-slider" />
                            </li>
                            <li>
                                <h5 className="booking-filters-title">Star Rating</h5>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />5 star (220)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />4 star (112)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />3 star (75)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />2 star (60)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />1 star (20)</label>
                                </div>
                            </li>
                            <li>
                                <h5 className="booking-filters-title">Facility</h5>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Wi-Fi (55)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Parking (264)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Airport Shuttle (137)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Fitness Center (15)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Non-Smoking Rooms (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Indoor Pool (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Spa (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Family Rooms (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Pet Friendly (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Restaurant (20)</label>
                                </div>
                            </li>
                            <li>
                                <h5 className="booking-filters-title">Room Facility</h5>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Air conditioning (55)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Bathtub (264)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Flat-screen TV (137)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Kitchen/kitchenette (15)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Patio (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Soundproof (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Spa tub (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Terrace (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />View (20)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Washing machine (20)</label>
                                </div>
                            </li>
                            <li>
                                <h5 className="booking-filters-title">Hotel Theme</h5>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Romance / Honeymoon (225)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Spa / Relaxation (178)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Family (70)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Budget / Backpacker (15)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />City Trip (53)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Luxury (134)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Design (80)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Shopping (93)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Countryside (4)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Gourmet (15)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Castle (1)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Golf / Sports (37)</label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input className="i-check" type="checkbox" />Business (210)</label>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div className="col-md-9">
                    <div className="nav-drop booking-sort">
                        <h5 className="booking-sort-title"><a href="#">Sort: Aviability<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i></a></h5>
                        <ul className="nav-drop-menu">
                            <li><a href="#">Price (low to high)</a>
                            </li>
                            <li><a href="#">Price (hight to low)</a>
                            </li>
                            <li><a href="#">Ranking</a>
                            </li>
                            <li><a href="#">Distance</a>
                            </li>
                            <li><a href="#">Number of Reviews</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row row-wrap">
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 1" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">InterContinental New York</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$244</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 2" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">New York Hilton Midtown</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$333</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The pool" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Grand Hyatt New York</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$196</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL rooftop pool" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Warwick New York Hotel</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$212</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY LIBERDADE" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-half-empty"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Holiday Inn Express Kennedy</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$390</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel THE CLIFF BAY spa suite" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-half-empty"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Wellington Hotel</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$194</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF living room" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-half-empty"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Waldorf Astoria New York</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$170</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF library" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">The Benjamin</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$263</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">The Kimberly Hotel</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$245</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY SERRA GOLF suite2" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Affinia Shelburne</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$344</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel EDEN MAR suite" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Club Quarters Grand Central</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$318</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL de luxe" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">The London NYC</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$442</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO suite lhotel living room" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Bryant Park Hotel</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$344</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO luxury suite" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star-half-empty"></i>
                                        </li>
                                        <li><i className="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">Wyndham Garden Chinatown</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$398</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header">
                                    <a className="hover-img" href="#">
                                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO lobby" />
                                        <h5 className="hover-title-center">Book Now</h5>
                                    </a>
                                </header>
                                <div className="thumb-caption">
                                    <ul className="icon-group text-tiny text-color">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <h5 className="thumb-title"><a className="text-darken" href="#">JFK Inn</a></h5>
                                    <p className="mb0"><small>New York City: Midtown West , New York, NY</small>
                                    </p>
                                    <p className="mb0 text-darken"><span className="text-lg lh1em">$212</span><small> avg/night</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p><small>521 hotels found in New York. &nbsp;&nbsp;Showing 1 – 15</small>
                            </p>
                            <ul className="pagination">
                                <li className="active"><a href="#">1</a>
                                </li>
                                <li><a href="#">2</a>
                                </li>
                                <li><a href="#">3</a>
                                </li>
                                <li><a href="#">4</a>
                                </li>
                                <li><a href="#">5</a>
                                </li>
                                <li><a href="#">6</a>
                                </li>
                                <li><a href="#">7</a>
                                </li>
                                <li className="dots">...</li>
                                <li><a href="#">43</a>
                                </li>
                                <li className="next"><a href="#">Next Page</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-right">
                            <p>Not what you're looking for? <a className="popup-text" href="#search-dialog" data-effect="mfp-zoom-out">Try your search again</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
        </div>
      );
   }
}