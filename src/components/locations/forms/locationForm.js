import React, {PropTypes} from 'react';

const LocationForm = ({address, isUpdating, onSubmit, onChange, errors}) => {
  return (
    <div>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm"  onSubmit={onSubmit}>
        <div className="col-md-12">
          <div className="form-group form-group-lg form-group-icon-left">
            <input className="form-control" placeholder="Enter Address Line 1" name="field0" type="text" onChange={onChange} value={address[0]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left">
            <input className="form-control" placeholder="Enter Town/City" type="text" name="field1" onChange={onChange} value={address[1]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left">
            <input className="form-control" type="text" placeholder="Enter County/State/Province" name="field2" onChange={onChange} value={address[2]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left">
            <input className="form-control" type="text" placeholder="Enter Country" name="field3" onChange={onChange} value={address[3]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left">
            <input className="form-control" type="text" placeholder="Enter Postcode/Zip Code" name="field4" onChange={onChange} value={address[4]} />
          </div>
        </div>
        <div className="col-md-12 text-xs-center">
          <input className="btn btn-primary" type="submit" value="Update Details" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

LocationForm.propTypes = {
  address: PropTypes.array.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LocationForm;
