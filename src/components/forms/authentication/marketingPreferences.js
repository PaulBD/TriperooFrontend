import React, {PropTypes} from 'react';

const PreferencesForm = ({optInEmail, optInPost, optInTelephone, optInText, gdprConsent, isUpdating, onSubmit, onChange, errors}) => {
  return (
    <div className="col-md-12">
      <h3>Marketing Preferences</h3>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="row" onSubmit={onSubmit}>
        <div className="col-md-12">
          <p>We would like to keep in touch about products, services and offers that may be of interest to you. By
  clicking the checkboxes below you are agreeing that we can contact you by post, telephone, email, text message and other elctronic means.</p>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="optInEmail" onChange={onChange} checked={optInEmail == 1 ? true : false} value={optInEmail == 1 ? true : false}/><span className="smlText">Email</span>
            </label>
          </div>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="optInPost" onChange={onChange} checked={optInPost == 1 ? true : false} value={optInPost == 1 ? true : false}/><span className="smlText">Post</span>
            </label>
          </div>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="optInTelephone" onChange={onChange} checked={optInTelephone == 1 ? true : false} value={optInTelephone == 1 ? true : false}/><span className="smlText">Telephone</span>
            </label>
          </div>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="optInText" onChange={onChange} checked={optInText == 1 ? true : false} value={optInText == 1 ? true : false}/><span className="smlText">Text message</span>
            </label>
          </div>

        </div>
        <div className="col-md-12">
          <h3>Terms of Use</h3>
          <div className="form-group form-group-lg form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox"  name="gdprConsent" onChange={onChange} checked={gdprConsent == 1 ? true : false} value={gdprConsent == 1 ? true : false}/><span className="smlText">You can find the terms of use <a href="/terms-of-use">here</a>. Please check this box if you do not want to be contacted by Triperoo</span>
            </label>
          </div>
          <p>We may on occasion, still need to send you important service messages.</p>
        </div>

        <div className="col-md-12 text-sm-right">
          <hr />
          <input className="btn btn-primary" type="submit" value="Update Marketing Preferences" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

PreferencesForm.propTypes = {
  optInEmail: PropTypes.number,
  optInPost: PropTypes.number,
  optInTelephone: PropTypes.number,
  optInText: PropTypes.number,
  gdprConsent: PropTypes.number,
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PreferencesForm;
