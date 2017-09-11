import React, {PropTypes} from 'react';
let Carousel = require('react-responsive-carousel').Carousel;

class PhotoPopup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
      return (
        <div className="modal-dialog modelReviewAuthentication" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <h4>{this.props.hotelName} Photos</h4>
                  <hr />
                </div>
              </div>
              <Carousel axis="horizontal" showArrows={true} dynamicHeight={true} showStatus={false} showThumbs={true} autoPlay={false} showIndicators={false} selectedItem={this.props.imagePosition} >
                {
                  this.props.imageList.map(photo => {
                    let url = photo.highResolutionUrl ? photo.highResolutionUrl : photo.url;
                    return (
                      <div key={url} data-name={photo.name}>
                        <img src={url}/>
                      </div>
                    );
                  })
                }
              </Carousel>
              <div className="row">
                <div className="col-md-12 text-center">
                  <hr />
                  <p><a href="#" onClick={this.closeModal}>Close</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

PhotoPopup.propTypes = {
  hotelName: PropTypes.string,
  imageList: PropTypes.array,
  imagePosition: PropTypes.number,
  closeModal: PropTypes.func
};

export default PhotoPopup;
