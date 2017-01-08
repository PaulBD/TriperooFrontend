import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as searchActions from '../../actions/searchActions';
import Loader from '../common/loadingDots';

class AutoComplete extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { cssStyle: 'none', searches: this.props.searches, isLoading: 1 };
    this.onSearchValue = this.onSearchValue.bind(this);
  }

  componentDidMount() {
    this.setState({ selected: false, style: 'none', searchValue: this.props.searchValue, isOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.changeValue(e.target.text.trim());
    this.props.changeUrl(e.target.getAttribute('data-url'));
    this.setState({ selected: true, style: 'none', searchValue: e.target.text.trim() });
  }

  onSearchValue(event) {
    event.preventDefault();

    if (event.target.value.length > 2) {
        this.setState({ isLoading: 1 });
        this.props.actions.loadSearches(event.target.value, this.props.searchType);
        this.setState({ selected: false, style: 'block', searchValue: event.target.value.trim(), isOpen: true, isLoading: 0 });
    }
    else {
        this.setState({ selected: false, style: 'none', searchValue: event.target.value, isOpen: false, isLoading: 0 });
    }
  }

  render() {

    const {searches} = this.props.searches;

    let searchCount = this.props.searches.length; 

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
              this.props.searches.map(search => {
              let icon = '';

              switch (search.type)
              {
                case 'city':
                  icon = 'fa fa-map-marker';
                break;
                case 'country':
                  icon = 'fa fa-global';
                break;
                case 'hotel':
                  icon = 'fa fa-bed';
                break;
                case 'restaurant':
                  icon = 'fa fa-cutlery';
                break;
                case 'attraction':
                  icon = 'fa fa-ticket';
                break;
                case 'bar':
                  icon = 'fa fa-glass';
                break;
              }

              return (<li key={search.id} className="ui-menu-item"><a href="#" onClick={this.handleClick} data-name={search.name} data-url={search.url}><span><i className={icon}></i></span> {search.value}</a></li>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

AutoComplete.defaultProps = {
  searchValue: ''
};

AutoComplete.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changeValue: PropTypes.func,
  changeUrl: PropTypes.func,
  searchType: PropTypes.string,
  cssClass: PropTypes.string,
  placeholder: PropTypes.string,
  searchValue: PropTypes.string
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

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
