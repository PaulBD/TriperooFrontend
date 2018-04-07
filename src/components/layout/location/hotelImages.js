import React, {PropTypes} from 'react';
import Gallery from 'react-grid-gallery';
import Slider from 'react-slick';

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

    let newImages = [];

    for(var i = 0; i < this.props.hotelImage.length; i++)
    {
      newImages.push({ src: this.props.hotelImage[i], thumbnail: this.props.hotelImage[i], isSelected: false, thumbnailWidth: 200, thumbnailHeight:100})
    }

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      slidesPerRow: 4,
      variableWidth: false,
      variableHeight: false,
      adaptiveHeight: false,
      rows: 2
    };

    return(<Gallery images={newImages} enableImageSelection={false} maxRows={2}/>);
   /* return(<Slider {...settings}>
      {
        this.props.hotelImage.map((image, index) => {
          return (
            <div><img src={image} /></div>
          );
        })
      }
    </Slider>);
    */
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
