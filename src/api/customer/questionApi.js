import axios from 'axios';
import baseUrl from '../baseApi';

class QuestionApi {

  // ****************************************
  // Get question
  // ****************************************
  static getQuestion(questionId) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: baseUrl + '/question/' + questionId,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          resolve(Object.assign({}, response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Post question
  // ****************************************
  static postQuestion(question) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + '/question',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          question
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Post answer
  // ****************************************
  static postAnswer(answer) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: baseUrl + '/question/answer',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          answer
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Like an existing question
  // ****************************************
  static likeQuestion(questionReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: baseUrl + '/question/' + questionReference + '/like',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          questionReference
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // ****************************************
  // Like an existing answer
  // ****************************************
  static likeAnswer(questionReference, answerReference) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: baseUrl + '/question/' + questionReference + '/answer/' + answerReference + '/like',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('id_token')).token
        },
        data: {
          questionReference,
          answerReference
        }
      })
        .then(response => {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}

export default QuestionApi;
