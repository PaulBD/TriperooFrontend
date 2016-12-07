import React from "react";


export default class Search extends React.Component {
  render(){
  return (
       <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                  <div className="tab-pane fade in active" id="tab-1">
                      <h2 className="text-xs-center">Compare & Save on Cheap Hotels</h2>
                      <p className="text-xs-center">Great deals from a selection of hotel companies only a click away</p>
                      <p>&nbsp;</p>
                        <form className="hotelSearch">
                          <div className="row">
                              <div className="col-md-8">
                                  <div className="input-daterange" data-date-format="MM d, D">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
                                                  <label>Destination</label>
                                                  <input className="typeahead form-control" placeholder="Enter Destination" type="text" />
                                              </div>
                                          </div>
                                          <div className="col-md-3">
                                              <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                                  <label>Check in</label>
                                                  <input className="form-control" name="start" type="text" />
                                              </div>
                                          </div>
                                          <div className="col-md-3">
                                              <div className="form-group form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                                                  <label>Check out</label>
                                                  <input className="form-control" name="end" type="text" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="form-group form-group- form-group-select-plus">
                                              <label>Guests</label>
                                              <div className="btn-group btn-group-select-num" data-toggle="buttons">
                                                  <label className="btn btn-primary">
                                                      <input type="radio" name="options" />1</label>
                                                  <label className="btn btn-primary active">
                                                      <input type="radio" name="options" />2</label>
                                                  <label className="btn btn-primary">
                                                      <input type="radio" name="options" />3</label>
                                                  <label className="btn btn-primary">
                                                      <input type="radio" name="options" />4</label>
                                                  <label className="btn btn-primary">
                                                      <input type="radio" name="options" />4+</label>
                                              </div>
                                              <select className="form-control hidden">
                                                  <option>1</option>
                                                  <option>2</option>
                                                  <option>3</option>
                                                  <option>4</option>
                                                  <option selected="selected">5</option>
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
                                      <div className="col-md-6">
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
                                                      <input type="radio" name="options" />4</label>
                                                  <label className="btn btn-primary">
                                                      <input type="radio" name="options" />4+</label>
                                              </div>
                                              <select className="form-control hidden">
                                                  <option>1</option>
                                                  <option>2</option>
                                                  <option>3</option>
                                                  <option>4</option>
                                                  <option selected="selected">5</option>
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
                                            <div className="col-md-12 text-xs-center">
                              <button className="btn btn-primary btn-lg" type="submit">
                                <i className="fa fa-search"></i>Search Hotels
                              </button>
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