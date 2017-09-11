import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../../../actions/common/modalActions';
let Carousel = require('react-responsive-carousel').Carousel;

class Photos extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(position){
    this.props.modalActions.openLocationImage(this.props.photos.photoList, position);
  }

  render() {
    if (this.props.photos && this.props.photos.photoList && this.props.photos.photoList.length > 0) {
      return (
        <div>
          <Carousel axis="horizontal" onClickItem={this.onClickItem}  showArrows={true} showStatus={false} showThumbs={true} autoPlay={false} showIndicators={false} >
            {
              this.props.photos.photoList.map((photo, photoIndex) => {

                let url = photo.prefix + '400x400' + photo.suffix;

                if (photo.width == 0)
                {
                  url = photo.prefix + photo.suffix;
                }
                return (
                  <div key={photoIndex}>
                    <img src={url}/>
                  </div>
                );
              })
            }
          </Carousel>
        </div>
      );
    }
    else {
      return (
        <div>
          <Carousel axis="horizontal" onClickItem={this.onClickItem}  showArrows={true} showStatus={false} showThumbs={false} autoPlay={false} showIndicators={false} >
            <div key="temp">
              <img src="/static/img/placeholder-large-center.png"/>
            </div>
          </Carousel>
        </div>
      );
    }
  }
}

Photos.propTypes = {
  photos: PropTypes.object,
  modalActions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Photos);
