import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userQuestionActions from '../../actions/customer/userQuestionActions';
import * as locationActions from '../../actions/location/locationActions';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as modalActions from '../../actions/common/modalActions';

import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import Header from '../../components/content/headers/locationCategory';
import LocationStats from '../../components/layout/location/stats';
import LocationOverview from '../../components/layout/location/locationDescription';
import WeatherForcast from '../../components/layout/weather/forecast';
import TriperooLoader from '../../components/loaders/globalLoader';
import AnswerButton from '../../components/layout/buttons/answerButton';
import AnswerItem from '../../components/layout/cards/questions/answerItem';
import QuestionHelpful from '../../components/social/questionHelpful';
import Toastr from 'toastr';
let _ = require('lodash');

class QuestionDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingLocation: true, isLoadingQuestion:false, isUpdatingLike: false, location: {}, showLike: true };
    this.handleMissingImage = this.handleMissingImage.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadLocation();
  }

  answerQuestion(e) {
    e.preventDefault();
    let ref = e.target.getAttribute('data-ref');
    let question = e.target.getAttribute('data-question');

    this.props.userQuestionActions.resetAnswer();
    this.props.modalActions.openQuestionAnswer(ref, question, this.props.locationId, 3, 0);
  }

  handleMissingImage(e) {
    e.target.src='/static/img/userProfileImg.png';
  }

  loadLocation() {
    this.setState({ isLoadingLocation: true });
    this.props.locationActions.loadLocationById(this.props.locationId, true)
      .then(() => {
        this.setState({
          isLoadingLocation: false,
          isLoadingQuestion: true,
          location: _.cloneDeep(this.props.location)
        });

        this.props.userQuestionActions.getQuestion(this.props.questionId)
          .then(() => {
            this.setState({ isLoadingQuestion: false });
          })
          .catch(error => {
            Toastr.error(error);
            this.setState({isLoadingLocation: false, isLoadingQuestion: false});
          });
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  render(){

    if (! this.state.isLoadingLocation && !this.state.isLoadingQuestion)
    {
      let question = this.props.question;

      document.title = question.customerName + ' is looking for advice...';
      return (
        <div>
          <Header location={this.props.location} contentType="questions" title="questions" />
          <div className="container">
            <div className="row row-wrap">
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h4><a href={question.customerProfileUrl}>{question.customerName}</a>  is looking for advice...</h4>
                    <hr/>
                  </div>
                  <div className="col-md-8">
                    <p><i>"{question.question}"</i></p>
                    <p className="questionActions">{this.props.isAuthenticated ? (<span><a href="#" onClick={this.answerQuestion} data-ref={question.questionReference} data-question={question.question}>Answer Question</a></span>) : ""} &bull; {question.answers ? question.answers.length : '0'} {question.answers ? question.answers.length == 1 ? 'Answer' : 'Answers' : 'Answers'} <span>&bull; Added {question.friendlyDate}</span> &bull; <QuestionHelpful questionRef={question.questionReference} likeCount={question.likeCount} />
                    </p>

                    <div className="row">
                        <div className="col-md-12">
                          <ul className="booking-item-reviews list">
                            {
                              question.answers ? question.answers.map(function (answer, i) {
                                return (<AnswerItem key={i} answer={answer} questionReference={question.questionReference}/>);
                              }) : ''
                            }
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <AnswerButton questionReference={question.questionReference} question={question.question} locationId={this.props.locationId} locationName={this.state.location.regionName} locationNameLong={this.state.location.regionNameLong} locationType={this.state.location.regionType} pageSize={3} pageNumber={0} />
                    <div className="gap gap-small"></div>
                    <LocationOverview location={this.props.location} />
                    <LocationStats locationId={this.props.locationId} stats={this.props.location.stats} locationUrl={this.props.location.url} locationName={this.props.location.regionName}  />
                    <div className="gap gap-small"></div>
                    <WeatherForcast locationId={this.props.locationId} />
                  </div>
                </div>
              </div>
              <div className="gap"></div>
            </div>
          </div>
          <FacebookSignup />
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

QuestionDetail.defaultProps = {
  isFetching: false,
  questionId: '',
  isAuthenticated: false
};

QuestionDetail.propTypes = {
  locationId: PropTypes.number,
  questionId: PropTypes.string,
  location: PropTypes.object,
  question: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  userQuestionActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  authenticationActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0,
    questionId: ownProps.params.questionId ? ownProps.params.questionId : '',
    question: state.question.question ? state.question.question : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    userQuestionActions: bindActionCreators(userQuestionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
