import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportHotelActions from '../../actions/travelExtras/airportHotelActions';
import AirportHotelCard from '../../components/layout/cards/travelExtras/airportHotel';
import AirportHotelSearchForm from '../../components/forms/travelExtras/airportHotel';
import AirportHotelBulletPoints from '../../components/content/static/airportHotelBulletPoints';
import Loader from '../../components/loaders/contentLoader';
let moment = require('moment');
import Toastr from 'toastr';

class AirportHotels extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loadAirportHotels = this.loadAirportHotels.bind(this);
    this.state = { airport: '', showSmallHeader: false, isLoading: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadAirportHotels(this.state.airport, moment().add(1, 'days').format('YYYY-MM-DD'), moment().add(5, 'days').format('YYYY-MM-DD'), moment().add(1, 'days').format('YYYY-MM-DD'), 4, 'T20', '', 4, 'en');
  }

  loadAirportHotels(airport, arrivalDate, departDate, dropOffCarDate, collectCarDate, nights, roomType, secondRoomType, parkingDays) {
    this.setState({ airport: airport, showSmallHeader: true, isLoading: true });
    this.props.airportHotelActions.loadAirportHotels(airport, arrivalDate, departDate, dropOffCarDate, collectCarDate, nights, roomType, secondRoomType, parkingDays, 'en')
      .then(() => this.DoSomething())
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoading: false});
      });
  }

  DoSomething() {
    this.setState({isLoading: false});
  }

  render(){
    document.title = 'Airport hotels from only £37, or £67.50 including 8 days parking. Compare deals today - Triperoo';
    return (
      <div>
        <AirportHotelSearchForm contentType="airportHotels" headerTitle="Airport Hotels" subHeaderTitle="Park up, stay overnight and let the shuttle bus drop you off" airport={this.state.airport} handleFormSubmit={this.loadAirportHotels}/>
        <div className="gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                this.props.airportHotel.apI_Reply != undefined && !this.state.isLoading ?
                  this.props.airportHotel.apI_Reply.hotel.map(quote => {
                    return (<AirportHotelCard location={this.state.airport} airportHotel={quote} searchRequest={this.props.airportHotel.apI_Reply.apI_Header.request} css="col-md-3" key={quote.code} />);
                  }) : this.state.airport == '' ? <AirportHotelBulletPoints /> : <Loader showLoader={true} />
              }
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="container">
          <div className="row text-center">
            <p className="col-md-12"><small>Service provider: Holiday Extras GmbH | Aidenbachstr. 52 | 81379 München | Germany. Terms and conditions of Holiday Extras, available at <a href="http://www.holidayextras.de/images/de-hx/pdf/agb.pdf" target="_blank">http://www.holidayextras.de/images/de-hx/pdf/agb.pdf</a>, apply.</small></p>
          </div>
        </div>
      </div>
    );
  }
}

AirportHotels.defaultProps = {
  airportHotel: {},
  searchRequest: {}
};

AirportHotels.propTypes = {
  airportHotel: PropTypes.object,
  searchRequest: PropTypes.object,
  airportHotelActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    airportHotel: state.airportHotel.airportHotel ? state.airportHotel.airportHotel : {},
    searchRequest: state.airportHotel.request ? state.airportHotel.request : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    airportHotelActions: bindActionCreators(airportHotelActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportHotels);
