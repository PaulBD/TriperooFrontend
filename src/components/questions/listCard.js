import React, {PropTypes} from 'react';

import Loader from '../common/loadingDots';
import Item from './item';

class ListCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.questions != undefined && this.props.questions.length > -1) {
      if (this.props.questions.length > 0)
      {
        let isSideComponent = this.props.isSideComponent;
        let isAuthenticated = this.props.isAuthenticated;

        return (
          <ul className="booking-item-reviews list">
            {
              this.props.questions.map(function (question, i) {
                return (
                  <li key={question.questionReference}>
                    <Item question={question} isAuthenticated={isAuthenticated} isSideComponent={isSideComponent} showAnswerPopup={this.props.showAnswerPopup}/>
                  </li>
                );
              }, this)
            }
          </ul>
        );
      }
      else {
        return (<div className="col-md-12"><p>There are no questions available for {this.props.locationName}. Be the first to ask a question.</p></div>);
      }
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}

ListCard.defaultProps = {
  questions: []
};

ListCard.propTypes = {
  locationName: PropTypes.string,
  locationId: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSideComponent: PropTypes.bool.isRequired,
  showAnswerPopup: PropTypes.func.isRequired
};


export default ListCard;

