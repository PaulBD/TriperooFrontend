import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as searchActions from '../../actions/searchActions';

class AutoComplete extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { cssStyle: 'none', searches: this.props.searches };
    this.onSearchValue = this.onSearchValue.bind(this);
  }

  componentDidMount() {
    this.setState({ selected: false, style: 'none', searchValue: '', isOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.changeValue(e.target.text.trim());
    this.setState({ selected: true, style: 'none', searchValue: e.target.text.trim() });
  }

  onSearchValue(event) {
    event.preventDefault();

    if (event.target.value.length > 2) {
        this.props.actions.loadSearches(event.target.value, this.props.searchType);
        this.setState({ selected: false, style: 'block', searchValue: event.target.value.trim(), isOpen: true });
    }
    else {
        this.setState({ selected: false, style: 'none', searchValue: event.target.value, isOpen: false });
    }
  }

  render() {

    const {searches} = this.props.searches;

    let searchCount = this.props.searches.length; 

    let style = {
      display: this.state.style
    };

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

              return (<li key={search.id} className="ui-menu-item" onClick={this.handleClick} name={search.name}><a href="#"><span><i className={icon}></i></span> {search.value}</a></li>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changeValue: PropTypes.func,
  searchType: PropTypes.string,
  cssClass: PropTypes.string,
  placeholder: PropTypes.string
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
