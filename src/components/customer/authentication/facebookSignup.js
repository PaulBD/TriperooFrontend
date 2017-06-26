import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import FacebookButton from './facebookButton';
import Toastr from 'toastr';

class FacebookSignup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.state = {creatingUser: false};
  }

  submitFacebookForm(response) {
    this.setState({creatingUser: true});
    this.props.actions.loginFacebookUser({ emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, cityId: 1, city: 'London'})
      .then(() => this.setState({creatingUser: false}))
      .catch(error => {
        Toastr.error(error.response.status == 400 ? error.response.data.responseStatus.message : "An error has occurred whilst authenticating using Facebook");
        this.setState({creatingUser: false});
      });
  }

  render(){
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <hr />
          <div className="gap"></div>
          <div className="row">
              <div className="col-md-6 text-xs-right">
                <h5 className="signupText">Join Now to get started</h5>
              </div>
              <div className="col-md-6 text-xs-left">
                <FacebookButton onCallback={this.submitFacebookForm}/>
              </div>
          </div>
          <div className="gap"></div>
          <hr />
        </div>
      );
    }
    else {
      if (this.state.creatingUser)
      {
        return (
          <div>
            <hr />
            <div className="gap"></div>
            <div className="row">
              <div className="col-md-12 text-xs-center">
                <h5 className="signupText">Creating Triperoo User...</h5>
              </div>
            <hr />
          </div>
          </div>
        );
      }
      else {
        return null;
      }
    }
  }
}

FacebookSignup.defaultProps = {
  isAuthenticated: false,
  isFetching: false
};

FacebookSignup.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.authentication.isFetching,
    isAuthenticated: state.authentication.isAuthenticated,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignup);
