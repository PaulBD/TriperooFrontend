import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import * as modalActions from '../../../actions/common/modalActions';
let titleCase = require('title-case');

class AskQuestionButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.askQuestion = this.askQuestion.bind(this);
  }

  askQuestion(e) {
    e.preventDefault();
    this.props.modalActions.openQuestion(this.props.locationId, this.props.parentLocationId, this.props.locationNameLong, this.props.locationType, this.props.pageSize, this.props.pageNumber);
  }

  render(){
    if (this.props.isAuthenticated) {
      return (
        <div>
          <a href="#" className="btn btn-secondary questionBtn" onClick={this.askQuestion}>
            <i className="fa fa-question-circle"></i>
            Ask a question
          </a>
          <div className="gap-small"></div>
        </div>
      );
    }
    else { return null; }
  }
}

AskQuestionButton.defaultProps = {
  isAuthenticated: false,
  nameShort: '',
  name: ''
};


AskQuestionButton.propTypes = {
  locationId: PropTypes.number.isRequired,
  parentLocationId: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  locationNameLong: PropTypes.string,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  authenticationActions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticationActions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionButton);
