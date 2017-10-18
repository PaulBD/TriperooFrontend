import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';

class MapSideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openMap = this.openMap.bind(this);
  }

  openMap(e) {
    e.preventDefault();
    this.props.modalActions.openMapSideBar(this.props.longitude, this.props.latitude, this.props.text, this.props.zoom, this.props.markerArray, this.props.locationType);
  }

  render() {

    if (!this.props.isLoading)
    {
      return (
        <a href="#" onClick={this.openMap}>
          <div className="mapBackground mb-4">
            <span className="btn btn-primary">View Map</span>
          </div>
        </a>
      );
    }
    else {
      return null;
    }
  }
}

MapSideBar.defaultProps = {
  isLoading: false
};

MapSideBar.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  markerArray: PropTypes.array,
  locationType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  modalActions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapSideBar);

