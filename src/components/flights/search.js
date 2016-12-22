import React from "react";

export default class Search extends React.Component {
    render(){
    return (
        <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
                <div className="tab-content">
                    <div className="tab-pane fade in active" id="tab-1">
                        <h2 className="text-xs-center">Compare Cheap Flights</h2>
                        <p className="text-xs-center">Find great flight deals from hundreds of airlines</p>
						<form>
                            <div className="tabbable">
                                <ul className="nav nav-pills nav-sm nav-no-br mb10" id="flightChooseTab">
                                    <li className="active"><a href="#flight-search-1" data-toggle="tab">Round Trip</a></li>
                                    <li><a href="#flight-search-2" data-toggle="tab">One Way</a> </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade in active" id="flight-search-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                                            <label>From</label>
                                                            <input className="typeahead form-control" placeholder="City, Airport, U.S. Zip" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                                            <label>To</label>
                                                            <input className="typeahead form-control" placeholder="City, Airport, U.S. Zip" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-daterange" data-date-format="M d, D">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                                                <label>Departing</label>
                                                                <input className="form-control" name="start" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                                                <label>Returning</label>
                                                                <input className="form-control" name="end" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group form-group-lg form-group-select-plus">
                                                                <label>Passngers</label>
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
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-xs-center">
                                                <button className="btn btn-primary btn-lg" type="submit">
                                                    <i className="fa fa-search"></i>Search Flights
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}