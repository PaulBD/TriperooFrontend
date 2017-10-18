import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightActions from '../../actions/location/travelContent/flightActions';
import Loader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';
import Search from '../../components/forms/searchForms/flights';
import FlightCard from '../../components/layout/cards/flights/flightCard';
import FlightFilter from '../../components/filters/flights';
let moment = require('moment');
require("moment-duration-format");

class SearchResults extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoadingResults: true };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadFlights('LHR', 'EWR', '09/08/2017', '09/08/2017', '21/08/2017', '21/08/2017', 'en', 'en', 'GBP', 'round', 2, 2, 0, 0, 1, 1, 10000, '00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00', 0, 30, 'price', 1);
  }

  loadFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc){
    this.props.flightActions.searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc)
      .then(() => {
        this.setState({isLoadingResults: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingResults: false});
      });
  }

  render(){

    if (!this.state.isLoadingResults)
    {
      document.title = 'Search results for flights to xxx';

      let currency = 'GBP';

      switch (this.props.flights.currency)
      {
        case 'GBP':
          currency = '£';
          break;
        case 'EUR':
          currency = '€';
          break;
        case 'USD':
          currency = '$';
          break;
      }

      let i = 0;

      let style = {
        backgroundImage: 'url(/static/img/flight.jpg)'
      };

      return (
        <div>
          <div className="top-area show-onload infoPage">
            <div className="bg-holder full text-white">
              <div className="bg-mask"></div>
              <div className="bg-img" style={style}></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/flights">Flights</a></li>
                      <li className="breadcrumb-item active">Search Results</li>
                    </ol>
                    <h1>Flights</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row greyBg">
            <div className="container">
              <div className="row ">
                <div className="gap gap-mini"></div>
                <div className="col-md-12">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 sideBar">
                    <FlightFilter />
                  </div>
                  <div className="col-md-9 flightResults">
                    <div className="gap gap-small"></div>
                    {
                      this.props.flights.data.map(quote => {
                        i += 1;
                        return (
                          <FlightCard quote={quote} currency={currency} position={i} />
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<Loader/>);
    }
  }
}

SearchResults.defaultProps = {
  isFetching: false,
  flights: {}
};

SearchResults.propTypes = {
  flights: PropTypes.object,
  flightActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.flights.isFetching ? state.flights.isFetching : false,
    flights: state.flights.flights ? state.flights.flights : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightActions: bindActionCreators(flightActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
