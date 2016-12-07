import React from "react";

export default class ReviewButton extends React.Component {
    render(){
    return (
		<a href="#" className="btn btn-info questionBtn">
            <i className="fa fa-question-circle"></i>
            Ask a question about Chester
        </a>
        );
    }
}