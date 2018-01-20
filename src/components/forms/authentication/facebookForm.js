import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';

const FacebookForm = ({city, optIn, isUpdating, onSubmit, onChangeAutoComplete, onChange, errors}) => {
  return (
    <div className="col-md-12">
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="row" onSubmit={onSubmit}>
        <div className="col-md-12">
          <h4>Tell us your location</h4>
          <p>We need to your location so we can personalize your experience</p>
          <div className="form-group form-group-lg form-group-icon-left">
            <AutoComplete onChangeAutoComplete={onChangeAutoComplete} searchValue={city} searchType="city" placeholder="Current Location" cssClass="typeahead form-control" />
          </div>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="optIn" onChange={onChange} checked={optIn == 1 ? true : false} value={optIn == 1 ? true : false}/><span className="smlText">Click here to receive marketing emails from Triperoo</span>
            </label>
            <p className="smlText">By clicking "Create My Account," you are agreeing to the Terms of Use and the Privacy Policy.</p>
          </div>
        </div>
        <div className="col-md-12 text-sm-right">
          <hr />
          <input className="btn btn-primary" type="submit" value="Complete Signup" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

FacebookForm.propTypes = {

  city: PropTypes.string.isRequired,
  optIn: PropTypes.number.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeAutoComplete: PropTypes.func.isRequired
};

export default FacebookForm;
