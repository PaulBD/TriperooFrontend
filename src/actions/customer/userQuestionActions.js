import QuestionApi from '../../api/customer/questionApi';
import * as types from '../../actionTypes/';

// ****************************************
// Get question by id
// ****************************************
export function getQuestionInitialize() {
  return {type: types.GET_QUESTION_REQUEST, isSending: true, hasPosted: false};
}

export function getQuestionSuccess(question) {
  return {type: types.GET_QUESTION_SUCCESS, isSending: false, hasPosted: true, question};
}

export function getQuestionFailure(message) {
  return {type: types.GET_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function getQuestion(questionId) {

  return dispatch => {
    dispatch(getQuestionInitialize());
    return QuestionApi.getQuestion(questionId).then(question => {
      dispatch(getQuestionSuccess(question));
    }).catch(error => {
      dispatch(getQuestionFailure(error.response.data));
    });
  };
}
// ****************************************
// Post new question
// ****************************************
export function postQuestionInitialize(isSending, question) {
  return {type: types.POST_QUESTION_REQUEST, isSending: isSending, hasPosted: false, question};
}

export function postQuestionSuccess(question) {
  return {type: types.POST_QUESTION_SUCCESS, isSending: false, hasPosted: true, question};
}

export function postQuestionFailure(message) {
  return {type: types.POST_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function resetQuestion() {
  return dispatch => {
    dispatch(postQuestionInitialize(false, null));
  };
}

export function postQuestion(question) {

  return dispatch => {
    dispatch(postQuestionInitialize(true, question));
    if ((question.question.length > 0) && (question.inventoryReference > 0))
    {
      return QuestionApi.postQuestion(question).then(question => {
        dispatch(postQuestionSuccess(question));
      }).catch(error => {
        dispatch(postQuestionFailure(error.response.data));
      });
    }
    else {
      dispatch(postQuestionFailure("Please complete the question form"));
    }
  };
}

// ****************************************
// Post new answer
// ****************************************
export function postAnswerInitialize(isSending, answer) {
  return {type: types.POST_ANSWER_REQUEST, isSending: isSending, hasPostedAnswer: false, answer};
}

export function postAnswerSuccess() {
  return {type: types.POST_ANSWER_SUCCESS, isSending: false, hasPostedAnswer: true};
}

export function postAnswerFailure(message) {
  return {type: types.POST_ANSWER_FAILURE, isSending: false, hasPostedAnswer: false, message};
}

export function resetAnswer() {
  return dispatch => {
    dispatch(postAnswerInitialize(false, null));
  };
}

export function postAnswer(answer) {
  return dispatch => {
    dispatch(postAnswerInitialize(true, answer));
    if (answer.questionId != '')
    {
      return QuestionApi.postAnswer(answer).then(questions => {
        dispatch(postAnswerSuccess());
      }).catch(error => {
        dispatch(postAnswerFailure(error.response.data));
      });
    }
    else {
      dispatch(postQuestionFailure("Please complete the answer form"));
    }
  };
}

// ****************************************
// Like question
// ****************************************
export function likeQuestionInitialize(questionReference) {
  return {type: types.LIKE_QUESTION_REQUEST, isSending: true, hasPosted: false, questionReference};
}

export function likeQuestionSuccess() {
  return {type: types.LIKE_QUESTION_SUCCESS, isSending: false, hasPosted: true};
}

export function likeQuestionFailure(message) {
  return {type: types.LIKE_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function likeQuestion(questionReference) {
  return dispatch => {
    dispatch(likeQuestionInitialize(questionReference));
    if (questionReference.length > 0)
    {
      return QuestionApi.likeQuestion(questionReference).then(() => {
        dispatch(likeQuestionSuccess());
      }).catch(error => {
        dispatch(likeQuestionFailure(error));
      });
    }
    else {
      dispatch(likeQuestionFailure("There has been an error liking this question"));
    }
  };
}

// ****************************************
// Like question
// ****************************************
export function likeAnswerInitialize(questionReference, answerReference) {
  return {type: types.LIKE_ANSWER_REQUEST, isSending: true, hasPosted: false, questionReference, answerReference};
}

export function likeAnswerSuccess() {
  return {type: types.LIKE_ANSWER_SUCCESS, isSending: false, hasPosted: true};
}

export function likeAnswerFailure(message) {
  return {type: types.LIKE_ANSWER_FAILURE, isSending: false, hasPosted: false, message};
}

export function likeAnswer(questionReference, answerReference) {
  return dispatch => {
    dispatch(likeAnswerInitialize(questionReference, answerReference));
    if (answerReference.length > 0)
    {
      return QuestionApi.likeAnswer(questionReference, answerReference).then(() => {
        dispatch(likeAnswerSuccess());
      }).catch(error => {
        dispatch(likeAnswerFailure(error));
      });
    }
    else {
      dispatch(likeAnswerFailure("There has been an error liking this answer"));
    }
  };
}
