import React, {PropTypes} from 'react';

const QuestionList = ({questions}) => {
  
  return (
      <ul className="thumb-list thumb-list-right">
      {
        questions.map(question => {
        return (
                <li key={question.id}>
                    <a href={question.reviewer.profileUrl}>
                        <img className="rounded" src={question.reviewer.profilePic} title={question.reviewer.name} />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">5 minutes ago</p>
                        <h4 className="thumb-list-item-title"><a href={question.reviewer.profileUrl}>{question.reviewer.name}</a></h4>
                        <p className="thumb-list-item-desciption">{question.reviewer.question.substring(0, 50)}...</p>
                    </div>
                </li>
          );
        })
      }
    </ul>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired
};

export default QuestionList;
