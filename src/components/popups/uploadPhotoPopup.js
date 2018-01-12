import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/location/locationActions';
import * as photoActions from '../../actions/customer/photoActions';
import AutoComplete from '../forms/common/autocomplete';
import Dropzone from 'react-dropzone';
import Toastr from 'toastr';

class UploadPhotoPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.onChangeAutoComplete = this.onChangeAutoComplete.bind(this);
    this.state = { isPostingPhoto: false, wizardStep: 1, searchName: this.props.locationNameLong, searchId: 0, searchType: '' };
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  uploadFiles(files) {
    this.setState({isPostingPhoto: true, wizardStep: 2});

    let locationId = this.props.locationId;

    if (locationId == 0) {
      locationId = this.state.searchId;
    }

    this.props.locationActions.uploadPhotos(locationId, files)
      .then(() => {
        let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};
        this.props.photoActions.getUserPhotos(user.userId);
        this.setState({wizardStep: 3});
        this.setState({isPostingPhoto: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({wizardStep: 3});
        this.setState({isPostingPhoto: false});
      });
  }

  onChangeAutoComplete(city, cityId, cityUrl, dataType) {
    this.setState({ searchName: city, searchId: cityId, searchType: dataType, wizardStep: 2 });
  }

  render() {
    return (
      <div className="modal-dialog modelReviewAuthentication" role="document">
        <div className="modal-content">
          <div className={this.state.wizardStep == 1 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h4>Upload your photo</h4>
                <hr />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group form-group-lg form-group-icon-left">
                <AutoComplete isAppSearch={false} onChangeAutoComplete={this.onChangeAutoComplete}  searchType="all" placeholder="Tag a location with your photo (optional)" cssClass="typeahead form-control" searchValue={this.state.searchName} />
              </div>
            </div>
            <div className="dropzoneWrapper">
              <Dropzone onDrop={this.uploadFiles} className="dropzone" multiple={false} accept="image/jpeg, image/png">
                <p>Try dropping some files here, or click to select files to upload.</p>
                <p>Only *.jpeg and *.png images will be accepted.</p>
              </Dropzone>
            </div>
          </div>
          <div className={this.state.wizardStep == 2 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h4>Upload your photo</h4>
                <hr />
              </div>
            </div>
            <div className="dropzoneWrapper">
              <div className="dropzone">
                <p>Please wait whilst we upload your image.</p>
                <p>This may take a few seconds.</p>
              </div>
            </div>
          </div>
          <div className={this.state.wizardStep == 3 ? "modal-body" : "modal-body hide"}>
            <div className="row">
              <div className="col-md-12">
                <h3>Thanks for the Upload</h3>
                <p>Thank you for adding your photo. Please click <a href="#" onClick={this.closeModal}>here</a> to close the window.</p>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <p className="closeText mb-0"><a href="#" onClick={this.closeModal}>Close</a></p>
          </div>
        </div>
      </div>
    );
  }
}

UploadPhotoPopup.propTypes = {
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  locationNameLong: PropTypes.string.isRequired,
  locationType: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  locationActions: PropTypes.object,
  photoActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  hasPosted: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    isSending: state.location.isFetching,
    errorMessage: state.location.errorMessage,
    hasPosted: state.location.hasPosted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    photoActions: bindActionCreators(photoActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoPopup);

