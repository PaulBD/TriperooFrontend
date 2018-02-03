import React, {PropTypes} from 'react';

class RestaurantPopup extends React.Component {
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

    let iframeUrl = 'https://bda.bookatable.com/?cid=UK-TRIPEROO:90780&rid=' + this.props.locationId + '&lang=en-GB&c=0';

    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <iframe src={iframeUrl} frameBorder={0} className="externalWindow"  />
          </div>
        </div>
        <div className="modal-footer text-center">
          <p className="closeText mb-0"><a href="#" onClick={this.closeModal}>Close</a></p>
        </div>
      </div>
    );
  }
}


RestaurantPopup.propTypes = {
  locationId: PropTypes.number.isRequired
};

export default RestaurantPopup;
