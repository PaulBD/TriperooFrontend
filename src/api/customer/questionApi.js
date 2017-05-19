import axios from 'axios';
import baseUrl from '../baseApi';

class QuestionApi {

  // ****************************************
  // Post new question
  // ****************************************
  static postQuestion(question) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/question',
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
  // Post new answer
  // ****************************************
  static postAnswer(answer) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url:  baseUrl + '/question/' + answer.questionId + '/answer',
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
}

export default QuestionApi;