import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportParkingActions from '../../actions/airportParkingActions';
import AirportParkingCard from '../../components/travelExtras/airportParking/card';
import AirportParkingSearchForm from '../../components/travelExtras/airportParking/searchForm';
import Header from '../../components/travelExtras/header';
import AirportParkingBulletPoints from '../../components/content/static/airportParkingBulletPoints';
import Loader from '../../components/common/loadingDots';
let moment = require('moment');

class AirportParking extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchForm = this.searchForm.bind(this);
    this.state = { airport: '', defaultAirport: 'LGW', showSmallHeader: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Avoid the last minute rush by booking your vehicle space today and save a bundle on cheap airport parking with Triperoo. Compare deals today.';
  
    if (this.state.airport != '')
    {
      this.props.airportParkingActions.loadAiportParking(this.state.airport, moment().add(1, 'days').format('YYYY-MM-DD'), '00:30', moment().add(7, 'days').format('YYYY-MM-DD'), '22:00', 'en');
    }
  }

  searchForm(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime) {
    if (airport != '')
    {
      this.setState({ airport: airport, showSmallHeader: true });
      this.props.airportParkingActions.loadAiportParking(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime, 'en');
    }
  }

  render(){
    return (
      <div>
        <Header contentType="airportParking" headerTitle="Airport Parking" subHeaderTitle="Pre-book your airport parking and save up to 60%" showSmallHeader={this.state.showSmallHeader} />
        <div className="gap"></div>
        <div className="container">
          <div className="row"> 
            <AirportParkingSearchForm airport={this.state.defaultAirport} handleFormSubmit={this.searchForm}/>
          </div>
        </div>
        <div className="gap"></div>
        <div className="container">
          <div className="row">            
            {
              this.props.airportParking.apI_Reply != undefined && !this.props.isFetching ?
                this.props.airportParking.apI_Reply.carPark.map(quote => {
                  return (<AirportParkingCard location={this.state.airport} airportParking={quote} searchRequest={this.props.airportParking.apI_Reply.apI_Header.request} css="col-md-3" key={quote.code} />);
                }) : this.state.airport == '' ? <AirportParkingBulletPoints /> : <Loader showLoader={true} />
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