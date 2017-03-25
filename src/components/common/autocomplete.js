import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as autocompleteActions from '../../actions/autocompleteActions';
import Loader from '../common/loadingDots';

class AutoComplete extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { cssStyle: 'none', searches: this.props.searches, isLoading: true, searchValue: this.props.searchValue };
    
    this.onSearchValue = this.onSearchValue.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.changeValue(e.target.text.trim());
    this.props.changeUrl(e.target.getAttribute('data-url'));
    this.props.changeId(parseInt(e.target.getAttribute('data-id')));
    this.props.changeType(e.target.getAttribute('data-type'));

    if (this.props.isAppSearch)
    {
      this.setState({ selected: true, style: 'none', isOpen: false, searchValue: e.target.text.trim() });
    }
    else {
      this.setState({ selected: true, style: 'none', isOpen: false, searchValue: '' });
    }
    
    // Reset Search
    this.props.actions.searchLocations('', this.props.searchType);
  }

  onSearchValue(event) {
    event.preventDefault();

    this.setState({ searchValue: event.target.value });

    if (event.target.value.length > 2) {
      this.setState({ isLoading: true });
      this.props.actions.searchLocations(event.target.value, this.props.searchType);
      this.setState({ selected: false, style: 'block', isOpen: true, isLoading: false });
    }
    else {
      this.setState({ selected: false, style: 'none', isOpen: false, isLoading: false });
    }
  }

  render() {
    let searchCount = this.props.autocompleteList.length; 

    let style = {
      display: this.state.style
    };

    if (searchCount == 0) {
      style = {
        display: 'none'
      };
    }

    return (
      <div>
        <input className={this.props.cssClass} placeholder={this.props.placeholder} type="text" onChange={this.onSearchValue} autoComplete="off" value={this.state.searchValue} />
        <div style={style}>
          <ul className="ui-autocomplete">
            {
              this.props.autocompleteList.map(search => {
              let icon = '';

              switch (search.regionType)
              {
                case 'Continent':
                  icon = 'fa fa-globe';
                break;
                case 'City':
                case 'Country':
                case 'Province (State)':
                case 'Multi - Region(within a country)':
                case 'Multi-Region (within a country)':
                case 'Multi-City (Vicinity)':
                  icon = 'fa fa-map-marker';
                break;
                case 'Hotel':
                  icon = 'fa fa-bed';
                break;
                case 'Restaurant':
                  icon = 'fa fa-cutlery';
                break;
                case 'Attraction':
                  icon = 'fa fa-ticket';
                break;
                case 'Bar':
                  icon = 'fa fa-glass';
                break;
                case "Point of Interest Shadow":
                case 'Point of Interest':
                  icon = 'fa fa-compass';
                break;
              }

              return (<li key={search.regionID} className="ui-menu-item"><a href="#" onClick={this.handleClick} data-type={search.regionType} data-name={search.regionNameLong} data-url={search.url} data-id={search.regionID}><span><i className={icon}></i></span> {search.regionNameLong}</a></li>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

AutoComplete.defaultProps = {
  searchValue: '',
  isAppSearch: true,
  isFetching: false
};

AutoComplete.propTypes = {
  autocompleteList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changeType: PropTypes.func,
  changeValue: PropTypes.func,
  changeUrl: PropTypes.func,
  changeId: PropTypes.func,
  searchType: PropTypes.string,
  cssClass: PropTypes.string,
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  isAppSearch: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    isFetching: state.locationsList.isFetching ? state.locationsList.isFetching : false,
    autocompleteList: state.autocomplete.autocompleteList ? state.autocomplete.autocompleteList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(autocompleteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
