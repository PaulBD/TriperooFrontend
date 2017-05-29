import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';
import Toastr from 'toastr';

class Bookmark extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bookmarkLocation = this.bookmarkLocation.bind(this);
  }

  bookmarkLocation(e) {
    e.preventDefault();
    this.props.modalActions.openBookmark(this.props.locationId, this.props.locationNameLong, this.props.locationName, this.props.locationType, this.props.locationImage, this.props.locationUrl, this.props.removeBookmark);
  }

  render(){
    let cssClass = "fa fa-heart-o box-icon-normal round";

    if (this.props.removeBookmark) {
      cssClass = "fa fa-minus-circle box-icon-normal round";
    }

    return (
        <div>
          <a className={cssClass} key={this.props.locationId} href="#" onClick={this.bookmarkLocation} title="Bookmark"></a>
        </div>
      );
    }
}

Bookmark.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: '',
  removeBookmark: false
};

Bookmark.propTypes = {
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationType: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
  modalActions: PropTypes.object.isRequired,
  selectedLocationId: PropTypes.number.isRequired,
  removeBookmark: PropTypes.bool
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
