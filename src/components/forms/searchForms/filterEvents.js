import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../../actions/legacy/categoryActions';
import Loader from '../../loaders/contentLoader';
let _ = require('lodash');

class FilterEvents extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      categoryName: '',
      eventCategory: [],
      typeFilterList: [],
      eventCategoryId: 0,
      isLoadingCategories: true
    };
    this.addCategory = this.addCategory.bind(this);
  }

  componentWillMount() {
    this.loadCategories();
  }

  addCategory(e) {
    e.preventDefault();
    let typeFilterList = this.state.typeFilterList;
    let isAlreadyInList = false;
    let newTag = e.currentTarget.getAttribute('data-name');

    for (let i = 0; i < typeFilterList.length; i++) {
      if (typeFilterList[i] == newTag)
      {
        isAlreadyInList = true;
        typeFilterList.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      typeFilterList.push(newTag);
    }

    this.setState({typeFilterList: typeFilterList});
    this.props.filterEvents(e.target.getAttribute('data-id'), e.target.getAttribute('data-name'));
  }

  loadCategories() {
    this.props.categoryActions.loadEventCategories()
      .then(() => this.setState({isLoadingCategories: false}))
      .catch(error => {
        this.setState({isLoadingCategories: false});
      });
  }

  render(){
    if (!this.state.isLoadingCategories) {
      return (
        <div className="profile-usermenu">
          <ul className="list booking-filters-list">
                {
                  this.props.categories.map(category => {

                    let className = this.state.categoryName == category.name ? 'eventOptions active' : 'eventOptions';

                    return (
                      <li className={className} key={category.name}>
                        <a href="#" onClick={this.addCategory} data-id={category.id} data-name={category.name}>
                          <input type="checkbox" className="form-check-inline" checked={this.state.typeFilterList.includes(category.name) ? true : false}/>&nbsp;

                          {category.name}
                          <i className={this.state.typeFilterList.includes(category.name) ? "fa fa-check categoryCheck" : "hide"} />
                        </a>
                      </li>
                    );
                  })
                }
            </ul>
        </div>
      );
    }
    else {
      return (
        <div className="profile-usermenu">
          <Loader showLoader={true} />
        </div>
      );
    }
  }
}

FilterEvents.defaultProps = {
  categories: []
};

FilterEvents.propTypes = {
  categories: PropTypes.array,
  categoryActions: PropTypes.object.isRequired,
  changeCategory: PropTypes.func,
  filterEvents: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    categories: state.eventCategory.eventCategoryList ? state.eventCategory.eventCategoryList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterEvents);

