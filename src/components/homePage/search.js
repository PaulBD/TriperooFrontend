import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';
import SearchList from './searchList';
import {browserHistory} from 'react-router';

class SearchComponent extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = { searches: [] };

      this.onSearchValue = this.onSearchValue.bind(this);
      this.onSubmitRedirect = this.onSubmitRedirect.bind(this);
  }

  onSearchValue(event) {
    let val = event.target.value;

    if (val.length > 2) {
      this.props.actions.loadSearches(val);
    }
    else {
      this.props.actions.clearSearches();
    }
  }

  onSubmitRedirect(event) {
    event.preventDefault();
    browserHistory.push('/search-result?v=' + this.refs.search.value);
  }

  render() {

    const {searches} = this.props;

    return (
      <div className="search-tabs search-tabs-bg search-tabs-to-top">
        <div className="tabbable">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="tab-1">
              <h2 className="text-xs-center">Explore, Plan &amp; Book</h2>
              <p className="text-xs-center">Get the best deals from the top travel websites, plus reviews on the best restaurants, attractions &amp; more</p>
              <p>&nbsp;</p>
              <form onSubmit={this.onSubmitRedirect}>
                <div className="row">
                  <div className="col-md-3 text-xs-center">&nbsp;</div>
                  <div className="col-md-6 text-xs-center">
                    <div className="input-group">
                      <div className="form-group form-group-lg form-group-icon-left homeSearch"><i className="fa fa-search input-icon homeSearchIcon"></i>
                        <input className="typeahead form-control" placeholder="Search anywhere in the world" ref="search" name="search" onChange={this.onSearchValue} autoComplete="off" />
                      </div>
                      <span className="input-group-btn">
                        <button className="btn btn-primary btnSearch" type="button">Search</button>
                      </span>                        <SearchList searches={searches} />

                    </div>
                  </div>
                  <div className="col-md-3 text-xs-center">&nbsp;</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    searches: state.searches
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);