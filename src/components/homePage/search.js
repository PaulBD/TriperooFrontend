import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';

class SearchComponent extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        search: { searchValue: '', searchList: [] }
      };

      this.onSearchValue = this.onSearchValue.bind(this);
      this.onSubmitRedirect = this.onSubmitRedirect.bind(this);
  }

  onSearchValue(event) {
    const search = this.state.search;
    search.searchValue = event.target.value;
    this.setState({search: search});
  }

  onSubmitRedirect(event) {
    this.props.dispatch(searchActions.search(this.state.search));
  }

  searchRow(search, index) {
    return <div key={index}>{search.searchValue}</div>;
  }

  render() {

    const {search} = this.props;

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
                    <div className="form-group form-group-lg form-group-icon-left homeSearch"><i className="fa fa-search input-icon homeSearchIcon"></i>
                      <input className="typeahead form-control" placeholder="Search anywhere in the world" ref="homeSearch" name="homeSearch" onChange={this.onSearchValue} />
                    </div>
                  </div>
                  <div className="col-md-3 text-xs-center">&nbsp;</div>
                  <div className="col-md-12 text-xs-center">
                    <button className="btn btn-primary btn-lg" type="submit">Discover Your Destination</button>
                  </div>
                </div>
              </form>
              {this.props.search.map(this.searchRow)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    search: state.search
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);