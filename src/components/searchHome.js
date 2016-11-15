import React from "react";

var SearchHome = React.createClass({
      render: function() {

        return (

            <div className="search-tabs search-tabs-bg search-tabs-to-top">
                <div className="tabbable">
	                <div className="tab-content">
	                    <div className="tab-pane fade in active" id="tab-1">
	                        <h2 className="text-xs-center">Explore, Plan &amp; Book</h2>
	                        <p className="text-xs-center">Get the best deals from the top travel websites, plus reviews on the best restaurants, attractions &amp; more</p>
	                        <p>&nbsp;</p>
	                        <form>
	                            <div className="row">
	                                <div className="col-md-3 text-xs-center">&nbsp;</div>
	                                <div className="col-md-6 text-xs-center">
	                                    <div className="form-group form-group-lg form-group-icon-left homeSearch"><i className="fa fa-search input-icon homeSearchIcon"></i>
	                                        <input className="typeahead form-control" placeholder="Search anywhere in the world" />
	                                    </div>
	                                </div>
	                                <div className="col-md-3 text-xs-center">&nbsp;</div>
	                                <div className="col-md-12 text-xs-center">
										<button className="btn btn-primary btn-lg" type="submit">Discover Your Destination</button>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
                    </div>
                </div>
            </div>
      );
    }
});

export default SearchHome;