import React, {PropTypes} from 'react';

class CancellationModal extends React.Component {
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
      <div className="modal-dialog modelReviewAuthentication" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <h3>Cancellation Policy</h3>
                <p dangerouslySetInnerHTML={{__html: this.props.policy}}></p>
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

CancellationModal.defaultProps = {
  policy: ''
};

CancellationModal.propTypes = {
  policy: PropTypes.string,
  closeModal: PropTypes.func
};

export default CancellationModal;
