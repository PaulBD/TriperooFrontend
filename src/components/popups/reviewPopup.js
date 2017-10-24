import React, {PropTypes} from 'react';
import AutoComplete from '../forms/common/autocomplete';
import Rater from 'react-rating';
import TagList from '../forms/common/tagList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userReviewActions from '../../actions/customer/userReviewActions';
import * as locationReviewsActions from '../../actions/location/reviews/reviewsActions';
let _ = require('lodash');

class ReviewPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.undoReviewSelection = this.undoReviewSelection.bind(this);
    this.addTags = this.addTags.bind(this);
    this.onRate = this.onRate.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);

    this.state = { reviewReference: '', isPostingReview: false, isLoadingReviews: false, wizardStep: 1, modalIsOpen: false, searchName: '', searchId: 0, searchType: '', errors:'', comment: '', tags:["Adventure","Arty","Backpackers","Budget","Business","Family","Foodies","Eco","History","Local Culture","Luxury","Nightlife","Outdoor","Solo","Spiritual","Students","Trendsters","Vegetarian","Wellness" ], selectedTags:[], rating: 0};
  }

  componentWillMount() {
    if (this.props.isEdit)
    {
      this.setState({
        searchName: this.props.locationName,
        searchId: this.props.locationId,
        searchType: this.props.locationType,
        selectedTags: _.cloneDeep(this.props.tags),
        rating: this.props.starRating,
        comment: this.props.comment,
        reviewReference: this.props.reference,
        wizardStep: 2
      });
    }
    else {
      if (this.props.locationId > 0) {
        this.setState({
          searchName: this.props.locationName,
          searchId: this.props.locationId,
          searchType: this.props.locationType,
          wizardStep: 2
        });
      }
      else {
        this.setState({wizardStep: 1});
      }
    }
  }

  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType) {
    this.setState({ searchName: city, searchId: cityId, searchType: dataType, wizardStep: 2 });
  }

  undoReviewSelection(e) {
    e.preventDefault(e);
    this.setState({ searchName: '', searchId: '', searchType:'',  errors:'', wizardStep: 1 });
  }

  onRate(value) {
    this.setState({ rating: value });
  }

  addTags(value) {
    this.setState({ selectedTags: value });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  submitReview(e) {
    e.preventDefault();
    this.setState({isPostingReview: true});

    if (this.props.isEdit)
    {
      const editReview = {
        "reviewReference": this.state.reviewReference,
        "inventoryReference": this.state.searchId,
        "ReviewType": this.state.searchType,
        "StarRating": this.state.rating,
        "comment": this.refs.comment.value.trim(),
        "tags": _.cloneDeep(this.state.selectedTags)
      };

      this.props.userReviewActions.updateReview(_.cloneDeep(editReview))
        .then(() => {
          this.props.userReviewActions.getReviews(this.props.currentUserId);
          this.setState({isPostingReview: false, isLoadingReviews: false, wizardStep: 3});
        })
        .catch(error => {
          this.setState({isPostingReview: false});
        });
    }
    else {
      const newReview = { "inventoryReference": this.state.searchId, "ReviewType": this.state.searchType, "StarRating": this.state.rating, "comment": this.refs.comment.value.trim(), "tags": this.state.selectedTags };

      this.props.userReviewActions.postReview(newReview)
        .then(() => {
          this.setState({isPostingReview: false, isLoadingReviews: true});
          this.props.locationReviewsActions.loadReviewsByLocationId(this.props.locationId, this.props.pageSize, this.props.pageNumber)
            .then(() => this.setState({isLoadingReviews: false, wizardStep: 3}))
            .catch(error => {
              this.setState({isLoadingReviews: false});
            });
        })
        .catch(error => {
          this.setState({isPostingReview: false});
        });
    }
  }

  render(){
    return (
      <div className="modal-dialog modelReviewAuthentication" role="document">
        <div className="modal-content">
          <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h3>Find a place to review</h3>
                <p>Search for a place you'd like to review. (e.g London Eye, W Hotel, Barcelona)</p>
              </div>
              <div className="col-md-12">
                <div className="form-group form-group-lg form-group-icon-left">
                  <AutoComplete isAppSearch={false} onChangeAutoComplete={this.onChangeAutoComplete}  searchType="all" placeholder="Search anywhere in the world" cssClass="typeahead form-control" searchValue={this.state.searchName} />
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
          <div className={this.state.wizardStep == 2 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className={this.props.errorMessage != undefined && this.props.errorMessage.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
                <div className="bg-danger form-danger">
                  {this.props.errorMessage}
                </div>
              </div>
              <div className="col-md-12">
                <h3>Write a review</h3>
                <p>{this.state.searchName}</p>
              </div>
              <form className="modalForm" onSubmit={this.submitReview}>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Your Rating</label>
                    <Rater initialRate={this.state.rating} onClick={this.onRate} full="fa fa-star fa-2x orange starRating" placeholder="fa fa-star fa-2x orange starRating" empty="fa fa-star-o fa-2x starRating"/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Your Review</label>
                    <textarea ref="comment" className="form-control" rows="6" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Recommended For</label>
                    <TagList tags={this.state.tags} selectedTags={this.state.selectedTags} maxTags={30} readOnly={false} returnTags={this.addTags} />
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <input className="btn btn-primary" type="submit" value={this.props.isEdit ? "Update Review" : "Post Review"} disabled={this.state.isPostingReview} />
                </div>
                <div className="gap gap-small"></div>
              </form>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.undoReviewSelection} className="hide">Review a different location</a><a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
          <div className={this.state.wizardStep == 3 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h3>Thank you for the Review</h3>
                <p className={this.props.isEdit ? "hide" : ""}>Posting a review about <strong>{this.state.searchName}</strong> will help other Triperoo'ers in the future. Thank you!</p>
                <p className={!this.props.isEdit ? "hide" : ""}>Thanks for updating your review about <strong>{this.state.searchName}</strong>. This will help other Triperoo'ers in the future. Thank you!</p>
                <p>Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReviewPopup.defaultProps = {
  locationId: 0,
  locationName: '',
  isSending: false,
  hasPosted: false
};

ReviewPopup.propTypes = {
  pageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  userReviewActions: PropTypes.object.isRequired,
  locationReviewsActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool,
  isEdit: PropTypes.bool,
  reference: PropTypes.string,
  locationAddress: PropTypes.string,
  starRating: PropTypes.number,
  comment: PropTypes.string,
  tags: PropTypes.array,
  closeModal: PropTypes.func,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.review.isFetching,
    errorMessage: state.review.errorMessage,
    hasPosted: state.review.hasPosted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userReviewActions: bindActionCreators(userReviewActions, dispatch),
    locationReviewsActions: bindActionCreators(locationReviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);
