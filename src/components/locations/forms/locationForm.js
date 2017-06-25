import React, {PropTypes} from 'react';
import GoogleMaps from '../common/googleMap';

const LocationForm = ({locationName, address, description, websiteUrl, telephone, facebookUsername, twitter, instagram, tags, latitude, longitude, isUpdating, onSubmit, onChangeAddress, onChangeContact, onChangeLocation, onChangeTags, onChangeDescription, errors}) => {
  return (
    <div>
      <div className={errors && errors.length > 0 ? 'col-md-12' : 'col-md-12 hide'}>
        <div className="bg-danger form-danger">
          {errors}
        </div>
      </div>
      <form className="modalForm"  onSubmit={onSubmit}>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Location Name</label>
            <input className="form-control" type="text" placeholder="Enter Location Name" name="regionName" disabled={true} value={locationName} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Address Line 1</label>
            <input className="form-control" placeholder="Enter Address Line 1" name="field0" type="text" onChange={onChangeAddress} value={address[0]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Town / City</label>
            <input className="form-control" placeholder="Enter Town/City" type="text" name="field1" onChange={onChangeAddress} value={address[1]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>County / State / Province</label>
            <input className="form-control" type="text" placeholder="Enter County/State/Province" name="field2" onChange={onChangeAddress} value={address[2]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Country</label>
            <input className="form-control" type="text" placeholder="Enter Country" name="field3" onChange={onChangeAddress} value={address[3]} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Postcode / Zip Code</label>
            <input className="form-control" type="text" placeholder="Enter Postcode/Zip Code" name="field4" onChange={onChangeAddress} value={address[4]} />
          </div>

          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Tags</label>
            <textarea className="form-control medium"  placeholder="Seperate Tags Using ," name="tags" onChange={onChangeTags} value={tags} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Description</label>
            <textarea className="form-control large"  placeholder="Enter Description" name="description" onChange={onChangeDescription} value={description} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Website Url</label>
            <input className="form-control" type="text" placeholder="Enter Website Url" name="websiteUrl" onChange={onChangeContact} value={websiteUrl} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Telephone</label>
            <input className="form-control" placeholder="Enter Telephone" name="phone" type="text" onChange={onChangeContact} value={telephone} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Facebook Username</label>
            <input className="form-control" placeholder="Enter Facebook Username" type="text" name="facebookUsername" onChange={onChangeContact} value={facebookUsername} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Twitter Username</label>
            <input className="form-control" placeholder="Enter Twitter Username" type="text" name="twitter" onChange={onChangeContact} value={twitter} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Instagram Username</label>
            <input className="form-control" placeholder="Enter Instagram Username" type="text" name="instagram" onChange={onChangeContact} value={instagram} />
          </div>
        </div>
        <div className="col-md-12">
          <GoogleMaps latitude={latitude} longitude={longitude} text={locationName} zoom={13} />

          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Latitude</label>
            <input className="form-control" placeholder="Enter Latitude" type="text" name="latitude" onChange={onChangeLocation} value={latitude} />
          </div>
          <div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-edit input-icon labels input-icon-hightlight"></i>
            <label>Longitude</label>
            <input className="form-control" placeholder="Enter Longitude" type="text" name="longitude" onChange={onChangeLocation} value={longitude} />
          </div>
        </div>
        <div className="col-md-12 text-xs-right">
          <input className="btn btn-primary" type="submit" value="Update Details" Disabled={isUpdating}/>
        </div>
      </form>
    </div>
  );
};

LocationForm.propTypes = {
  locationName: PropTypes.string.isRequired,
  address: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  facebookUsername: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  errors: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChangeAddress: PropTypes.func.isRequired,
  onChangeContact: PropTypes.func.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  onChangeTags: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired
};

export default LocationForm;
