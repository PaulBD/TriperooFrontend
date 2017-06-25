import React, {PropTypes} from 'react';

import Loader from '../../common/loadingDots';
import QuestionItem from './questionItem';

class QuestionList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.questions != undefined && this.props.questions.length > -1) {
      if (this.props.questions.length > 0)
      {
        let pageSize = this.props.pageSize;
        let pageNumber = this.props.pageNumber;
        let locationId = this.props.locationId;

        return (
          <ul className="booking-item-reviews list">
            {
              this.props.questions.map(function (question, i) {
                return (<QuestionItem key={i} question={question} locationId={locationId} pageSize={pageSize} pageNumber={pageNumber} />);
              })
            }
          </ul>
        );
      }
      else {
        return (<p>There are no questions available for {this.props.locationName}. Be the first to ask a question.</p>);
      }
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}

QuestionList.defaultProps = {
  questions: []
};

QuestionList.propTypes = {
  locationName: PropTypes.string,
  locationId: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
};


export default QuestionList;

