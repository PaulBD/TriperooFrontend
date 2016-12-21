import React from 'react';
import HotelSearch from '../../components/hotel/searchForm';
import Feature from '../../components/common/feature';

import Deals from '../../components/deals/list';

import TopDestinations from '../../components/topDestinations';
import LastMinuteDeal from '../../components/lastMinuteDeal';
import FacebookSignup from '../../components/common/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
export default class SearchHotels extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <div>
        
        <Feature featureType="hotel" />

        <div className="container">            
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
                <div className="tabbable">
                  <div className="tab-content">
                      <div className="tab-pane fade in active" id="tab-1">
                          <h2 className="text-xs-center">Compare & Save on Cheap Hotels</h2>
                          <p className="text-xs-center">Great deals from a selection of hotel companies only a click away.</p>
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
        </div>
        <div className="container">
          <div className="row row-wrap text-xs-center">
            <div className="gap"></div>
            <h3 className="mb20">Our Top Hotel Destinations</h3>
            <div className="row">
                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row">

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-4">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row">

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>

                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
                <div className="col-md-3">
                    <a className="hover-img" href="#">
                        <img src="/static/img/800x600.png" alt="Image Alternative text" title="The Big Showoff-Take 2" />
                        <h5 className="hover-title-center">Mauris euismod nascetur</h5>
                    </a>
                </div>
            </div>
          </div>
          <div className="gap"></div>
          <div className="row">
            <div className="col-md-4"> 
                <Deals searchType="trending" title="Trending Now"/>
            </div>
            <div className="col-md-4">
                <Deals searchType="hot" title="Hot Deals" />
            </div>
            <div className="col-md-4">
                <Deals searchType="special" title="Special Deals"/>
            </div>
          </div>
          <div className="gap gap-small"></div>
        </div>
        <LastMinuteDeal /> 
        <div className="container">
            <div className="gap"></div>
            <FacebookSignup />
            <div className="gap"></div>
        </div>
      </div>
      );
   }
}