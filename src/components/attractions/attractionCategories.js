import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as attractionsActions from '../../actions/attractionsActions';

class AttractionCategories extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = { categoryName: 'all' };
  }

  componentWillMount() {
    this.props.actions.loadAttractionCategories();
  }

  handleCategoryChange(e) {
    e.preventDefault();
    this.setState({ categoryName: e.target.getAttribute('data-name') });
    this.props.changeCategory(e.target.getAttribute('data-id'), e.target.getAttribute('data-name'));
  }

  render(){
    if (this.props.attractionCategories.length > 0) 
    {
      return (
        <aside className="booking-filters text-white">
          <h3>Filter By:</h3>
          <ul className="list booking-filters-list">
            <li>
              {
                this.props.attractionCategories.map(category => {

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

AttractionCategories.defaultProps = {
  attractionCategories: [],
  isFetching: false
};

AttractionCategories.propTypes = {
  attractionCategories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changeCategory: PropTypes.func,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.attractionsList.isFetching ? state.attractionsList.isFetching : false,
    attractionCategories: state.attractionsList.attractionCategoryList ? state.attractionsList.attractionCategoryList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(attractionsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionCategories);