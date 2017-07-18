import React, {PropTypes} from 'react';
import AutoComplete from '../../common/autocomplete';

const SignupForm = ({name, emailAddress, password, cityId, city, isSigningUp, onSubmit, onChange, onChangeAutoComplete, errors}) => {
  return (
    <div className="col-md-12">
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm"  onSubmit={onSubmit}>
        <div className="col-md-12">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-user input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Name" name="name" type="text" onChange={onChange} value={name} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Email Address" type="text" name="emailAddress" onChange={onChange} value={emailAddress} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" type="password" placeholder="Enter Password" name="password" onChange={onChange} value={password} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
            <AutoComplete onChangeAutoComplete={onChangeAutoComplete} searchValue={city} searchType="city" placeholder="Current Location" cssClass="typeahead form-control" />
          </div>
          <p className="smlText">By clicking "Create My Account," you are agreeing to the Terms of Service and the Privacy Policy. You'll
            also receive email updates about your account, sent to you by Triperoo. You can opt out in Account Settings.</p>
        </div>
        <div className="col-md-12 text-center">
          <input className="btn btn-primary" type="submit" value="Create My Account" Disabled={isSigningUp}/>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  name: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  cityId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  isSigningUp: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeAutoComplete: PropTypes.func.isRequired
};

export default SignupForm;
