import React, {PropTypes} from 'react';
let titleCase = require('title-case');
import QuestionPopup from './questionPopup';

class AskQuestionButton extends React.Component {
    render(){
    return (
        <div>
            <a href="#" className="btn btn-info questionBtn" data-toggle="modal" data-target="#reviewModel" >
                <i className="fa fa-question-circle"></i>
                Ask a question about {titleCase(this.props.name)}
            </a>
            <QuestionPopup id={this.props.id} name={titleCase(this.props.name)} type={this.props.type} />
        </div>
        );
    }
}

AskQuestionButton.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string
};

export default AskQuestionButton;