import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/authenticationActions';
let titleCase = require('title-case');
import QuestionPopup from './addNew';

class AskQuestionButton extends React.Component {
    render(){
        if (this.props.isAuthenticated) {
            return (
                <div>
                    <a href="#" className="btn btn-info questionBtn" data-toggle="modal" data-target="#reviewModel" >
                        <i className="fa fa-question-circle"></i>
                        Ask a question about {titleCase(this.props.nameShort)}
                    </a>
                    <QuestionPopup id={this.props.id} name={titleCase(this.props.name)} type={this.props.type} />
                    <div className="gap-small"></div>
                </div>
                );
        }
        else { return null; }
    }
}

AskQuestionButton.defaultProps = {
  isAuthenticated: false
};


AskQuestionButton.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    nameShort: PropTypes.string,
    type: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AskQuestionButton);