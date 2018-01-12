import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightActions from '../../actions/location/travelContent/flightActions';
import Loader from '../../components/loaders/globalLoader';
import ContentLoader from '../../components/loaders/contentLoader';
import Toastr from 'toastr';
import Search from '../../components/forms/searchForms/flights';
import FlightCard from '../../components/layout/cards/flights/flightCard';
import FlightFilter from '../../components/filters/flights';
let moment = require('moment');
require("moment-duration-format");

class SearchResults extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoadingResults: true
      , isLoadingPage: true
      , fromCode: this.props.fromCode
      , toCode: this.props.toCode
      , fromDate: this.props.fromDate
      , toDate: this.props.toDate
      , passengerTotal: 2
      , adultTotal: 2
      , childTotal: 0
      , infantTotal: 0
      , journeyType: this.props.journeyType
      , sort: 'quality'
      , currency: 'GBP'
      , isDirectFlights: 0
      , selectedAirlines: []
      , departureTimeFrom: '00:00'
      , departureTimeTo: '00:00'
      , returnTimeFrom: '00:00'
      , returnTimeTo: '00:00'
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.filterFlights = this.filterFlights.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.loadFlights(this.props.toCode, this.props.fromCode, this.props.fromDate, this.props.fromDate, this.props.toDate, this.props.toDate, 'en', 'en', this.state.currency, this.state.journeyType, this.state.passengerTotal, this.state.adultTotal, this.state.childTotal, this.state.infantTotal, this.state.isDirectFlights, 1, 10000, this.state.departureTimeFrom, this.state.departureTimeTo, this.state.returnTimeFrom, this.state.returnTimeTo, '00:00', '00:00', '00:00', '00:00', '00:00', '00:00',this.state.selectedAirlines, 0, 30, this.state.sort, 1);
  }

  loadFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, selectedAirlines, offset, limit, sort, asc){
    this.props.flightActions.searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimeFrom, arrivalTimeTo, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, selectedAirlines, offset, limit, sort, asc)
      .then(() => {
        this.setState({isLoadingResults: false, isLoadingPage: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingResults: false, isLoadingPage: false});
      });
  }

  updateSearch(fromCode, fromFriendly, toCode, toFriendly, fromDate, toDate, passengerTotal, adultTotal, childTotal, infantTotal, journeyType, formattedFromDate, formattedToDate) {
    this.setState({isLoadingResults: true, isLoadingPage: false, fromCode: fromCode, toCode: toCode, fromDate: formattedFromDate, toDate: formattedToDate, passengerTotal:passengerTotal, adultTotal:adultTotal, childTotal:childTotal, infantTotal:infantTotal, journeyType:journeyType});
    this.loadFlights(fromCode, toCode, fromDate, fromDate, toDate, toDate, 'en', 'en', this.state.currency, journeyType, passengerTotal, adultTotal, childTotal, infantTotal, this.state.isDirectFlights, 1, 10000, this.state.departureTimeFrom, this.state.departureTimeTo, '00:00', '00:00', this.state.returnTimeFrom, this.state.returnTimeTo, '00:00', '00:00', '00:00', '00:00', this.state.selectedAirlines, 0, 30, this.state.sort, 1);

  }

  filterFlights(sort, isDirectFlights, selectedAirlines, departureTimeFrom, departureTimeTo, returnTimeFrom, returnTimeTo) {
    this.setState({isLoadingResults: true, isLoadingPage: false, sort: sort, isDirectFlights: isDirectFlights, selectedAirlines: selectedAirlines, departureTimeFrom: departureTimeFrom, departureTimeTo: departureTimeTo, returnTimeFrom: returnTimeFrom, returnTimeTo: returnTimeTo});
    this.loadFlights(this.state.fromCode, this.state.toCode, this.state.fromDate, this.state.fromDate, this.state.toDate, this.state.toDate, 'en', 'en', 'GBP', this.state.journeyType, this.state.passengerTotal, this.state.adultTotal, this.state.childTotal, this.state.infantTotal, isDirectFlights, 1, 10000, departureTimeFrom, departureTimeTo, '00:00', '00:00', returnTimeFrom, returnTimeTo,  '00:00', '00:00', '00:00', '00:00', selectedAirlines, 0, 30, sort, 1);

  }

  render() {

    let flightContent = '';

    if (!this.state.isLoadingResults) {

      if (this.props.flights != null) {
        if (this.props.flights.data != null) {
          if (this.props.flights.data.length > 0) {
            flightContent = (
              <div className="col-md-9 flightResults">
                {
                  this.props.flights.data.map((quote, index) => {
                    return (
                      <FlightCard quote={quote} currency={this.state.currency} journeyType={this.state.journeyType}
                                  position={index} key={index}/>
                    );
                  })
                }
              </div>);
          }
          else {
            flightContent = (
              <div className="col-md-9 flightResults">
                <p>There are no results. Please change your filter criteria.</p>
              </div>);
          }
        }
        else {
          flightContent = (
            <div className="col-md-9 flightResults">
              <p>There are no results. Please change your filter criteria.</p>
            </div>);
        }
      }
      else {
        flightContent = (
          <div className="col-md-9 flightResults">
            <p>There are no results. Please change your filter criteria.</p>
          </div>);
      }
    }
    else {
      flightContent = (
        <div className="col-md-9 flightResults">
          <ContentLoader showLoader={true}/>
        </div>
      );
    }


    document.title = 'Search results for flights to ' + this.props.fromFriendly;

    let currency = 'GBP';

    switch (this.props.flights.currency) {
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
      backgroundImage: 'url(/static/img/flights2.jpg)'
    };

    if (!this.state.isLoadingPage) {

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
                  <Search fromCode={this.props.fromCode} fromFriendly={this.props.fromFriendly}
                          toCode={this.props.toCode}
                          toFriendly={this.props.toFriendly} fromDate={this.props.fromDate} toDate={this.props.toDate}
                          journeyType={this.props.journeyType}
                          updateSearch={this.updateSearch}/>
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
                    <FlightFilter filterFlights={this.filterFlights} sort={this.state.sort}
                                  isDirectFlights={this.state.isDirectFlights}
                                  departureTimeFrom={this.state.departureTimeFrom}
                                  departureTimeTo={this.state.departureTimeTo}
                                  returnTimeFrom={this.state.returnTimeFrom}
                                  returnTimeTo={this.state.returnTimeTo}
                                  airlines={this.props.flights.all_airlines_friendly}
                                  selectedAirlines={this.state.selectedAirlines}
                                  journeyType={this.state.journeyType}/>
                  </div>
                  {flightContent}
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
  flights: {},
  journeyType: 'round'
};

SearchResults.propTypes = {
  flights: PropTypes.object,
  flightActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  toCode: PropTypes.string,
  toFriendly: PropTypes.string,
  toDate: PropTypes.string,
  fromCode: PropTypes.string,
  fromFriendly: PropTypes.string,
  fromDate: PropTypes.string,
  journeyType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.flights.isFetching ? state.flights.isFetching : false,
    flights: state.flights.flights ? state.flights.flights : {},
    toCode: ownProps.location.query.toCode !== undefined ? ownProps.location.query.toCode : '',
    toFriendly: ownProps.location.query.to !== undefined ? ownProps.location.query.to : '',
    fromCode: ownProps.location.query.fromCode !== undefined ? ownProps.location.query.fromCode : '',
    fromFriendly: ownProps.location.query.from !== undefined ? ownProps.location.query.from : '',
    fromDate: ownProps.location.query.from !== undefined ? ownProps.location.query.fromDate : '',
    toDate: ownProps.location.query.from !== undefined ? ownProps.location.query.toDate : '',
    journeyType: ownProps.location.query.from !== undefined ? ownProps.location.query.journeyType : ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightActions: bindActionCreators(flightActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
