import React, {PropTypes} from 'react';
let ReactModal = require('react-modal');
import ReviewModal from './reviewPopup';
import QuestionModal from './questionPopup';
import QuestionAnswerModal from './answerPopup';
import LoginModal from './loginPopup';
import SignupModal from './registerPopup';
import LocationImageModal from './photoPopup';
import HotelImageModal from './hotelPhotoPopup';
import LocationUploadImageModal from './uploadPhotoPopup';
import BookmarkLocationModal from '../forms/customer/addToTrip';
import VisitLocationModal from '../forms/customer/visit';
import CancellationModal from './cancellationPolicy';
import MapSidebarModal from './mapPopup';
import CategoryModal from './categoryPopup';
import FacebookModal from './facebookPopup';
import CancelHotelModal from './cancelHotelPopup';
import RestaurantModal from './restaurantPopup';

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
    let cssClass = "Modal";

    switch(this.props.modalType)
    {
      case "Review":
        modal = (<ReviewModal hasPosted={false} isEdit={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} currentUserId={this.props.modalContent.currentUserId} />);
        break;
      case "EditReview":
        modal = (<ReviewModal hasPosted={false} isEdit={true} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} reference={this.props.modalContent.reference} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} locationAddress={this.props.modalContent.locationAddress} starRating={this.props.modalContent.starRating} comment={this.props.modalContent.comment} tags={this.props.modalContent.tags} currentUserId={this.props.modalContent.currentUserId} />);
        break;
      case "Question":
        modal = (<QuestionModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} parentLocationId={this.props.modalContent.parentLocationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} />);
        break;
      case "QuestionAnswer":
        modal = (<QuestionAnswerModal question={this.props.modalContent.question} hasPosted={false} closeModal={this.props.closeModal} questionReference={this.props.modalContent.questionReference} locationId={this.props.modalContent.locationId} parentLocationId={this.props.modalContent.parentLocationId} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} />);
        break;
      case "Login":
        cssClass = "Modal LoginModal";
        modal = (<LoginModal hasPosted={false} closeModal={this.props.closeModal} />);
        break;
      case "Signup":
        cssClass = "Modal SignupModal";
        modal = (<SignupModal hasPosted={false} closeModal={this.props.closeModal} />);
        break;
      case "Bookmark":
        cssClass = "CategoryModel";
        modal = (<BookmarkLocationModal hasPosted={false} closeModal={this.props.closeModal} parentLocationId={this.props.modalContent.parentLocationId} parentLocationName={this.props.modalContent.parentLocationName} parentLocationNameLong={this.props.modalContent.parentLocationNameLong} parentLocationType={this.props.modalContent.parentLocationType} parentLocationImage={this.props.modalContent.parentLocationImage} parentLocationUrl={this.props.modalContent.parentLocationUrl} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} locationUrl={this.props.modalContent.locationUrl} locationLength={this.props.modalContent.locationLength} locationImage={this.props.modalContent.locationImage} locationNameLong={this.props.modalContent.locationNameLong} removeBookmark={this.props.modalContent.removeBookmark} latitude={this.props.modalContent.latitude} longitude={this.props.modalContent.longitude} price={this.props.modalContent.price} duration={this.props.modalContent.duration} bookingUrl={this.props.modalContent.bookingUrl}/>);
        break;
      case "Visit":
        modal = (<VisitLocationModal hasPosted={false} closeModal={this.props.closeModal} parentLocationId={this.props.modalContent.parentLocationId} parentLocationName={this.props.modalContent.parentLocationName} parentLocationNameLong={this.props.modalContent.parentLocationNameLong} parentLocationImage={this.props.modalContent.parentLocationImage} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationType={this.props.modalContent.locationType} locationUrl={this.props.modalContent.locationUrl} locationImage={this.props.modalContent.locationImage} locationNameLong={this.props.modalContent.locationNameLong} removeBookmark={this.props.modalContent.removeBookmark} latitude={this.props.modalContent.latitude} longitude={this.props.modalContent.longitude}/>);
        break;
      case "Photo":
        modal = (<LocationUploadImageModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} locationName={this.props.modalContent.locationName} locationNameLong={this.props.modalContent.locationNameLong} locationType={this.props.modalContent.locationType} />);
        break;
      case "LocationImage":
        cssClass = "Modal LocationImageModal";
        modal = (<LocationImageModal hasPosted={false} closeModal={this.props.closeModal} imageList={this.props.modalContent.imageList} imagePosition={this.props.modalContent.imagePosition} />);
        break;
      case "HotelImage":
        cssClass = "PhotoModel";
        modal = (<HotelImageModal hasPosted={false} closeModal={this.props.closeModal} imageList={this.props.modalContent.imageList} imagePosition={this.props.modalContent.imagePosition} hotelName={this.props.modalContent.hotelName}/>);
        break;
      case "CancellationPolicy":
        modal = (<CancellationModal hasPosted={false} closeModal={this.props.closeModal} policy={this.props.modalContent.policy} />);
        break;
      case "MapSidebarModal":
        cssClass = "MapModel";
        modal = (<MapSidebarModal hasPosted={false} closeModal={this.props.closeModal} policy={this.props.modalContent.policy} longitude={this.props.modalContent.longitude} latitude={this.props.modalContent.latitude} text={this.props.modalContent.text} zoom={this.props.modalContent.zoom} markerArray={this.props.modalContent.markerArray} locationType={this.props.modalContent.locationType} />);
        break;
      case "CategoryModal":
        cssClass = "CategoryModel";
        modal = (<CategoryModal hasPosted={false} closeModal={this.props.closeModal} contentType={this.props.modalContent.contentType} locationId={this.props.modalContent.locationId} searchName={this.props.modalContent.searchName} pageSize={this.props.modalContent.pageSize} pageNumber={this.props.modalContent.pageNumber} categories={this.props.modalContent.categories} selectedCategories={this.props.modalContent.selectedCategories} />);
        break;
      case "ChangeCategories":
        return null;
      case "FacebookModal":
        cssClass = "Modal FacebookModal";
        modal = (<FacebookModal hasPosted={false} closeModal={this.props.closeModal} facebookResponse={this.props.modalContent.facebookResponse} />);
        break;
      case "CancelHotelModal":
        cssClass = "Modal FacebookModal";
        modal = (<CancelHotelModal hasPosted={false} closeModal={this.props.closeModal} hotelName={this.props.modalContent.hotelName} itineryId={this.props.modalContent.itineryId} confirmationId={this.props.modalContent.confirmationId}/>);
        break;
      case "RestaurantModal":
        cssClass = "Modal RestaurantPopupModal";
        modal = (<RestaurantModal hasPosted={false} closeModal={this.props.closeModal} locationId={this.props.modalContent.locationId} />);
        break;
    }

    return (
      <ReactModal style={customStyles} isOpen={this.props.modalIsOpen} onRequestClose={this.closeModalWindow} contentLabel={this.props.modalName} shouldCloseOnOverlayClick={true} className={cssClass}  >
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
