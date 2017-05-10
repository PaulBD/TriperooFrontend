import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as globalActions from '../../actions/globalActions';

class ReviewIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openPopup = this.openPopup.bind(this);
  }

  openPopup(e) {
    e.preventDefault();
        this.props.globalActions.openReviewModel(this.props.locationId);
  }

  render(){
    return (
        <div>
          <a className="fa fa-comments box-icon-normal round" key={this.props.locationId} href="#" onClick={this.openPopup} data-toggle="modal" data-target="#reviewModel" title="Review"></a>
        </div>    
      );
    }
}

ReviewIcon.defaultProps = {
  locationId: 0
};

ReviewIcon.propTypes = {
  locationId: PropTypes.number.isRequired,
  selectedLocationId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
     return {
        selectedLocationId: state.global.locationId ? state.global.locationId : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    globalActions: bindActionCreators(globalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewIcon);