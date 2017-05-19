import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/common/modalActions';

class ReviewIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.writeReview = this.writeReview.bind(this);
  }

  writeReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(this.props.locationId, this.props.locationName, this.props.locationType);
  }

  render(){
    return (
        <div>
          <a className="fa fa-comments box-icon-normal round" key={this.props.locationId} href="#" onClick={this.writeReview} data-toggle="modal" data-target="#reviewModel" title="Review"></a>
        </div>
      );
    }
}

ReviewIcon.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: ''
};

ReviewIcon.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(ReviewIcon);
