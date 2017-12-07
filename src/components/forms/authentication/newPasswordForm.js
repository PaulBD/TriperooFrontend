import React, {PropTypes} from 'react';

const NewPasswordForm = ({isUpdating, onSubmit, onChange, errors}) => {
  return (
    <div className="row">
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm" onSubmit={onSubmit}>
        <div className="col-md-12">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter New Password" name="newPassword" type="password" onChange={onChange} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Confirm New Password" name="newPasswordB" type="password" onChange={onChange} />
          </div>
        </div>
        <div className="col-md-12 text-sm-right">
          <input className="btn btn-primary" type="submit" value="Update Password" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

NewPasswordForm.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NewPasswordForm;
