import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/customer/userActions';
let moment = require('moment');

class VisitLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      wizardStep: 'Loading'
    };
  }

  componentWillMount() {


    this.recordVisit();
  }

  recordVisit() {
    const visit = {
      "regionID": this.props.locationId,
      "subClass": this.props.locationType,
      "regionName": this.props.locationName,
      "regionNameLong": this.props.locationNameLong,
      "image": this.props.locationImage,
      "url": this.props.locationUrl,
      "latitude": this.props.latitude,
      "longitude": this.props.longitude,
      "id" : 1,
      "dateCreated": moment().format('YYYY-MM-DD')
    };

    this.props.userActions.postVisit(visit)
      .then(() => {
        this.setState({wizardStep: 'Completed'});
      })
      .catch(error => {
        this.setState({wizardStep: 'Error'});
      });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render(){
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <h3>Visit Recorded</h3>
                <hr />
                <p>Your visit to {this.props.locationName} has been recorded. This will now show up on your passport.</p>
              </div>
            </div>
            <div className={this.state.wizardStep == "Loading" ? "row" : "hide"}>
              <div className="col-md-12">
                Loading...
              </div>
            </div>
            </div>
            <div className="modal-footer text-center">
              <a href="#" onClick={this.closeModal}>Close</a>
            </div>
          </div>
        </div>
      );
  }
}

VisitLocation.defaultProps = {
  locationId: 0,
  locationName: '',
  isSending: false,
  hasPosted: false,
  tripList: []
};

VisitLocation.propTypes = {
  parentLocationId: PropTypes.number,
  parentLocationName: PropTypes.string,
  parentLocationNameLong: PropTypes.string,
  parentLocationImage: PropTypes.string,
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  locationType: PropTypes.string,
  locationNameLong: PropTypes.string,
  locationImage: PropTypes.string,
  locationUrl: PropTypes.string,
  userActions: PropTypes.object.isRequired,
  isSending: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  customerReference: PropTypes.string,
  hasPosted: PropTypes.bool,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  closeModal: PropTypes.func,
  removeBookmark: PropTypes.bool,
  tripList: PropTypes.array
};

function mapStateToProps(state, ownProps) {

  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};
  return {
    isSending: state.user.isFetching,
    errorMessage: state.user.errorMessage,
    tripList: state.user.trips ? state.user.trips : [],
    customerReference: user.userId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitLocation);
