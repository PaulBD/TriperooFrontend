import React, {PropTypes} from 'react';
let ReactModal = require('react-modal');
import ReviewModal from '../reviews/reviewPopup';
import QuestionModal from '../questions/questionPopup';
import QuestionAnswerModal from '../questions/answerPopup';
import LoginModal from '../customer/authentication/login';
import SignupModal from '../customer/authentication/register';
import LocationModal from '../locations/editLocation';
import LocationImageModal from '../locations/common/photoPopup';
import BookmarkLocationModal from '../locations/bookmarkLocation';

const customStyles = {
  overlay : {
    position                  : 'fixed',
    top                       : 0,
    left                      : 0,
    right                     : 0,
    bottom                    : 0,
    backgroundColor           : 'rgba(0, 0, 0, 0.75)',
    zIndex                    : 1040
  },
  content : {
    position                   : 'absolute',
    top                        : '10%',
    left                       : '35%',
    right                      : '35%',
    background                 : '#fff',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '0px',
    borderRadius               : '5px',
    width                      : '30%'

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
        modal = (<ReviewModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} />);
        break;
      case "Question":
        modal = (<QuestionModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} />);
        break;
      case "QuestionAnswer":
        modal = (<QuestionAnswerModal question={this.props.modalContent.question} hasPosted={false} closeModal={this.props.closeModal} questionReference={this.props.modalContent.questionReference} />);
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
        modal = (<p>Photo</p>);
        break;
      case "Location":
        modal = (<LocationModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} location={this.props.modalContent.location} />);
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
