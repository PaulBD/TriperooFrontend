import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';
import * as attractionActions from '../../actions/location/travelContent/attractionActions';
import * as pointOfInterestActions from '../../actions/location/travelContent/pointofinterestActions';
import * as nightlifeActions from '../../actions/location/travelContent/nightlifeActions';
import * as restaurantActions from '../../actions/location/travelContent/restaurantActions';
let _ = require('lodash');
let changeCase = require('change-case');

class CategoryModel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.state = {
      typeFilterList: _.cloneDeep(this.props.selectedCategories),
      modalIsOpen: false
    };
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  addCategory(e) {
    e.preventDefault();
    let typeFilterList = this.state.typeFilterList;
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
  }

  updateCategories(e) {
    e.preventDefault();
    let list = this.state.typeFilterList;
    this.setState({ wizardStep: 1 });

    switch(this.props.contentType)
    {
      case "Attractions":
        this.props.attractionsActions.loadAttractionsByParentLocationId(this.props.locationId, list, this.props.searchName, this.props.pageSize, this.props.pageNumber);
        break;
      case "Restaurants":
        this.props.restaurantActions.loadRestaurantsByParentLocationId(this.props.locationId, list, this.props.searchName, this.props.pageSize, this.props.pageNumber);
        break;
      case "Nightlife":
        this.props.nightlifeActions.loadNightlifeByParentLocationId(this.props.locationId, list, this.props.searchName, this.props.pageSize, this.props.pageNumber);
        break;
      case "PointsOfInterest":
        this.props.pointOfInterestActions.loadPointOfInterestsByParentLocationId(this.props.locationId, list, this.props.searchName, this.props.pageSize, this.props.pageNumber);
        break;
    }

    this.props.modalActions.updateCategories(list);
    this.props.closeModal();
  }

  render(){

    return (
      <div className="modal-dialog mapSideBar" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <h3>Select Categories</h3>
                <div className="row">
                  <div className="profile-usermenu category">
                  <ul className="list booking-filters-list">
                  {
                    this.props.categories.map(function (category, i) {

                      let className = this.state.typeFilterList.includes(category.categoryName) ? 'active col-md-4' : 'col-md-4';

                      return (
                        <li className={className} key={category.categoryName}>
                          <a href="#" onClick={this.addCategory} data-type={category.categoryName}>
                            <input type="checkbox" className="form-check-inline" checked={this.state.typeFilterList.includes(category.categoryName) ? true : false}/>&nbsp;
                            {changeCase.upperCaseFirst(category.categoryNameFriendly)} ({category.count})
                          </a>
                        </li>
                      );
                    }, this)
                  }
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <a href="#" onClick={this.closeModal}>Close</a>
            <a href="#" onClick={this.updateCategories} className="btn btn-primary">Update Categories</a>
          </div>
        </div>
      </div>
    );
  }
}

CategoryModel.defaultProps = {
  categories: [],
  selectedCategories: []
};

CategoryModel.propTypes = {
  contentType: PropTypes.string,
  searchName: PropTypes.string,
  locationId: PropTypes.number,
  pageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array,
  updateCategories: PropTypes.func,
  closeModal: PropTypes.func,
  modalActions: PropTypes.object.isRequired,
  attractionsActions: PropTypes.object.isRequired,
  restaurantActions: PropTypes.object.isRequired,
  nightlifeActions: PropTypes.object.isRequired,
  pointOfInterestActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    attractionsActions: bindActionCreators(attractionActions, dispatch),
    pointOfInterestActions: bindActionCreators(pointOfInterestActions, dispatch),
    restaurantActions: bindActionCreators(restaurantActions, dispatch),
    nightlifeActions: bindActionCreators(nightlifeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModel);
