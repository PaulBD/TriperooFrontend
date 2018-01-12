import React, {PropTypes} from 'react';
import TriperooGoogleMap from '../../components/maps/googleMap';

class MapSidebarModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.state = { modalIsOpen: false };
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ wizardStep: 1 });
    this.props.closeModal();
  }

  render(){
    return (
      <div className="modal-dialog mapSideBar" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <h3>{this.props.text}</h3>
                <TriperooGoogleMap latitude={this.props.latitude} longitude={this.props.longitude} text={this.props.text} zoom={this.props.zoom} markerArray={this.props.markerArray} isLoading={this.props.isLoading} locationType={this.props.locationType} />
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

MapSidebarModal.defaultProps = {
  policy: '',
  longitude: 0,
  latitude: 0,
  zoom: 0,
  locationType: ''
};

MapSidebarModal.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  markerArray: PropTypes.array,
  locationType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  closeModal: PropTypes.func
};

export default MapSidebarModal;
