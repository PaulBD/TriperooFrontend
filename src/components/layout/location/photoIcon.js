import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';

class PhotoIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.uploadPhotos = this.uploadPhotos.bind(this);
  }

  componentDidMount() {
    $(this.refs.photo).tooltip();
  }

  uploadPhotos(e) {
    e.preventDefault();
    this.props.modalActions.openPhoto(this.props.locationId, this.props.locationName, this.props.locationNameLong, this.props.locationType);
  }

  render() {
    if (this.props.useIcon) {
      return (
        <div>
          <a ref="photo" className="fa fa-picture-o box-icon-normal round" key={this.props.locationId} href="#"
             onClick={this.uploadPhotos} data-toggle="tooltip" data-placement="top" title="Upload Photo"></a>
        </div>
      );
    }
    else {
      return (
        <a ref="photo" key={this.props.locationId} href="#" onClick={this.uploadPhotos} title="Upload Photo"><i className="fa fa-picture-o"></i> Upload</a>
      );
    }
  }
}

PhotoIcon.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: '',
  useIcon: true
};

PhotoIcon.propTypes = {
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  locationNameLong: PropTypes.string.isRequired,
  locationType: PropTypes.string.isRequired,
  modalActions: PropTypes.object.isRequired,
  selectedLocationId: PropTypes.number.isRequired,
  useIcon: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
     return {
        selectedLocationId: state.modal.locationId ? state.modal.locationId : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIcon);
