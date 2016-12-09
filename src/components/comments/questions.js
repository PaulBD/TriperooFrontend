import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commentActions from '../../actions/commentActions';
import CommentList from './commentList';
import {browserHistory} from 'react-router';

class Questions extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = { comments: [] };
      this.props.actions.loadComments(this.props.searchType, this.props.searchId, this.props.limit, this.props.offset);
  }
    render(){
    const {comments} = this.props;

    return (
        <div>
            <h3 className="mb20">Share The Knowledge</h3>
            <p>Community is the heart of everything we do, share tips on where to go and what<br />to do with other like-minded people and help others discover amazing places.</p>
            
            <div className="gap gap-small"></div>
            <CommentList comments={comments} />
        </div>    
        );
    }
}

Questions.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired,
  searchId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);