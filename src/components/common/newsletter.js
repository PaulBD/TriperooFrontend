import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsletterActions from '../../actions/customer/newsletterActions';

class Newsletter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.saveNewsletter = this.saveNewsletter.bind(this);
    this.changeEmailAddress = this.changeEmailAddress.bind(this);
    this.state = { isPosting: false, emailAddress: '', error: '' };
  }

  changeEmailAddress(e) {
    this.setState({emailAddress: e.target.value});
  }

  saveNewsletter(e) {
    e.preventDefault();
    this.setState({isPosting: true, error: ''});
    if (this.state.emailAddress.length > 0) {
      this.props.actions.saveNewsletter(this.state.emailAddress)
        .then(() => this.setState({isPosting: false}))
        .catch(error => {
          this.setState({isPosting: false, error});
        });
    }
    else {
      this.setState({isPosting: false, error: 'Please enter a valid email address'});
    }
  }

  render() {
    let form = (
      <form onSubmit={this.saveNewsletter}>
        <label className={this.state.error ? 'error orange' : ''}>{this.state.error}</label>
        <input type="text" className="form-control" ref="emailAddress" name="emailAddress" onChange={this.changeEmailAddress}/>
        <p className="mt5"><small>*We Never Send Spam</small></p>
        <input type="submit" className="btn btn-primary" value={this.state.isPosting ? "Posting" : "Subscribe"} disabled={this.state.isPosting}/>
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
