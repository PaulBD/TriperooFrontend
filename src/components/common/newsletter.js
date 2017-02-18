import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsletterActions from '../../actions/newsletterActions';

class Newsletter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { savedNewsletter: 0, formError: 0 };
    this.saveNewsletter = this.saveNewsletter.bind(this);
  }

  saveNewsletter(e) {
    e.preventDefault();

    let email = this.refs.emailAddress.value.trim();

    if (email.length > 0)
    {
      this.props.actions.saveNewsletter(email);
      this.state = { savedNewsletter: 1, formError: 0 };
    }
    else {
      this.state = { formError: 1 };
    }
  }

  render() {

    let form = (
      <form onSubmit={this.saveNewsletter}>
        <label className={this.state.formError ? 'error' : ''}>Enter your E-mail Address</label>
        <input type="text" className="form-control" ref="emailAddress" name="emailAddress" />
        <p className="mt5"><small>*We Never Send Spam</small></p>
        <input type="submit" className="btn btn-primary" value="Subscribe" />
      </form>
    );

    if (this.state.savedNewsletter)
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
