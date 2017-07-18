import React from 'react';
import SearchForm from './searchForm';

class Search extends React.Component {
  render(){
    return (
       <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                      <h2 className="text-center">Compare & Save on Hotels</h2>
                      <p className="text-center">Great deals from a selection of hotel companies only a click away</p>
                      <p>&nbsp;</p>
                      <SearchForm useFunction={false} />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Search;
