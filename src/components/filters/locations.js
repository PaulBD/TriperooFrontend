import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/location/common/categoryActions';
let titleCase = require('title-case');

class CategorySideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.showMore = this.showMore.bind(this);
    this.state = { categoryName: 'all', showAll: false };
  }

  componentWillMount() {
    switch (this.props.contentType)
    {
      case "attractions":
        this.props.categoryActions.loadAttractionCategories();
        break;
      case "events":
        this.props.categoryActions.loadEventCategories();
        break;
      case "restaurants":
        this.props.categoryActions.loadRestaurantCategories();
        break;
      case "nightlife":
        this.props.categoryActions.loadNightlifeCategories();
        break;
    }
  }

  showMore(e) {
    e.preventDefault();
    this.setState({ showAll: true });
  }

  handleCategoryChange(e) {
    e.preventDefault();
    this.setState({ categoryName: e.target.getAttribute('data-name') });
    this.props.changeCategory(e.target.getAttribute('data-id'), e.target.getAttribute('data-name'));
  }

  render(){
    if (this.props.categories.length > 0)
    {
      return (
            <div className="profile-usermenu">
              <h5>Types of {titleCase(this.props.contentType)}</h5>
              <ul className="nav flex-column">
                {
                  this.props.categories.map(function (category, i) {

                    let className = this.state.categoryName == category.name ? 'active col-md-12' : 'col-md-12';

                    if (!this.state.showAll) {
                      if (i > 6) {
                        return null;
                      }
                    }

                    if (this.state.categoryName == 'all' || this.state.categoryName == 'Reset Filter')
                    {
                      if (category.name == 'Reset Filter')
                      {
                        return null;
                      }
                    }
                    return (
                      <li className={className} key={category.name}>
                          <a href="#" onClick={this.handleCategoryChange} data-id={category.id} data-name={category.name}>
                            <i className={category.icon}></i> {category.name}
                          </a>
                      </li>
                    );
                  }, this)
                }
              </ul>
              <p className={this.state.showAll ? "hide" : "text-right"}><a href="#" onClick={this.showMore}>More Categories <i className="fa fa-arrow-down"></i></a></p>
            </div>
      );
    }
    else { return null; }
  }
}

CategorySideBar.defaultProps = {
  categories: [],
  isFetching: false
};

CategorySideBar.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryActions: PropTypes.object.isRequired,
  changeCategory: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.categories.isFetching ? state.categories.isFetching : false,
    categories: state.categories.categoryList ? state.categories.categoryList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySideBar);
