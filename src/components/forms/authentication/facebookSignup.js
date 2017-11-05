import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import * as modalActions from '../../../actions/common/modalActions';
import FacebookButton from '../../layout/buttons/facebookButton';
import Toastr from 'toastr';

class FacebookSignup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.state = {
      creatingUser: false
      , requireLocation: false
      , emailAddress: ''
      , facebookId: ''
      , name: ''
      , imageUrl: ''
      , cityId: 0
      , city: ''
    };
  }

  submitFacebookForm(response) {
    this.setState({creatingUser: true, requireLocation: true, emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url});
    this.props.modalActions.openFacebook(response);
  }

  render(){
    if (!this.props.isAuthenticated) {
      return (
        <div>
          <hr className={this.props.showLines ? '' : 'hide'}/>
          <div className="gap"></div>
          <div className="row">
            <div className="col-md-6 text-right">
              <h5 className="signupText">Join Now to get started</h5>
            </div>
            <div className="col-md-6 text-xs-left">
              <FacebookButton onCallback={this.submitFacebookForm}/>
            </div>
          </div>
          <div className="gap"></div>
          <hr className={this.props.showLines ? '' : 'hide'}/>
        </div>
      );
    }
    else {
        return null;
    }
  }
}

FacebookSignup.defaultProps = {
  isAuthenticated: false,
  isFetching: false,
  showLines: true
};

FacebookSignup.propTypes = {
  actions: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  showLines: PropTypes.bool
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
    actions: bindActionCreators(authenticationActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookSignup);
