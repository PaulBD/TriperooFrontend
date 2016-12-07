import React from "react";

export default class Search extends React.Component {
    render(){
    return (
            <div className="search-tabs search-tabs-bg search-tabs-to-top">
                <div className="tab-content">
                    <div className="tab-pane fade in active" id="tab-1">
                        <h2 className="text-xs-center">Compare & Save on Winter Sun</h2>
                        <p className="text-xs-center">We compare holiday deals to help you save money</p>
                        <p>&nbsp;</p>
						<form>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group form-group-lg form-group-icon-left select"><i className="fa fa-map-marker input-icon"></i>
                                        <label>Holiday Destination</label>
                                        <select className="typeahead form-control">
                                            <optgroup label="region">
                                                <option label="London - All Airports (LON)" value="5310a3fa823ab0522c0a32d4">London - All Airports (LON)</option>
                                                <option label="Midlands (Any)" value="5497d368aa00dc24a55efddb">Midlands (Any)</option>
                                                <option label="North East  (Any)" value="5497cee30cbc4f87392ddd06">North East  (Any)</option>
                                                <option label="North West  (Any)" value="5497d3cbaa00dc24a55efddc">North West  (Any)</option>
                                                <option label="Northern Ireland  (Any)" value="5497d13baa00dc24a55efdd7">Northern Ireland  (Any)</option>
                                                <option label="Scotland  (Any)" value="5497d402aa00dc24a55efddd">Scotland  (Any)</option>
                                                <option label="South East (Any)" value="5497d46aaa00dc24a55efdde">South East (Any)</option>
                                                <option label="South West and Wales (Any)" value="5497d4e3aa00dc24a55efddf">South West and Wales (Any)</option>
                                            </optgroup>
                                            <optgroup label="airport">
                                                <option label="Aberdeen" value="528cc236e4b0ec1df53b28e0">Aberdeen</option>
                                                <option label="Belfast" value="528cc236e4b0ec1df53b28b3">Belfast</option>
                                                <option label="Belfast City" value="528cc236e4b0ec1df53b28b4">Belfast City</option>
                                                <option label="Birmingham" value="528cc236e4b0ec1df53b28b6">Birmingham</option>
                                                <option label="Bournemouth" value="528cc236e4b0ec1df53b28c6">Bournemouth</option>
                                                <option label="Bristol" value="528cc236e4b0ec1df53b28c2">Bristol</option>
                                                <option label="Cardiff" value="528cc236e4b0ec1df53b28b2">Cardiff</option>
                                                <option label="Durham Tees Valley" value="528cc236e4b0ec1df53b28d8">Durham Tees Valley</option>
                                                <option label="Doncaster Sheffield" value="528cc236e4b0ec1df53b2912">Doncaster Sheffield</option>
                                                <option label="Edinburgh" value="528cc236e4b0ec1df53b28e3">Edinburgh</option>
                                                <option label="East Midlands" value="528cc236e4b0ec1df53b28d9">East Midlands</option>
                                                <option label="Exeter" value="528cc236e4b0ec1df53b28f4">Exeter</option>
                                                <option label="Glasgow" value="528cc236e4b0ec1df53b28e2">Glasgow</option>
                                                <option label="Glasgow Prestwick" value="528cc236e4b0ec1df53b28e5">Glasgow Prestwick</option>
                                                <option label="Humberside" value="528cc236e4b0ec1df53b28d3">Humberside</option>
                                                <option label="Leeds Bradford" value="528cc236e4b0ec1df53b28d5">Leeds Bradford</option>
                                                <option label="Liverpool" value="528cc236e4b0ec1df53b28c3">Liverpool</option>
                                                <option label="London City" value="528cc236e4b0ec1df53b28cc">London City</option>
                                                <option label="London Gatwick" value="528cc236e4b0ec1df53b28cb">London Gatwick</option>
                                                <option label="London Heathrow" value="528cc236e4b0ec1df53b28b1">London Heathrow</option>
                                                <option label="London Luton" value="528cc236e4b0ec1df53b28c4">London Luton</option>
                                                <option label="London Southend" value="528cc236e4b0ec1df53b28ce">London Southend</option>
                                                <option label="London Stansted" value="528cc236e4b0ec1df53b28f2">London Stansted</option>
                                                <option label="Manchester" value="528cc236e4b0ec1df53b28b9" selected="selected">Manchester</option>
                                                <option label="Newcastle" value="528cc236e4b0ec1df53b28d7">Newcastle</option>
                                                <option label="Norwich" value="528cc236e4b0ec1df53b28f1">Norwich</option>
                                                <option label="Southampton" value="528cc236e4b0ec1df53b28c7">Southampton</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                        <label>Destination</label>
                                        <input className="typeahead form-control" placeholder="Enter Destination" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-daterange" data-date-format="M d, D">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                                    <label>Depart</label>
                                                    <input className="form-control" name="start" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group form-group-lg form-group-icon-left select"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
                                                    <label>Nights</label>
                                                    <select className="typeahead form-control" name="nights">
                                                    <optgroup label="Popular durations">
                                                        <option label="2" value="number:2">2</option>
                                                        <option label="3" value="number:3">3</option>
                                                        <option label="4" value="number:4">4</option>
                                                        <option label="7" value="number:7">7</option>
                                                        <option label="10" value="number:10">10</option>
                                                        <option label="14" value="number:14">14</option>
                                                    </optgroup>
                                                    <optgroup label="All durations">
                                                        <option label="1" value="number:1">1</option>
                                                        <option label="2" value="number:2">2</option>
                                                        <option label="3" value="number:3">3</option>
                                                        <option label="4" value="number:4">4</option>
                                                        <option label="5" value="number:5">5</option>
                                                        <option label="6" value="number:6">6</option>
                                                        <option label="7" value="number:7">7</option>
                                                        <option label="8" value="number:8">8</option>
                                                        <option label="9" value="number:9">9</option>
                                                        <option label="10" value="number:10">10</option>
                                                        <option label="11" value="number:11">11</option>
                                                        <option label="12" value="number:12">12</option>
                                                        <option label="13" value="number:13">13</option>
                                                        <option label="14" value="number:14" selected="selected">14</option>
                                                        <option label="15" value="number:15">15</option>
                                                        <option label="16" value="number:16">16</option>
                                                        <option label="17" value="number:17">17</option>
                                                        <option label="18" value="number:18">18</option>
                                                        <option label="19" value="number:19">19</option>
                                                        <option label="20" value="number:20">20</option>
                                                        <option label="21" value="number:21">21</option>
                                                        <option label="22" value="number:22">22</option>
                                                    </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group form-group-lg form-group-icon-left select"><i className="fa fa-user input-icon input-icon-highlight"></i>
                                                    <label>Adults</label>
                                                    <select className="typeahead form-control" name="adults">
                                                        <option>1</option>
                                                        <option selected="selected">2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group form-group-lg form-group-icon-left select"><i className="fa fa-child input-icon input-icon-highlight"></i>
                                                    <label>Children</label>
                                                    <select className="typeahead form-control" name="children">
                                                        <option selected="selected">0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-xs-center">
									<button className="btn btn-primary btn-lg" type="submit">
										<i className="fa fa-search"></i>Search Holidays
									</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}