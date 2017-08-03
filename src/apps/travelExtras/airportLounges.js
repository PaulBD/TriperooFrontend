import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportLoungeActions from '../../actions/travelExtras/airportLoungeActions';
import AirportLoungeCard from '../../components/layout/cards/travelExtras/airportLounge';
import AirportLoungeSearchForm from '../../components/forms/travelExtras/airportLounge';
import AirportLoungeBulletPoints from '../../components/content/static/airportLoungeBulletPoints';
import Loader from '../../components/loaders/contentLoader';
let moment = require('moment');
import Toastr from 'toastr';

class AirportLounge extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loadAirportLounges = this.loadAirportLounges.bind(this);
    this.state = { airport: '', defaultAirport: 'LGW', arrivalTime: '09:00', flightTime: '12:00', showSmallHeader: false, adults: 2, children: 0, infants: 0 };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.loadAirportLounges(this.state.airport, moment().add(1, 'days').format('YYYY-MM-DD'), moment().add(5, 'days').format('YYYY-MM-DD'), moment().add(1, 'days').format('YYYY-MM-DD'), 4, 'T20', '', 4, 'en');
  }

  loadAirportLounges(airport, arrivalDate, arrivalTime, flightTime, adultCount, childCount, infantCount) {
    this.setState({ airport: airport, showSmallHeader: true, isLoading: true });
    this.props.airportLoungeActions.loadAirportLounges(airport, arrivalDate, arrivalTime, flightTime, adultCount, childCount, infantCount, 'en')
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
    document.title = 'Compare and Save with 38 Lounges at 22 UK Airports. Compare deals today - Triperoo';
    return (
      <div>
        <AirportLoungeSearchForm airport={this.state.defaultAirport} handleFormSubmit={this.loadAirportLounges} contentType="airportLoungeV2" headerTitle="Airport Lounges" subHeaderTitle="Pre-book your UK airport lounge from just £15"/>
        <div className="gap"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                this.props.isError ? <p>{this.props.error}</p> :
                  this.props.airportLounge.apI_Reply != undefined && !this.props.isFetching && !this.props.error ?
                    this.props.airportLounge.apI_Reply.lounge.map(quote => {
                      return (<AirportLoungeCard location={this.state.airport} airportLounge={quote} searchRequest={this.props.airportLounge.apI_Reply.apI_Header.request} css="col-md-3" key={quote.code} adults={this.state.adults} children={this.state.children} infants={this.state.infants} />);
                    }) : this.state.airport == '' ? <AirportLoungeBulletPoints /> : <Loader showLoader={true} />
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

AirportLounge.defaultProps = {
    isFetching: false,
    isError: false,
    airportLounge: {},
    searchRequest: {},
    error: ''
};

AirportLounge.propTypes = {
  airportLounge: PropTypes.object,
  searchRequest: PropTypes.object,
  airportLoungeActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.airportLounge.isFetching ? state.airportLounge.isFetching : false,
    airportLounge: state.airportLounge.airportLounge ? state.airportLounge.airportLounge : {},
    isError: state.airportLounge.isError ? state.airportLounge.isError : false,
    error: state.airportLounge.error ? state.airportLounge.error : '',
    searchRequest: state.airportLounge.request ? state.airportLounge.request : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    airportLoungeActions: bindActionCreators(airportLoungeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportLounge);
