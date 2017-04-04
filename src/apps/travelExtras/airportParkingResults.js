import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aiportParkingActions from '../../actions/airportParkingActions';
import AirportParkingCard from '../../components/travelExtras/airportParkingCard';
import AirportParkingSearchForm from '../../components/travelExtras/airportParkingSearchForm';



class AirportParkingResults extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.searchForm = this.searchForm.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.aiportParkingActions.loadAiportParking('LGW', '2017-04-04', '12:00', '2017-04-09', '13:00', 'en');
        document.title = 'Avoid the last minute rush by booking your vehicle space today and save a bundle on cheap airport parking with Triperoo. Compare deals today.';
    }

    searchForm(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime) {
      this.props.aiportParkingActions.loadAiportParking(airport, dropOffDate, dropOffTime, pickUpDate, pickUpTime, 'en');
    }

    render(){
      let i = 0;
      let row = 0;

      let style = {
        backgroundImage: 'url(/static/img/airportTranfers.jpg)'
      };

      if (this.props.airportParking.apI_Reply != undefined && !this.props.isFetching)
      {          
        return (
            <div>
              <div className="top-area show-onload infoPage">
                  <div className="bg-holder full text-white">
                      <div className="bg-mask"></div>
                      <div className="bg-img" style={style}></div>
                      <div className="container">
                          <div className="row">
                              <div className="col-md-8 col-xs-7">
                                  <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/travel-extras">Travel Extras</a></li>
                                    <li className="breadcrumb-item active">Airport Parking</li>
                                  </ol>
                                  <h1>Airport Parking</h1>
                              </div>
                              <div className="col-md-4 col-xs-5">&nbsp;</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="gap"></div>
              <div className="container">
                <div className="row">   
                  <AirportParkingSearchForm handleFormSubmit={this.searchForm}/>
                </div>
              </div>
              <div className="gap gap-small"></div>
              <div className="container">
                <div className="row">            
                  {
                    this.props.airportParking.apI_Reply.carPark.map(quote => {
                      return (
                          <AirportParkingCard airportParking={quote} css="col-md-3" key={quote.code} />
                          );
                      })
                  }
                </div>
              </div>
          </div>
        );
      }
      else {
        return (<p>Loading</p>);
      }
   }
}

AirportParkingResults.defaultProps = {
    isFetching: false,
    airportParking: {}
};

AirportParkingResults.propTypes = {
    airportParking: PropTypes.object,
    aiportParkingActions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.airportParking.isFetching ? state.airportParking.isFetching : false,
        airportParking: state.airportParking.airportParking ? state.airportParking.airportParking : {}
    };
}

function mapDispatchToProps(dispatch) {
  return {
    aiportParkingActions: bindActionCreators(aiportParkingActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportParkingResults);