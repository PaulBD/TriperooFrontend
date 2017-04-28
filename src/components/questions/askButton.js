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
                    <a href="#" className="btn btn-info questionBtn" data-toggle="modal" data-target="#questionModel" >
                        <i className="fa fa-question-circle"></i>
                        Ask a question about {this.props.locationNameShort.length > 15 ? "this location" : titleCase(this.props.locationNameShort)}
                    </a>
                    <QuestionPopup locationId={this.props.locationId} locationName={titleCase(this.props.locationName)} locationType={this.props.locationType} />
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
    locationId: PropTypes.number,
    locationName: PropTypes.string,
    locationNameShort: PropTypes.string,
    locationType: PropTypes.string,
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