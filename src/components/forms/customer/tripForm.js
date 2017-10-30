import React, {PropTypes} from 'react';
import AutoComplete from '../common/autocomplete';
let DatePicker = require('react-datepicker');

const TripForm = ({tripName, description, startDate, endDate, regionName, tripPace, tags, isCreatingList, onSubmit, onChange, onChangeStartDate, onChangeEndDate, onChangeAutoComplete, errors}) => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
          <div className="bg-danger form-danger">
            {errors}
          </div>
        </div>
        <form className="modalForm"  onSubmit={onSubmit}>
          <div className="col-md-12">
            <div className="form-group form-group-lg form-group-icon-left">
              <AutoComplete onChangeAutoComplete={onChangeAutoComplete} searchValue={regionName} searchType="city" placeholder="Destination" cssClass="typeahead form-control" />
            </div>
            <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-pencil input-icon input-icon-hightlight"></i>
              <input className="form-control" placeholder="Enter Trip Name" name="tripName" type="text" onChange={onChange} value={tripName} />
            </div>
            <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon input-icon-hightlight"></i>
              <textarea className="form-control large" placeholder="Enter Description" type="text" name="description" onChange={onChange} value={description} rows="6" />
            </div>
          </div>
          <div className="col-md-12">
            <p>Activities (optional):</p>
            <div className="form-group form-group-lg form-group-icon-left">
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-culture" name="tags" value="culture" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('culture')} />
                <span className="custom-control-description">Culture</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-outdoors" name="tags" value="outdoors" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('outdoors')} />
                <span className="custom-control-description">Outdoors</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-relaxing" name="tags" value="relaxing" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('relaxing')}/>
                <span className="custom-control-description">Relaxing</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-romantic" name="tags" value="romantic" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('romantic')}/>
                <span className="custom-control-description">Romantic</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-beaches" name="tags" value="beaches" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('beaches')}/>
                <span className="custom-control-description">Beaches</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-historic" name="tags" value="historic" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('historic')}/>
                <span className="custom-control-description">Historic</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-museums" name="tags" value="museums" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('museums')}/>
                <span className="custom-control-description">Museums</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-shopping" name="tags" value="shopping" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('shopping')}/>
                <span className="custom-control-description">Shopping</span>
              </label>
              <label className="custom-control custom-checkbox col-md-3">
                <span className="custom-control-indicator"></span>
                <input id="tags-wildlife" name="tags" value="wildlife" type="checkbox" className="custom-conrol-input checkCustom" onChange={onChange} checked={tags.includes('wildlife')}/>
                <span className="custom-control-description">Wildlife</span>
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <p>Please select the type of trip:</p>
            <div className="form-group form-group-lg form-group-icon-left">
              <label className="custom-control custom-radio">
                <span className="custom-control-indicator"></span>
                <input id="tripPace-fast" name="tripPace" value="easy going" radioGroup="tripPace" type="radio" className="custom-conrol-input radioCustom" onChange={onChange} />
                <span className="custom-control-description">Slow & Easy</span>
              </label>
              <label className="custom-control custom-radio">
                <span className="custom-control-indicator"></span>
                <input id="tripPace-fast" name="tripPace" value="balanced" radioGroup="tripPace" type="radio" className="custom-conrol-input radioCustom" onChange={onChange} />
                <span className="custom-control-description">Balanced</span>
              </label>
              <label className="custom-control custom-radio">
                <span className="custom-control-indicator"></span>
                <input id="tripPace-fast" name="tripPace" value="fast paced" radioGroup="tripPace" type="radio" className="custom-conrol-input radioCustom" onChange={onChange} />
                <span className="custom-control-description">Fast Paced</span>
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 col-6">
                <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                  <DatePicker name="startDate" dateFormat="DD/MM/YYYY"  selected={startDate} onChange={onChangeStartDate} className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-hightlight"></i>
                  <DatePicker name="endDate" dateFormat="DD/MM/YYYY"  selected={endDate} onChange={onChangeEndDate} className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <input className="btn btn-primary" type="submit" value="Create My Trip" Disabled={isCreatingList}/>
          </div>
        </form>
      </div>
    </div>
  );
};

TripForm.propTypes = {
  tripName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  regionName: PropTypes.string.isRequired,
  tripPace: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  isCreatingList: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeStartDate: PropTypes.func.isRequired,
  onChangeEndDate: PropTypes.func.isRequired,
  onChangeAutoComplete: PropTypes.func.isRequired
};

export default TripForm;
