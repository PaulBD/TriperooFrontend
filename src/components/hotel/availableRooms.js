import React from "react";

export default class AvailableRooms extends React.Component {
	render(){
	return (
<div>
        <div className="booking-item-dates-change">
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-daterange" data-date-format="MM d, D">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                        <label>Check in</label>
                                        <input className="form-control" name="start" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                        <label>Check out</label>
                                        <input className="form-control" name="end" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group form-group-select-plus">
                            <label>Adults</label>
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
                    <div className="col-md-2">
                        <div className="form-group form-group-select-plus">
                            <label>Children</label>
                            <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                <label className="btn btn-primary active">
                                    <input type="radio" name="options" />0</label>
                                <label className="btn btn-primary">
                                    <input type="radio" name="options" />1</label>
                                <label className="btn btn-primary">
                                    <input type="radio" name="options" />2</label>
                                <label className="btn btn-primary">
                                    <input type="radio" name="options" />2+</label>
                            </div>
                            <select className="form-control hidden">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option selected="selected">3</option>
                                <option>4</option>
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
                    <div className="col-md-2">
                        <div className="form-group form-group-select-plus">
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
                </div>
            </form>
        </div>
        <div className="gap gap-small"></div>
        <ul className="booking-list">
            <li>
                <a className="booking-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel PORTO BAY RIO INTERNACIONAL rooftop pool" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="booking-item-title">Superior Penthouse</h5>
                            <p className="text-small">Platea fringilla cursus aliquam euismod integer viverra dis facilisi in augue vehicula sed</p>
                            <ul className="booking-item-features booking-item-features-sign clearfix">
                                <li rel="tooltip" data-placement="top" title="Adults Occupancy"><i className="fa fa-male"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Children Occupancy"><i className="im im-children"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Beds"><i className="im im-bed"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Room footage (square feet)"><i className="im im-width"></i><span className="booking-item-feature-sign">320</span>
                                </li>
                            </ul>
                            <ul className="booking-item-features booking-item-features-small clearfix">
                                <li rel="tooltip" data-placement="top" title="Air Conditioning"><i className="im im-air"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Flat Screen TV"><i className="im im-tv"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Mini Bar"><i className="im im-bar"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Bathtub"><i className="im im-bathtub"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Kitchen"><i className="im im-kitchen"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Patio"><i className="im im-patio"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Washing Machine"><i className="im im-washing-machine"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Pool"><i className="im im-pool"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3"><span className="booking-item-price">$428</span><span>/night</span><span className="btn btn-primary">Book</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a className="booking-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/static/img/800x600.png" alt="Image Alternative text" title="The pool" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="booking-item-title">Family Suite</h5>
                            <p className="text-small">Metus eu eros ipsum mattis vehicula nisl egestas nec ultrices varius semper laoreet</p>
                            <ul className="booking-item-features booking-item-features-sign clearfix">
                                <li rel="tooltip" data-placement="top" title="Adults Occupancy"><i className="fa fa-male"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Beds"><i className="im im-bed"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Room footage (square feet)"><i className="im im-width"></i><span className="booking-item-feature-sign">580</span>
                                </li>
                            </ul>
                            <ul className="booking-item-features booking-item-features-small clearfix">
                                <li rel="tooltip" data-placement="top" title="Mini Bar"><i className="im im-bar"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Bathtub"><i className="im im-bathtub"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Kitchen"><i className="im im-kitchen"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Patio"><i className="im im-patio"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Soundproof"><i className="im im-soundproof"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="SPA tub"><i className="im im-spa"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Terrace"><i className="im im-terrace"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Washing Machine"><i className="im im-washing-machine"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3"><span className="booking-item-price">$211</span><span>/night</span><span className="btn btn-primary">Book</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a className="booking-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/static/img/800x600.png" alt="Image Alternative text" title="LHOTEL PORTO BAY SAO PAULO lobby" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="booking-item-title">Standard Double room</h5>
                            <p className="text-small">Molestie purus euismod fames odio volutpat eleifend turpis nec cras quam litora dignissim</p>
                            <ul className="booking-item-features booking-item-features-sign clearfix">
                                <li rel="tooltip" data-placement="top" title="Adults Occupancy"><i className="fa fa-male"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Children Occupancy"><i className="im im-children"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Beds"><i className="im im-bed"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Room footage (square feet)"><i className="im im-width"></i><span className="booking-item-feature-sign">730</span>
                                </li>
                            </ul>
                            <ul className="booking-item-features booking-item-features-small clearfix">
                                <li rel="tooltip" data-placement="top" title="Air Conditioning"><i className="im im-air"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Mini Bar"><i className="im im-bar"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Bathtub"><i className="im im-bathtub"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Kitchen"><i className="im im-kitchen"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Patio"><i className="im im-patio"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Terrace"><i className="im im-terrace"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Washing Machine"><i className="im im-washing-machine"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Pool"><i className="im im-pool"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3"><span className="booking-item-price">$493</span><span>/night</span><span className="btn btn-primary">Book</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a className="booking-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 2" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="booking-item-title">Double Room with Town View</h5>
                            <p className="text-small">Curae lacus platea sociis mauris hendrerit sed fringilla dignissim cum mi amet orci</p>
                            <ul className="booking-item-features booking-item-features-sign clearfix">
                                <li rel="tooltip" data-placement="top" title="Adults Occupancy"><i className="fa fa-male"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Children Occupancy"><i className="im im-children"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Beds"><i className="im im-bed"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Room footage (square feet)"><i className="im im-width"></i><span className="booking-item-feature-sign">310</span>
                                </li>
                            </ul>
                            <ul className="booking-item-features booking-item-features-small clearfix">
                                <li rel="tooltip" data-placement="top" title="Flat Screen TV"><i className="im im-tv"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Kitchen"><i className="im im-kitchen"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Patio"><i className="im im-patio"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Soundproof"><i className="im im-soundproof"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="SPA tub"><i className="im im-spa"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Washing Machine"><i className="im im-washing-machine"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3"><span className="booking-item-price">$451</span><span>/night</span><span className="btn btn-primary">Book</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a className="booking-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/static/img/800x600.png" alt="Image Alternative text" title="hotel 1" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="booking-item-title">Junior Suite</h5>
                            <p className="text-small">Tellus auctor sem sociosqu cras cursus vitae erat aliquam adipiscing iaculis suscipit curabitur</p>
                            <ul className="booking-item-features booking-item-features-sign clearfix">
                                <li rel="tooltip" data-placement="top" title="Adults Occupancy"><i className="fa fa-male"></i><span className="booking-item-feature-sign">x 3</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Children Occupancy"><i className="im im-children"></i><span className="booking-item-feature-sign">x 2</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Beds"><i className="im im-bed"></i><span className="booking-item-feature-sign">x 1</span>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Room footage (square feet)"><i className="im im-width"></i><span className="booking-item-feature-sign">470</span>
                                </li>
                            </ul>
                            <ul className="booking-item-features booking-item-features-small clearfix">
                                <li rel="tooltip" data-placement="top" title="Air Conditioning"><i className="im im-air"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Flat Screen TV"><i className="im im-tv"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Mini Bar"><i className="im im-bar"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Bathtub"><i className="im im-bathtub"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Kitchen"><i className="im im-kitchen"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Patio"><i className="im im-patio"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Soundproof"><i className="im im-soundproof"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Terrace"><i className="im im-terrace"></i>
                                </li>
                                <li rel="tooltip" data-placement="top" title="Pool"><i className="im im-pool"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3"><span className="booking-item-price">$318</span><span>/night</span><span className="btn btn-primary">Book</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
       	);
	}
}