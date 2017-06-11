import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../../actions/location/common/categoryActions';

class CategorySideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = { categoryName: 'all' };
  }

  componentWillMount() {
    console.log(this.props.contentType);
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
              <ul className="nav">
                {
                  this.props.categories.map(category => {

                    let className = this.state.categoryName == category.name ? 'active' : '';

                    return (
                      <li className={className}>
                          <a href="#" onClick={this.handleCategoryChange} data-id={category.id} data-name={category.name}>
                            <i className={category.icon}></i> {category.name}
                          </a>
                      </li>
                    );
                  })
                }
              </ul>
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
  console.log(state.content);
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
