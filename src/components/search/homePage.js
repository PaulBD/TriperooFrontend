import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';
import {browserHistory} from 'react-router';

class SearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { searchUrl: '', searchValue: '', searchId: '' };
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);

  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    browserHistory.push(cityUrl);
  }

  render() {
    return (
      <div className="search-tabs search-tabs-bg search-tabs-to-top">
        <div className="tabbable">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="tab-1">
              <h2 className="text-xs-center">Explore, Plan &amp; Book</h2>
              <p className="text-xs-center">
              Get the best deals from the top travel websites, plus reviews on the best hotels, restaurants, attractions
              &amp; more from local experts!
              </p>
              <p>&nbsp;</p>
              <form >
                <div className="row">
                  <div className="col-md-2 text-xs-center">&nbsp;</div>
                  <div className="col-md-8 text-xs-center">
                    <div className="input-group">
                      <div className="form-group form-group-lg form-group-icon-left homeSearch"><i className="fa fa-search input-icon homeSearchIcon"></i>
                        <AutoComplete onChangeAutoComplete={this.onChangeAutoComplete} searchValue={this.state.city} searchType="all" placeholder="Search anywhere in the world" cssClass="typeahead form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 text-xs-center">&nbsp;</div>
                </div>
              </form>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
