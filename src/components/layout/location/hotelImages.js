import React, {PropTypes} from 'react';

class HotelImages extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClickHotelImage = this.onClickHotelImage.bind(this);
  }

  onClickHotelImage(e){
    e.preventDefault();
    let position = e.target.getAttribute('data-type');
    this.props.showImage(position);
  }

  render(){

    if (this.props.hotelImage.count > 40) {
      return (
        <div className="row no-gutters" id="photos">
          <div className="col-md-4">
            <a href="#" className="hover-img featureHotelImage" data-type={0} onClick={this.onClickHotelImage}>
              <img className="featureHotelImage" data-type={0}
                   src={this.props.hotelImage[0].highResolutionUrl && this.props.hotelImage[0].highResolutionUrl.length > 0 ? this.props.hotelImage[0].highResolutionUrl : this.props.hotelImage[0].url}/>
              <div className="overlay"></div>
              <i className="fa fa-plus round box-icon-small hover-icon i round"></i>
            </a>
          </div>
          <div className="col-md-8">
            <div className="row no-gutters" id="hotelPhotos">
              {
                this.props.hotelImage.map((hotelImage, index) => {
                  if (index > 0 && index < 41) {
                    return (
                      <a href="#" className="hover-img" data-type={index} onClick={this.onClickHotelImage} key={index}>
                        <img src={hotelImage.thumbnailUrl} data-type={index} data-image={hotelImage.highResolutionUrl}
                             data-name={hotelImage.name}/>
                        <div className="overlay" data-type={index}></div>
                        <i className="fa fa-plus round box-icon-small hover-icon i round" data-type={index}></i>
                      </a>
                    );
                  }
                })
              }
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<div className="row no-gutters" id="photos">
        <div className="col-md-4">
          <a href="#" className="hover-img featureHotelImage" data-type={0} onClick={this.onClickHotelImage}>
            <img className="featureHotelImage" data-type={0}
                 src={this.props.hotelImage[0].highResolutionUrl && this.props.hotelImage[0].highResolutionUrl.length > 0 ? this.props.hotelImage[0].highResolutionUrl : this.props.hotelImage[0].url}/>
            <div className="overlay"></div>
            <i className="fa fa-plus round box-icon-small hover-icon i round"></i>
          </a>
        </div>
        <div className="col-md-4">
          <a href="#" className="hover-img featureHotelImage" data-type={1} onClick={this.onClickHotelImage}>
            <img className="featureHotelImage" data-type={1}
                 src={this.props.hotelImage[1].highResolutionUrl && this.props.hotelImage[1].highResolutionUrl.length > 0 ? this.props.hotelImage[1].highResolutionUrl : this.props.hotelImage[1].url}/>
            <div className="overlay"></div>
            <i className="fa fa-plus round box-icon-small hover-icon i round"></i>
          </a>
        </div>
        <div className="col-md-4">
          <div className="row no-gutters" id="hotelPhotosAlt">
            {
              this.props.hotelImage.map((hotelImage, index) => {
                if (index > 1 && index < 22) {
                  return (
                    <a href="#" className="hover-img" data-type={index} onClick={this.onClickHotelImage} key={index}>
                      <img src={hotelImage.thumbnailUrl} data-type={index} data-image={hotelImage.highResolutionUrl}
                           data-name={hotelImage.name}/>
                      <div className="overlay" data-type={index}></div>
                      <i className="fa fa-plus round box-icon-small hover-icon i round" data-type={index}></i>
                    </a>
                  );
                }
              })
            }
          </div>
        </div>
      </div>);
    }
  }
}

HotelImages.defaultProps = {
  hotelImage: []
};

HotelImages.propTypes = {
  hotelImage: PropTypes.array,
  showImage: PropTypes.func
};

export default HotelImages;
