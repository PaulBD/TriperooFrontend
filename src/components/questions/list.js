import React, {PropTypes} from 'react';
import Loader from '../common/loadingDots';

const QuestionList = ({questions}) => {
  if (questions != undefined && questions.length > -1) {
    return (
        <ul className="thumb-list thumb-list-right">
        {
          questions.map(question => {
          return (
              <li key={question.questionReference}>
                  <a href={question.customerProfileUrl}>
                    <img src={question.customerImageUrl ? question.customerImageUrl : '/static/img/userProfileImg.png'} alt={question.customerName} className="origin round profileImgLge" onError={(e)=>{e.target.src='/static/img/userProfileImg.png';}} />
                  </a>
                  <div className="thumb-list-item-caption">
                      <p className="thumb-list-item-meta">{question.friendlyDate}</p>
                      <h4 className="thumb-list-item-title"><a href={question.customerProfileUrl}>{question.customerName}</a></h4>
                      <p className="thumb-list-item-desciption">
                        <a href="#">{question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question }</a>
                      </p>
                  </div>
              </li>
            );
          })
        }
      </ul>
    );
  } 
  else {
    return (<Loader showLoader={true} />);
  }
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired
};

export default QuestionList;
