import React, {PropTypes} from 'react';
let ReactModal = require('react-modal');
import ReviewModal from '../reviews/reviewPopup';
import QuestionModal from '../questions/questionPopup';
import QuestionAnswerModal from '../questions/answerPopup';
import LoginModal from '../customer/authentication/login';
import SignupModal from '../customer/authentication/register';
import LocationImageModal from '../locations/common/photoPopup';
import LocationUploadImageModal from '../locations/common/uploadPhotoPopup';
import BookmarkLocationModal from '../locations/bookmarkLocation';

let customStyles = {
  overlay : {
    position                  : 'fixed',
    top                       : 0,
    left                      : 0,
    right                     : 0,
    bottom                    : 0,
    backgroundColor           : 'rgba(0, 0, 0, 0.75)',
    zIndex                    : 1040
  }
};

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.openModal = this.openModal.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModalWindow(e) {
    e.preventDefault();
    this.props.closeModal(true);
    this.setState({modalIsOpen: false});
  }

  render(){

    let modal = (<p>Loading</p>);

    switch(this.props.modalType)
    {
      case "Review":
        modal = (<ReviewModal hasPosted={false} isEdit={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} />);
        break;
      case "EditReview":
        modal = (<ReviewModal hasPosted={false} isEdit={true} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} reference={this.props.modalContent.reference} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} locationAddress={this.props.modalContent.locationAddress} starRating={this.props.modalContent.starRating} comment={this.props.modalContent.comment} tags={this.props.modalContent.tags} />);
        break;
      case "Question":
        modal = (<QuestionModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} />);
        break;
      case "QuestionAnswer":
        modal = (<QuestionAnswerModal question={this.props.modalContent.question} hasPosted={false} closeModal={this.props.closeModal} questionReference={this.props.modalContent.questionReference} locationId={this.props.modalContent.locationId} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} />);
        break;
      case "Login":
        modal = (<LoginModal hasPosted={false} closeModal={this.props.closeModal} />);
        break;
      case "Signup":
        modal = (<SignupModal hasPosted={false} closeModal={this.props.closeModal} />);
        break;
      case "Bookmark":
        modal = (<BookmarkLocationModal hasPosted={false} closeModal={this.props.closeModal} parentLocationId={this.props.modalContent.parentLocationId} parentLocationName={this.props.modalContent.parentLocationName} parentLocationNameLong={this.props.modalContent.parentLocationNameLong} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} locationUrl={this.props.modalContent.locationUrl} locationImage={this.props.modalContent.locationImage} locationNameLong={this.props.modalContent.locationNameLong} removeBookmark={this.props.modalContent.removeBookmark}/>);
        break;
      case "Photo":
        modal = (<LocationUploadImageModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} />);
        break;
      case "LocationImage":
        modal = (<LocationImageModal hasPosted={false} closeModal={this.props.closeModal} imageList={this.props.modalContent.imageList} imagePosition={this.props.modalContent.imagePosition} />);
        break;
    }

    return (
      <ReactModal style={customStyles} isOpen={this.props.modalIsOpen} onRequestClose={this.closeModalWindow} contentLabel={this.props.modalName} shouldCloseOnOverlayClick={true} className="Modal"  >
          {modal}
      </ReactModal>
    );
  }
}

Modal.defaultProps = {
  modalName: '',
  modalIsOpen: false,
  modalType: '',
  modalContent: {}
};

Modal.propTypes = {
  modalName: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  modalContent: PropTypes.object,
  closeModal: PropTypes.func
};


export default Modal;
