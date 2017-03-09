import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';
import Rater from 'react-rating';
import TagList from '../common/tagList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewActions from '../../actions/reviewActions';

class ReviewPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSearchNameChange = this.handleSearchNameChange.bind(this);
    this.handleSearchIdChange = this.handleSearchIdChange.bind(this);
    this.handleSearchUrlClick = this.handleSearchUrlClick.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.undoReviewSelection = this.undoReviewSelection.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);

    this.addTags = this.addTags.bind(this);
    this.onRate = this.onRate.bind(this);
    this.submitReview = this.submitReview.bind(this);
   
    this.state = { searchName: '', searchId: '', searchType: '', errors:'', comment: '', tags:["Adventure","Arty","Backpackers","Budget","Business","Family","Foodies","Eco","History","Local Culture","Luxury","Nightlife","Outdoor","Solo","Spiritual","Students","Trendsters","Vegetarian","Wellness" ], selectedTags:[], rating: 0, wizardStep: 1 };
  }

  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSearchNameChange(value) {
    this.setState({ searchName: value, wizardStep: 2 });
  }

  handleSearchIdChange(value) {
    this.setState({ searchId: value, wizardStep: 2 });
  }

  handleSearchTypeChange(value) {
    this.setState({ searchType: value, wizardStep: 2 });
  }

  handleSearchUrlClick(value) { }

  undoReviewSelection(e) {
    e.preventDefault(e);
    this.setState({ searchName: '', searchId: '', errors:'', wizardStep: 1 });
  }

  onRate(e) {
    this.setState({ rating: e });
  }

  addTags(value) {
    this.setState({ selectedTags: value });
  }

  submitReview(e) {
    e.preventDefault();
    
    let event = new MouseEvent('click', { 'view': window, 'bubbles': true, 'cancelable': false });
    let node = document.getElementById('closeReview');

    const review = { "PlaceReference": this.state.searchId, "PlaceType": this.state.searchType, "StarRating": this.state.rating, "comment": this.refs.comment.value.trim(), "tags": this.state.selectedTags };
    this.props.actions.postReview(review, this, event, node);
}

  render(){    
    return (
          <div className="modal fade" id="reviewModel" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modelReviewAuthentication" role="document">
              <div className="modal-content">
                <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Find a place to review</h3>
                      <p>Search for a place you'd like to review. (e.g London Eye, W Hotel, Barcelona)</p>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
                           <AutoComplete isAppSearch={false} changeId={this.handleSearchIdChange} changeValue={this.handleSearchNameChange} changeType={this.handleSearchTypeChange} changeUrl={this.handleSearchUrlClick} searchType="all" placeholder="Search anywhere in the world" cssClass="typeahead form-control" searchValue={this.state.searchName} />
                        </div>
                    </div>
                  </div>
                  <div className="modal-footer text-xs-center">
                    <a href="#" data-dismiss="modal">Close</a>
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
                      <div className="col-md-12 text-xs-center">
                          <input className="btn btn-primary" type="submit" value="Post Review" />
                      </div>
                      <div className="gap gap-small"></div>
                    </form>
                  </div>
                  <div className="modal-footer text-xs-center">
                    <a href="#" onClick={this.undoReviewSelection}>Review a different location</a> | <a href="#" data-dismiss="modal">Close</a>
                  </div>
                </div>
                <div className={this.state.wizardStep == 3 ? "modal-body" : "modal-body hide"}>
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Thanks for the Review</h3>
                      <p>Thank you for posting your review. Please click <a href="#" data-dismiss="modal" id="closeReview">here</a> to close the window.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

ReviewPopup.defaultProps = {
  id: 0,
  name: '',
  isSending: false,
  hasPosted: false
};

ReviewPopup.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool
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
    actions: bindActionCreators(reviewActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);
