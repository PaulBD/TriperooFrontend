import React, {PropTypes} from 'react';
import AirportParkingSearchForm from '../../components/travelExtras/airportParking/searchForm';

class Header extends React.Component {
  constructor(props, context) {
     super(props, context);
  }

  render(){
        
    let style = {
        backgroundImage: 'url(/static/img/' + this.props.contentType + '.jpg'
    };

    return (
    <div>
      <div className="bg-holder full text-xs-center text-white holidayPage">
        <div className="bg-mask"></div>
        <div className="bg-img" style={style}></div>
        <div className="bg-front full-center">
            <div className="owl-cap">
                <h1 className="owl-cap-title fittext">{this.props.headerTitle}</h1>
                <div className="owl-cap-price">
                  <small>{this.props.subHeaderTitle}</small>
                </div>
            </div>
        </div>
      </div>
        <div className="search-tabs search-tabs-bg search-tabs-to-top">
          <div className="tabbable">
            <div className="tab-content">
              <div className="tab-pane fade in active" id="tab-1">
                  <AirportParkingSearchForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  headerTitle:  PropTypes.string.isRequired,
  subHeaderTitle:  PropTypes.string.isRequired,
  contentType:  PropTypes.string.isRequired,
  showSmallHeader: PropTypes.bool.isRequired
};

export default Header;