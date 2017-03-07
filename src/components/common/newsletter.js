import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsletterActions from '../../actions/newsletterActions';

class Newsletter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.saveNewsletter = this.saveNewsletter.bind(this);
  }

  saveNewsletter(e) {
    e.preventDefault();
    this.props.actions.saveNewsletter(this.refs.emailAddress.value.trim());

  }

  render() {
    let form = (
      <form onSubmit={this.saveNewsletter}>
        <label className={this.props.errorMessage ? 'error orange' : ''}>{this.props.errorMessage}</label>
        <input type="text" className="form-control" ref="emailAddress" name="emailAddress" />
        <p className="mt5"><small>*We Never Send Spam</small></p>
        <input type="submit" className="btn btn-primary" value="Subscribe" />
      </form>
    );

    if (this.props.hasSaved)
    {
      form = ('We have added your email to our mailing list!');
    }

    return (
      <div>
        <h4>Newsletter</h4>
        {form}
      </div>
    );
  }
}

Newsletter.propTypes = {
  newsletter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  hasSaved: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    newsletter: state.newsletter,
    errorMessage: state.newsletter.errorMessage,
    hasSaved: state.newsletter.hasSaved
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsletterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
