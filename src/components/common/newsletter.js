import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsletterActions from '../../actions/newsletterActions';

class Newsletter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { newsletter: [], savedNewsletter: false };
    this.save = this.save.bind(this);
  }

  save(event) {
    event.preventDefault();
    this.props.actions.saveNewsletter(this.refs.emailAddress.value);
    this.state = { savedNewsletter: true };
  }

  render() {
    return (
      <div>
        <h4>Newsletter</h4>
          <form onSubmit={this.save}>
          <label>Enter your E-mail Address</label>
          <input type="text" className="form-control" ref="emailAddress" name="emailAddress" />
          <p className="mt5"><small>*We Never Send Spam</small></p>
          <input type="submit" className="btn btn-primary" value="Subscribe" />
        </form>
      </div>
    );
  }
}


Newsletter.propTypes = {
  newsletter: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    newsletter: state.newsletter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsletterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
