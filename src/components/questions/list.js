import React, {PropTypes} from 'react';
import Loader from '../common/loadingDots';

class QuestionList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
      e.target.src='/static/img/userProfileImg.png';
  }

  render() {
    if (this.props.questions != undefined && this.props.questions.length > -1) {
      return (
          <ul className="thumb-list thumb-list-right">
          {
            this.props.questions.map(question => {
            return (
                <li key={question.questionReference}>
                    <a href={question.customerProfileUrl}>
                      <img src={question.customerImageUrl ? question.customerImageUrl : '/static/img/userProfileImg.png'} alt={question.customerName} className="origin round profileImgLge" onError={this.handleMissingImage} />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">{question.friendlyDate}</p>
                        <h4 className="thumb-list-item-title"><a href={question.customerProfileUrl}>{question.customerName}</a></h4>
                        <p className="thumb-list-item-desciption">
                          <a href="#">{question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question}</a>
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
  }
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired
};

export default QuestionList;
