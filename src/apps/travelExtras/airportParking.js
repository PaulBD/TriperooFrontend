import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportParkingActions from '../../actions/travelExtras/airportParkingActions';
import AirportParkingCard from '../../components/layout/cards/travelExtras/airportParking';
import AirportParkingSearchForm from '../../components/forms/travelExtras/airportParking';
import AirportParkingBulletPoints from '../../components/content/static/airportParkingBulletPoints';
import Loader from '../../components/loaders/contentLoader';
let moment = require('moment');
import Toastr from 'toastr';

class AirportParking extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loadAirportParking = this.loadAirportParking.bind(this);
    this.state = { airport: '', defaultAirport: 'LGW', showSmallHeader: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.loadAirportParking(this.state.airport, moment().add(1, 'days').format('YYYY-MM-DD'), '00:30', moment().add(7, 'days').format('YYYY-MM-DD'), '22:00', 'en');
  }

  loadAirportParking(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime, language) {
    this.setState({ airport: airport, showSmallHeader: true, isLoading: true });
    this.props.airportParkingActions.loadAirportParking(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime, language)
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
    document.title = 'Quality, secured airport parking from only £5.25 per day or £41.99 per week. Compare deals today - Triperoo';
    return (
      <div>
        <AirportParkingSearchForm airport={this.state.defaultAirport} handleFormSubmit={this.loadAirportParking} contentType="airportParking" headerTitle="Airport Parking" subHeaderTitle="Pre-book your airport parking and save up to 60%"/>
        <div className="gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                this.props.airportParking.apI_Reply != undefined && !this.props.isFetching ?
                  this.props.airportParking.apI_Reply.carPark.map(quote => {
                    return (<AirportParkingCard location={this.state.airport} airportParking={quote} searchRequest={this.props.airportParking.apI_Reply.apI_Header.request} css="col-md-3" key={quote.code} />);
                  }) : this.state.airport == '' ? <AirportParkingBulletPoints /> : <Loader showLoader={true} />
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

AirportParking.defaultProps = {
    isFetching: false,
    airportParking: {},
    searchRequest: {}
};

AirportParking.propTypes = {
  airportParking: PropTypes.object,
  searchRequest: PropTypes.object,
  airportParkingActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.airportParking.isFetching ? state.airportParking.isFetching : false,
    airportParking: state.airportParking.airportParking ? state.airportParking.airportParking : {},
    searchRequest: state.airportParking.request ? state.airportParking.request : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    airportParkingActions: bindActionCreators(airportParkingActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportParking);
