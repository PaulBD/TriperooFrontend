import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';
let changeCase = require('change-case');
let _ = require('lodash');

class FilterCategoryPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addCategory = this.addCategory.bind(this);
    this.showMore = this.showMore.bind(this);
    this.state = {
      typeFilterList: this.props.selectedCategories ? this.props.selectedCategories : []
    };
  }

  addCategory(e) {
    e.preventDefault();
    let typeFilterList =  _.cloneDeep(this.props.selectedCategories);
    let isAlreadyInList = false;
    let newTag = e.currentTarget.getAttribute('data-type');

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
    this.props.modalActions.updateCategories(typeFilterList);
    this.props.filterResults(typeFilterList);
  }

  showMore(e) {
    e.preventDefault();
    this.props.modalActions.openCategoryModel(this.props.categories, this.props.selectedCategories, this.props.contentType, this.props.locationId, this.props.searchName, this.props.pageSize, this.props.pageNumber);
  }

  render(){
    if (!this.props.isFetching) {
      if (this.props.categories != undefined) {
      return (
        <ul className="list booking-filters-list">
          <li><h5>{this.props.title}</h5></li>
          {
              this.props.categories.map(function (category, i) {

                let className = this.props.selectedCategories.includes(category.categoryName) ? 'active' : '';

                if (!this.state.showAll) {
                  if (i > this.props.numberToShow) {
                    return null;
                  }
                }

                return (
                <li className={className} key={category.categoryName}>
                  <a href="#" onClick={this.addCategory} data-type={category.categoryName}>
                    <input type="checkbox" className="form-check-inline" checked={this.props.selectedCategories.includes(category.categoryName) ? true : false}/>&nbsp;
                    {changeCase.upperCaseFirst(category.categoryNameFriendly)} ({category.count})
                  </a>
                </li>
                );
              }, this)
            }
            <li className={this.props.categories.length > 6 ? "hide" : this.state.showAll ? "hide" : "text-xs-right text-lg-right"}>
              <a href="#" onClick={this.showMore}>More <i className="fa fa-arrow-down"></i></a>
            </li>
          </ul>
        );
      }
      else { return null; }
    }
    else { return null; }
  }
}
FilterCategoryPopup.defaultProps = {
  selectedCategories: []
};

FilterCategoryPopup.propTypes = {
  title: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  searchName: PropTypes.string.isRequired,
  locationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  numberToShow: PropTypes.number.isRequired,
  categories: PropTypes.array,
  selectedCategories: PropTypes.array,
  isFetching: PropTypes.bool,
  filterResults: PropTypes.func,
  modalActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    selectedCategories: state.modal.modalContent ? state.modal.modalContent.selectedCategories : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategoryPopup);


