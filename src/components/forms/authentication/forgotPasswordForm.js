import React, {PropTypes} from 'react';

const ForgotPasswordForm = ({emailAddress, hasSentPassword, isSendingPassword, onSubmit, onChange, onChangeLogin, errors}) => {
  return (
  <div className="modal-content">
    <div className="modal-body">
      <div className="row">
        <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
          <div className="bg-danger form-danger">
            {errors}
          </div>
        </div>
        <div className={hasSentPassword ? 'col-md-12' : 'col-md-12 hide'}>
          <div className="bg-success form-success">
            A reset password email has been sent to {emailAddress}
          </div>
        </div>
        <form className="modalForm" onSubmit={onSubmit}>
          <div className="col-md-12 text-center">
            <p>Please enter your email address below and we'll send you an email to reset your password.</p>
          </div>
          <div className="col-md-12">
            <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
              <input className="form-control" placeholder="Enter Email Address" type="text" onChange={onChange} name="emailAddress" value={emailAddress}/>
            </div>
          </div>
          <div className="col-md-12 text-sm-right">
            <input className="btn btn-primary" type="submit" value="Reset Password" disabled={isSendingPassword} />
          </div>
          <div className="gap gap-small"></div>
          <div className="col-md-12 text-sm-center">
            <a href="#" onClick={onChangeLogin}>Return to login</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

ForgotPasswordForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  hasSentPassword: PropTypes.bool.isRequired,
  isSendingPassword: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  errors: PropTypes.string
};

export default ForgotPasswordForm;
