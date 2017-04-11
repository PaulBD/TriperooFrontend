import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportHotelActions from '../../actions/airportHotelActions';
import AirportHotelCard from '../../components/travelExtras/airportHotel/card';
import AirportHotelSearchForm from '../../components/travelExtras/airportHotel/searchForm';
import Header from '../../components/travelExtras/header';
import AirportHotelBulletPoints from '../../components/content/static/airportHotelBulletPoints';
import Loader from '../../components/common/loadingDots';
let moment = require('moment');

class AirportHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchForm = this.searchForm.bind(this);
    this.state = { airport: '', showSmallHeader: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Avoid the last minute rush by booking your vehicle space today and save a bundle on cheap airport parking with Triperoo. Compare deals today.';
  
    if (this.state.airport != '')
    {
      this.props.airportHotelActions.loadAiportHotels(this.state.airport, moment().add(1, 'days').format('YYYY-MM-DD'), moment().add(5, 'days').format('YYYY-MM-DD'), moment().add(1, 'days').format('YYYY-MM-DD'), 4, 'T20', '', 4, 'en');
    }
  }

  searchForm(airport, arrivalDate, departDate, flightDate, nights, roomType, secondRoomType, parkingDays) {
    this.setState({ airport: airport, showSmallHeader: true });
    this.props.airportHotelActions.loadAiportHotels(airport, arrivalDate, departDate, flightDate, nights, roomType, secondRoomType, parkingDays, 'en');
  }

  render(){
    return (
      <div>
        <Header contentType="airportHotels" headerTitle="Airport Hotels" subHeaderTitle="Park up, stay overnight and let the shuttle bus drop you off" showSmallHeader={this.state.showSmallHeader} />
        <div className="gap"></div>
        <div className="container">
          <div className="row"> 
            <AirportHotelSearchForm airport={this.state.airport} handleFormSubmit={this.searchForm}/>
          </div>
        </div>
        <div className="gap"></div>
        <div className="container">
          <div className="row">            
            {
              this.props.airportHotel.apI_Reply != undefined && !this.props.isFetching ?
                this.props.airportHotel.apI_Reply.hotel.map(quote => {
                  return (<AirportHotelCard airportHotel={quote} css="col-md-3" key={quote.code} />);
                }) : this.state.airport == '' ? <AirportHotelBulletPoints /> : <Loader showLoader={true} />
            }
          </div>
        </div>
        <div className="gap"></div>
        <div className="container">
          <div className="row text-xs-center">   
            <p><small>Service provider: Holiday Extras GmbH | Aidenbachstr. 52 | 81379 München | Germany. Terms and conditions of Holiday Extras, available at <a href="http://www.holidayextras.de/images/de-hx/pdf/agb.pdf" target="_blank">http://www.holidayextras.de/images/de-hx/pdf/agb.pdf</a>, apply.</small></p>
          </div>
        </div>
      </div>
    );
  }
}

AirportHotels.defaultProps = {
    isFetching: false,
    airportHotel: {}
};

AirportHotels.propTypes = {
  airportHotel: PropTypes.object,
  airportHotelActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {

  console.log(state.airportHotel);
  return {
    isFetching: state.airportHotel.isFetching ? state.airportHotel.isFetching : false,
    airportHotel: state.airportHotel.airportHotel ? state.airportHotel.airportHotel : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    airportHotelActions: bindActionCreators(airportHotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportHotels);