import React, {PropTypes} from 'react';

const PasswordForm = ({isUpdating, onSubmit, onChange, errors}) => {
  return (
    <div>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm" onSubmit={onSubmit}>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Password" name="password" type="password" onChange={onChange} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter New Password" name="newPassword" type="password" onChange={onChange} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Confirm New Password" name="newPasswordB" type="password" onChange={onChange} />
          </div>
        </div>
        <div className="col-md-12 text-xs-right">
          <input className="btn btn-primary" type="submit" value="Update Password" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

PasswordForm.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PasswordForm;
