import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class PageTitle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    this.props.onSearch(e.target.value);
  }

  render(){
    return (
      <div className="col-md-12 searchBg">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <h4>{this.props.searchValue == '' ? this.props.type != '' ? titleCase(this.props.name) + ' in ' + titleCase(this.props.locationName): this.props.defaultTitle : 'Filtered by "' + titleCase(this.props.searchValue) + '"'}</h4>
            </div>
          </div>
          <div className="col-md-4 text-right">
              <div className="form-group form-group-select-plus">
                <input className="form-control" ref="search" value={this.props.searchValue} onChange={this.onSearch} name="search" placeholder="Filter by name..." />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

PageTitle.defaultProps = {
  location: {}
};

PageTitle.propTypes = {
  searchValue: PropTypes.string,
  defaultTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  onSearch: PropTypes.func
};

export default PageTitle;
