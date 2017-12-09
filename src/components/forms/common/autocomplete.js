import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../../actions/location/locationsActions';

class AutoComplete extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { cssStyle: 'none', selected: false, isLoading: true, isOpen: false, searchValue: '' };

    this.onSearchValue = this.onSearchValue.bind(this);
  }
  componentWillMount() {
    this.setState({ searchValue: this.props.searchValue });
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onChangeAutoComplete(e.target.text.trim(), parseInt(e.target.getAttribute('data-id')), e.target.getAttribute('data-url'), e.target.getAttribute('data-type'), e.target.getAttribute('data-image'), e.target.getAttribute('data-airport'));

    if (this.props.isAppSearch)
    {
      this.setState({ selected: true, cssStyle: 'none', isOpen: false, searchValue: e.target.text.trim() });
    }
    else {
      this.setState({ selected: true, cssStyle: 'none', isOpen: false, searchValue: '' });
    }

    // Reset Search
    this.props.locationsActions.searchLocations('', this.props.searchType);
  }

  onSearchValue(event) {

    event.preventDefault();

    this.setState({ searchValue: event.target.value });

    if (event.target.value.length > 2) {
      this.setState({ isLoading: true });
      this.props.locationsActions.searchLocations(event.target.value, this.props.searchType);
      this.setState({ selected: false, cssStyle: 'block', isOpen: true, isLoading: false });
    }
    else {
      this.setState({ selected: false, cssStyle: 'none', isOpen: false, isLoading: false });
    }
  }

  render() {

    let searchCount = this.props.autocompleteList.length;

    let style = {
      display: this.state.cssStyle
    };

    if (searchCount == 0) {
      style = {
        display: 'none'
      };
    }

    return (
      <div className="input-group">
        <i className="fa fa-search input-icon homeSearchIcon"></i>
        <input className={this.props.cssClass} placeholder={this.props.placeholder} type="text" onChange={this.onSearchValue} autoComplete="off" value={this.state.searchValue} disabled={this.props.disabled}/>
        <div style={style}>
          <ul className={this.props.searchType == 'airport' ? "ui-autocomplete long" : "ui-autocomplete"}>
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
                  case 'Restaurant Shadow':
                  case 'Restaurant':
                  case 'Restaurants':
                    icon = 'fa fa-cutlery';
                    break;
                  case 'Attractions':
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
                  case 'airport':
                    icon = 'fa fa-plane';
                    break;
                }

                return (<li key={search.regionID} className="ui-menu-item"><a href="#" onClick={this.handleClick} data-type={search.regionType} data-name={search.regionNameLong} data-airport={search.airportCode} data-url={search.url} data-id={search.regionID} data-image={search.image}><span><i className={icon}></i></span> {search.airportCode ? search.regionName + ' (' + search.airportCode + '), ' + search.countryCode : search.regionNameLong} </a></li>);
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
  locationsActions: PropTypes.object,
  onChangeAutoComplete: PropTypes.func.isRequired,
  searchType: PropTypes.string,
  cssClass: PropTypes.string,
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  isAppSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    isFetching: state.locations.isFetching ? state.locations.isFetching : false,
    autocompleteList: state.locations.autocompleteList ? state.locations.autocompleteList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationsActions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
