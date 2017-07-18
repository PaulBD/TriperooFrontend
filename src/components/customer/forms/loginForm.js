import React, {PropTypes} from 'react';

const LoginForm = ({emailAddress, password, isLoggingIn, onSubmit, onChange, onChangeLogin, errors}) => {
  return (
    <div className="col-md-12">
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm" onSubmit={onSubmit}>
        <div className="col-md-12">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-envelope input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter Email Address" type="text" name="emailAddress" onChange={onChange} value={emailAddress}/>
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-lock input-icon input-icon-hightlight"></i>
            <input className="form-control" type="password" placeholder="Enter Password" name="password" onChange={onChange} value={password} />
          </div>
        </div>
        <div className="col-md-12 text-center">
          <input className="btn btn-primary" type="submit" value="Login" disabled={isLoggingIn}/>
        </div>
        <div className="gap gap-small"></div>
        <div className="col-md-12 text-center">
          <a href="#" onClick={onChangeLogin}>Forgot Password? Click here</a>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  errors: PropTypes.string
};

export default LoginForm;
