import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';
import {browserHistory} from 'react-router';

class SearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { searchUrl: '', searchValue: '', searchId: '' };
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType) {
    browserHistory.push(cityUrl);
  }

  render() {
    return (
      <div className="search-tabs search-tabs-bg search-tabs-to-top">
        <div className="tabbable">
          <div className="tab-content">
            <div className="tab-pane active" id="tab-1">
              <h2 className="text-center">Explore, Plan &amp; Book</h2>
              <p className="text-center">
              Get the best deals from the top travel websites, plus reviews on the best hotels, restaurants, attractions
              &amp; more from local experts!
              </p>
              <form >
                <div className="row">
                  <div className="col-md-12 text-center">
                      <div className="form-group form-group-lg form-group-icon-left homeSearch">
                        <AutoComplete onChangeAutoComplete={this.onChangeAutoComplete} searchValue={this.state.city} searchType="all" placeholder="Search anywhere in the world" cssClass="typeahead form-control" />
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

export default SearchComponent;
