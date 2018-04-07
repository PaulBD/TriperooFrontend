import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../actions/common/modalActions';

class ReviewIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.writeReview = this.writeReview.bind(this);
  }

  componentDidMount() {
    $(this.refs.review).tooltip();
  }

  writeReview(e) {
    e.preventDefault();
    this.props.modalActions.openReview(this.props.locationId, this.props.locationName, this.props.locationType);
  }

  render() {
    if (this.props.useIcon) {
      return (
        <div>
          <a ref="review" className="fa fa-comments box-icon-normal round" key={this.props.locationId} href="#"
             onClick={this.writeReview} data-toggle="tooltip" data-placement="top" title="Write Review"></a>
        </div>
      );
    }
    else {
      return (
          <a ref="review" key={this.props.locationId} href="#"
             onClick={this.writeReview} title="Write Review"><i className="fa fa-comments"></i> Review</a>
      );
    }
  }
}

ReviewIcon.defaultProps = {
  locationId: 0,
  locationName: '',
  locationType: '',
  useIcon: true
};

ReviewIcon.propTypes = {
  locationId: PropTypes.number.isRequired,
  locationName: PropTypes.string.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(ReviewIcon);
