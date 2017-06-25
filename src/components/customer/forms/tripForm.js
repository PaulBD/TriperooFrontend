import React, {PropTypes} from 'react';
import AutoComplete from '../../common/autocomplete';
let DatePicker = require('react-datepicker');

const TripForm = ({listName, description, startDate, endDate, regionName, isCreatingList, onSubmit, onChange, onChangeStartDate, onChangeEndDate, onChangeAutoComplete, errors}) => {
  return (
    <div>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm"  onSubmit={onSubmit}>
        <div className="col-md-12">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon input-icon-hightlight"></i>
            <AutoComplete onChangeAutoComplete={onChangeAutoComplete} searchValue={regionName} searchType="city" placeholder="Current Location" cssClass="typeahead form-control" />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-pencil input-icon input-icon-hightlight"></i>
            <input className="form-control" placeholder="Enter List Name" name="listName" type="text" onChange={onChange} value={listName} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon input-icon-hightlight"></i>
            <textarea className="form-control large" placeholder="Enter Description" type="text" name="description" onChange={onChange} value={description} rows="6" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
            <DatePicker name="startDate" dateFormat="DD/MM/YYYY"  selected={startDate} onChange={onChangeStartDate} className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
            <DatePicker name="endDate" dateFormat="DD/MM/YYYY"  selected={endDate} onChange={onChangeEndDate} className="form-control" />
          </div>
        </div>
        <div className="col-md-12 text-xs-center">
          <input className="btn btn-primary" type="submit" value="Create My Trip" Disabled={isCreatingList}/>
        </div>
      </form>
    </div>
  );
};

TripForm.propTypes = {
  listName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  regionName: PropTypes.string.isRequired,
  isCreatingList: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeStartDate: PropTypes.func.isRequired,
  onChangeEndDate: PropTypes.func.isRequired,
  onChangeAutoComplete: PropTypes.func.isRequired
};

export default TripForm;
