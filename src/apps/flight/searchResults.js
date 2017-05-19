import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as flightActions from '../../actions/location/travelContent/flightActions';
import FlightCard from './flightCard';

class SearchResults extends React.Component {
  constructor(props, context) {
      super(props, context);
  }
      
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.flightActions.searchFlights('GB', 'GBP', 'en-GB', this.props.outboundLocation, this.props.inboundLocation, '2017-04-03', '2017-04-04');
  }
  
  render(){

    console.log(this.props.flights.quotes);

    if (this.props.flights.quotes != undefined)
    {
      return (
        <div>
          <div className="container">
            <div className="row">            
              {
                this.props.flights.quotes.map(quote => {
                    return (
                      <div className="col-md-12 mb-1 flightWrapper" key={quote.quoteId}>
                        <div className="col-md-5">
                          <FlightCard carrierIds={quote.outboundLeg.carrierIds} inboundLocation={this.props.inboundLocation} outboundLocation={this.props.outboundLocation} carrierList={this.props.flights.carriers} isDirect={quote.outboundLeg.direct}/>
                        </div> 
                        <div className="col-md-5">
                          <FlightCard carrierIds={quote.inboundLeg.carrierIds} carrierList={this.props.flights.carriers} isDirect={quote.inboundLeg.direct}/>
                        </div>                   
                        <div className="col-md-2 text-xs-center">
                          <small>From</small><br />
                          <h5 className="mb-1"><strong>{this.props.flights.currencies[0].symbol}{quote.minPrice}</strong></h5>
                          <a href="#" target="_blank" className="btn btn-primary btnSearch">Select ></a>
                        </div>
                      </div>
                    );
                })
              }
            </div>
          </div>
        </div>
      );
    }
    else { 
      return null; 
    }
  }
}

SearchResults.defaultProps = {
  isFetching: false,
  flights: {},
  inboundLocation: 'MAN',
  outboundLocation: 'JFK'
};

SearchResults.propTypes = {
  flights: PropTypes.object,
  flightActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  inboundLocation: PropTypes.string.isRequired,
  outboundLocation: PropTypes.string.isRequired
};

function returnCarrierName(carrierId, carrierList)
{
  for (let index = 0; index < carrierList.length; index++) {
    if (carrierList[index].carrierId == carrierId)
    {
      return carrierList[index].name;
    }
  }
}

function returnCarrierImage(carrierId)
{
  switch(carrierId)
  {
    case 105:
      return '/static/img/airlines/29.png';
    case 838:
      return '/static/img/airlines/AF.png';
    case 852:
      return '/static/img/airlines/RA.png';
    case 857:
      return '/static/img/airlines/FI.png';
    case 881:
      return '/static/img/airlines/BA.png';
    case 1033:
      return '/static/img/airlines/EI.png';
    case 1859:
      return '/static/img/airlines/VS.png';
    case 1760:
      return '/static/img/airlines/TP.png';
    case 981:
      return '/static/img/airlines/DE.png';
    case 1324:
      return '/static/img/airlines/KL.png';
  }
}

function returnPlaceName(placeId, placeList) {
  for (let index = 0; index < placeList.length; index++) {
    if (placeList[index].placeId == placeId)
    {
      return placeList[index].name;
    }
  }
}

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