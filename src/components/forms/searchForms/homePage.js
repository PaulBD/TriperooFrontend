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
      <form className="container">
        <div className="row">
          <div className="col-md-12 text-xs-center">
            <div className="form-group form-group-lg form-group-icon-left homeSearch">
              <AutoComplete onChangeAutoComplete={this.onChangeAutoComplete} searchValue={this.state.city} searchType="all" placeholder="Search anywhere in the world" cssClass="typeahead form-control" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchComponent;
