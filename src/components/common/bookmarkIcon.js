import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';

class Bookmark extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bookmarkLocation = this.bookmarkLocation.bind(this);
  }

  bookmarkLocation(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(this.props.locationId, this.props.locationName, this.props.locationType);
  }

  render(){
    return (
        <div>
          <a className="fa fa-bookmark box-icon-normal round" key={this.props.locationId} href="#" onClick={this.bookmarkLocation} title="Bookmark"></a>
        </div>
      );
    }
}

Bookmark.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: ''
};

Bookmark.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
