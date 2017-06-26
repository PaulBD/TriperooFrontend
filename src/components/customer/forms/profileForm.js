import React, {PropTypes} from 'react';
import AutoComplete from '../../common/autocomplete';

const ProfileForm = ({name, emailAddress, bio, dateOfBirth, city, password, phoneNumber, isFacebookSignup, isUpdating, onSubmit, onChange, onChangeAutoComplete, errors}) => {
  return (
    <div>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm" onSubmit={onSubmit}>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Email Address" type="text" name="emailAddress" disabled={true} onChange={onChange} value={emailAddress} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon input-icon-hightlight"></i>
            <textarea className="form-control large" placeholder="Enter Bio" type="text" name="bio" onChange={onChange} value={bio} rows="6" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-user input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Name" name="name" type="text" onChange={onChange} value={name} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
            <input className="form-control" type="text" placeholder="Enter Date Of Birth" name="dateOfBirth" onChange={onChange} value={dateOfBirth} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-phone input-icon input-icon-hightlight"></i>
            <input className="form-control" type="text" placeholder="Enter Phone Number" name="phoneNumber" onChange={onChange} value={phoneNumber} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
            <AutoComplete onChangeAutoComplete={onChangeAutoComplete} searchValue={city} searchType="city" placeholder="Current Location" cssClass="typeahead form-control" />
          </div>
          <div className={isFacebookSignup ? "hide" : "form-group form-group-lg form-group-icon-left"}><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter New Password" name="pass" type="password" onChange={onChange}  />
          </div>
        </div>
        <div className="col-md-12 text-xs-right">
          <hr />
          <input className="btn btn-primary" type="submit" value="Update Profile" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

ProfileForm.propTypes = {
  name: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  cityId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string,
  password: PropTypes.string,
  phoneNumber: PropTypes.string.isRequired,
  isFacebookSignup: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeAutoComplete: PropTypes.func.isRequired
};

export default ProfileForm;
