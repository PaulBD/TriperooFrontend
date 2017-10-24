import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/legacy/categoryActions';

class CategorySideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = { categoryName: 'all' };
  }

  componentWillMount() {
    switch (this.props.contentType)
    {
      case "attractions":
        this.props.actions.loadAttractionCategories();
        break;
      case "events":
        this.props.actions.loadEventCategories();
        break;
      case "restaurants":
        this.props.actions.loadRestaurantCategories();
        break;
      case "nightlife":
        this.props.actions.loadNightlifeCategories();
        break;
    }
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
        <aside className="booking-filters text-white">
          <h3>Filter By:</h3>
          <ul className="list booking-filters-list">
            <li>
              {
                this.props.categories.map(category => {

                let className = this.state.categoryName == category.name ? 'eventOptions active' : 'eventOptions';

                  return (
                    <div className={className} key={category.name}>
                      <label><i className={category.icon}></i>&nbsp; 
                        <a href="#" onClick={this.handleCategoryChange} data-id={category.id} data-name={category.name}>
                           {category.name}
                        </a>
                      </label>
                    </div>
                  );
                })
              }
            </li>
          </ul>
        </aside>
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
  actions: PropTypes.object.isRequired,
  changeCategory: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.categoryList.isFetching ? state.categoryList.isFetching : false,
    categories: state.categoryList.categoryList ? state.categoryList.categoryList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySideBar);