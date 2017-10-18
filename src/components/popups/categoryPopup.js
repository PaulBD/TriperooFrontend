import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';

class CategoryModel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.state = {
      typeFilterList: this.props.selectedCategories,
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
    this.setState({ wizardStep: 1 });
    this.props.modalActions.updateCategories(this.state.typeFilterList);
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

                      let className = this.state.typeFilterList.includes(category.categoryName) ? 'active col-md-3' : 'col-md-3';

                      return (
                        <li className={className} key={category.categoryName}>
                          <a href="#" onClick={this.addCategory} data-type={category.categoryName}>
                            {category.categoryNameFriendly}
                            <i className={this.state.typeFilterList.includes(category.categoryName) ? "fa fa-check categoryCheck" : "hide"} />
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
            <a href="#" onClick={this.updateCategories} className="btn btn-primary">Update Categories</a>
            <a href="#" onClick={this.closeModal}>Close</a>
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
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array,
  updateCategories: PropTypes.func,
  closeModal: PropTypes.func,
  modalActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModel);
