import React, {PropTypes} from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../actions/customer/authenticationActions';
import Loader from '../../common/loadingDots';
import SignupForm from '../forms/signupForm';
import FacebookButton from './facebookButton';
import Toastr from 'toastr';

class Register extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.submitStandardForm = this.submitStandardForm.bind(this);
    this.submitFacebookForm = this.submitFacebookForm.bind(this);
    this.changeField = this.changeField.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);

    this.state = {
      creds: {
        emailAddress: '',
        password: '',
        name: '',
        city: '',
        cityId: 0
      },
      errors:'',
      creatingUser: false };
  }

  submitFacebookForm(response) {
    this.setState({creatingUser: true});
    this.props.actions.loginFacebookUser({ emailAddress: response.email, facebookId: response.userID, name: response.name, imageUrl: response.picture.data.url, cityId: 1, city: 'London'})
      .then(() => {
        this.setState({creatingUser: false, errors: this.props.errorMessage});

        if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
        {
          this.closeSignupModal(null);
        }
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({creatingUser: false, errors: error});
      });
  }

  submitStandardForm(e) {
    e.preventDefault();
    if ((this.state.creds.name.length > 0) && (this.state.creds.cityId > 0) && (this.state.creds.emailAddress.length > 0) && (this.state.creds.password.length > 0))
    {
      this.setState({creatingUser: true});
      this.props.actions.registerUser(this.state.creds)
        .then(() => {
          this.setState({creatingUser: false, errors: this.props.errorMessage});

          if (this.props.errorMessage == '' && this.props.errorMessage.length == 0)
          {
            this.closeSignupModal(null);
          }
        })
        .catch(error => {
          Toastr.error(error);
          this.setState({creatingUser: false, errors: error});
        });
    }
    else {
      this.setState({creatingUser: false, errors: "Please supply valid sign up details"});
    }
  }

  closeSignupModal(e) {
    if (e != null) {
      e.preventDefault();
    }
    this.props.closeModal();
  }

  changeField(event) {
    event.preventDefault();
    const field = event.target.name;
    let creds = this.state.creds;
    creds[field] = event.target.value;
    this.setState({creds: creds});
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType)
  {
    let creds = this.state.creds;
    creds.cityId = cityId;
    creds.city = city;
    this.setState({creds: creds});
  }


  render(){
    return (
      <div className="modal-dialog modelAuthentication" role="document">
        <div className={this.props.isFetching ? "modal-content hide" : "modal-content"}>
          <div className="modal-body">
            <div className="row">
              <div className="gap gap-small"></div>
              <div className="col-md-12 text-xs-center">
                <FacebookButton onCallback={this.submitFacebookForm}/>
              </div>
              <div className="gap gap-small"></div>
              <div className="col-md-12  text-xs-center signupSeperator">
                <strong>or</strong>
                <hr />
              </div>
              <SignupForm name={this.state.creds.name} emailAddress={this.state.creds.emailAddress} password={this.state.creds.password} cityId={this.state.creds.cityId} city={this.state.creds.city} isSigningUp={this.state.creatingUser} onSubmit={this.submitStandardForm} onChange={this.changeField} onChangeAutoComplete={this.onChangeAutoComplete} errors={this.state.errors} />
            </div>
          </div>
          <div className="modal-footer text-xs-center">
            <a href="#"  onClick={this.closeSignupModal}>Close</a>
          </div>
        </div>
        <div className={this.state.isFetching ? "modal-content" : "modal-content hide"}>
          <Loader showLoader={this.props.isFetching} />
        </div>
      </div>
    );
  }
}

Register.defaultProps = {
  isAuthenticated: false
};

Register.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  closeModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    isFetching: state.authentication.isFetching,
    errorMessage: state.authentication.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
