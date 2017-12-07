import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import SearchForm from '../../forms/searchForms/hotels';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleFormSubmit(searchUrl, searchId, startDate, nights, rooms, guests) {
    if (searchUrl != undefined) {
      browserHistory.push(searchUrl + '/hotels?arrivalDate=' + startDate + '&nights=' + nights + '&rooms=' + rooms + '&guests=' + guests);
    }
  }

  render(){
    return (
       <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                      <SearchForm useFunction={false} handleFormSubmit={this.handleFormSubmit} buttonName="Search Hotels" />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}


Search.propTypes = {
  handleFormSubmit: PropTypes.func
};

export default Search;
