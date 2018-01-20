import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightActions from '../../../actions/location/travelContent/flightActions';

class FlightAutoComplete extends React.Component {

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
    this.props.flightActions.clearAirports();
  }

  onSearchValue(event) {

    event.preventDefault();

    this.setState({ searchValue: event.target.value });

      if (event.target.value.length > 2) {
        this.setState({isLoading: true});
        this.props.flightActions.searchAirports(event.target.value, this.props.searchType);
        this.setState({selected: false, cssStyle: 'block', isOpen: true, isLoading: false});
      }
      else {
        this.props.flightActions.clearAirports();
        this.setState({selected: false, cssStyle: 'none', isOpen: false, isLoading: false});
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
        <input className={this.props.cssClass} placeholder={this.props.placeholder} type="text" onChange={this.onSearchValue} autoComplete="off" value={this.state.searchValue} disabled={this.props.disabled} autocomplete="off"/>
        <div style={style}>
          <ul className="ui-autocomplete long">
            {
              this.props.autocompleteList.map(search => {
                let icon = 'fa fa-plane';

                return (<li key={search.id} className="ui-menu-item"><a href="#" onClick={this.handleClick} data-type='airport' data-name={search.name} data-airport={search.code} data-url='' data-id={search.id} data-image=''><span><i className={icon}></i></span> {search.code ? search.name + ' (' + search.code + '), ' + search.city.country.code : search.name} </a></li>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

FlightAutoComplete.defaultProps = {
  searchValue: '',
  isAppSearch: true,
  isFetching: false,
  autocompleteList: []
};

FlightAutoComplete.propTypes = {
  autocompleteList: PropTypes.array.isRequired,
  flightActions: PropTypes.object,
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
    isFetching: state.flights.isFetching ? state.flights.isFetching : false,
    autocompleteList: state.flights.airports ? state.flights.airports.locations : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightActions: bindActionCreators(flightActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightAutoComplete);
