import React, {PropTypes} from 'react';

class LocationOverview extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    let hotelUrl = this.props.location.url + '/hotels';
    let attractionUrl = this.props.location.url  + '/attractions';
    let restaurantUrl = this.props.location.url  + '/restaurants';
    let nightlifeUrl = this.props.location.url  + '/nightlife';
    let eventUrl = this.props.location.url  + '/events';
    let reviewUrl = this.props.location.url  + '/reviews';

    let image = this.props.location.image;

    if (this.props.location.photos) {
      if (this.props.location.photos.photoList) {
        if (this.props.location.photos.photoList.length > 0) {
          image = this.props.location.photos.photoList[0].prefix + '2000x2000' + this.props.location.photos.photoList[0].suffix;
        }
      }
    }

    let style = {
      backgroundImage: 'url(' + image + ')'
    };

    if (this.props.location.regionType == 'Country')
    {
      return null;
    }
    else {

      return (
        <div className="sidebar-widget">
          <div className="row">
            <div className="col-md-12">
              <div className="twPc-divLocationWrapper">
                <a className="twPc-bg twPc-block" style={style}></a>
                <div>
                  <div className="twPc-divLocation">
                    <div className="twPc-divName">
                      <a href={this.props.location.url}>{this.props.location.regionNameLong}</a>
                    </div>
                  </div>
                  <div className="twPc-divStats">
                    <ul className="twPc-Arrange">
                      <li className="location"><a href={hotelUrl}><i
                        className="fa fa-bed user-profile-statictics-icon"/> Hotels</a></li>
                      <li className="location"><a href={attractionUrl}><i
                        className="fa fa-ticket user-profile-statictics-icon"/> Attractions</a></li>
                      <li className="location"><a href={restaurantUrl}><i
                        className="fa fa-cutlery user-profile-statictics-icon"/> Restaurants</a></li>
                      <li className="location"><a href={eventUrl}><i
                        className="fa fa-calendar-o user-profile-statictics-icon"/> Events</a></li>
                      <li className="location"><a href={reviewUrl}><i
                        className="fa fa-comment user-profile-statictics-icon"/> Reviews</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

LocationOverview.defaultProps = {
  location: {}
};

LocationOverview.propTypes = {
  location: PropTypes.object.isRequired
};

export default LocationOverview;
