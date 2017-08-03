import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';

class PhotoIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.uploadPhotos = this.uploadPhotos.bind(this);
  }

  uploadPhotos(e) {
    e.preventDefault();
    this.props.modalActions.openPhoto(this.props.locationId, this.props.locationName, this.props.locationType);
  }

  render(){
    return (
        <div>
          <a className="fa fa-picture-o box-icon-normal round" key={this.props.locationId} href="#" onClick={this.uploadPhotos} title="Upload Photos"></a>
        </div>
      );
    }
}

PhotoIcon.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: ''
};

PhotoIcon.propTypes = {
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
  locationType: PropTypes.string.isRequired,
  modalActions: PropTypes.object.isRequired,
  selectedLocationId: PropTypes.number.isRequired
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
