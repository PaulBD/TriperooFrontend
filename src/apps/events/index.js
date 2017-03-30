import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../actions/eventsActions';
import EventList from '../../components/events/eventList';
import EventCategories from '../../components/events/eventCategories';
import TrustedPartners from '../../components/content/static/trustedPartners';
import FacebookSignup from '../../components/authentication/facebookSignup';
import Pagination from "react-js-pagination";
import Loader from '../../components/common/loadingDots';
import * as locationActions from '../../actions/locationActions';

class EventHome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeEvent = this.changeEvent.bind(this);
    this.changeFriendlyCategory = this.changeFriendlyCategory.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { limit: 10, offset: 1, categoryName: 'all', friendlyCategory: '' };
  }

  componentWillMount() {
    this.props.locationActions.loadLocationById(this.props.locationId);
    this.props.eventActions.loadEventsByCategory(this.props.locationId, this.state.categoryName, 10, this.state.offset);
  }

  changeEvent(value) {
    window.scrollTo(0, 0);
    this.setState({ categoryName: value });
    this.props.eventActions.loadEventsByCategory(this.props.locationId, value, 10, this.state.offset);  
  }

  changePage(value) {
    window.scrollTo(0, 0);
    this.setState({ offset: value });
    this.props.eventActions.loadEventsByCategory(this.props.locationId, this.state.categoryName, 10, value);
  }

  changeFriendlyCategory(value) {
    this.setState({ friendlyCategory: value });
  }

  render() {
    document.title = 'All events this week in ' + this.props.locationName;

    let intro = '';

    if (!this.props.isFetchingLocation)
    {
      if (this.state.friendlyCategory == 'all')
      { 
        intro = 'We found ' + this.props.totalItems + ' events matching all categories.';
      }
      else
      {
        intro = 'We found ' + this.props.totalItems + ' events matching ' + this.state.friendlyCategory + '.';
      }
    }

    let style = {
      backgroundImage: 'url(/static/img/about.jpg)'
    };

    if (this.props.location.regionName != undefined)
    {
      return (
          <div>   

          <div className="bg-holder full text-xs-center text-white infoPageWrapper">
              <div className="bg-mask"></div>
              <div style={style} className="bg-img infoImg" ></div>
              <div className="bg-front full-center">
                  <div className="owl-cap">
                      <h1 className="owl-cap-title fittext">Events</h1>
                      <h2>Events in {this.props.locationName} this week</h2>
                  </div>
              </div>
          </div>
        <div className="container">
          <div className="row row-wrap">
            <div className="gap gap-small"></div>
              <div className="col-md-9">
                <Loader showLoader={this.props.isFetchingLocationEvents} />
                <p>{intro}</p>
                <EventList locationEvents={this.props.locationEvents} cssClass="col-md-6" isFetching={this.props.isFetchingLocationEvents} />
              </div>
              <div className="col-md-3">
                <EventCategories changeCategory={this.changeEvent} changeFriendlyCategory={this.changeFriendlyCategory}/>
              </div>
            </div>
            <div className="gap gap-small"></div>
            <div className="row text-xs-center">
              <Pagination innerClass="pagination text-xs-center" activePage={this.state.offset} itemsCountPerPage={this.props.pageSize} totalItemsCount={this.props.totalItems} pageRangeDisplayed={10} onChange={this.changePage} />
            </div>
          </div>
          <div className="container">
            <hr />
            <div className="gap"></div>
            <FacebookSignup />
            <TrustedPartners />
            <div className="gap"></div>
          </div>
        </div>
      );
    } else {
      return (<Loader showLoader={this.props.isFetchingLocation} />);
    }
  }
}

EventHome.defaultProps = {
  locationEvents: [],
  pageCount: 0,
  pageSize: 0,
  totalItems: 0,
  pageNumber: 0,
  isFetching: false,
  locationName: '',
  isFetchingLocation: false,
  isFetchingLocationEvents: false
};

EventHome.propTypes = {
  locationId: PropTypes.number,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  totalItems: PropTypes.number,
  pageNumber: PropTypes.number,
  locationEvents: PropTypes.array.isRequired,
  eventActions: PropTypes.object.isRequired,
  locationName: PropTypes.string,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  isFetchingLocation: PropTypes.bool.isRequired,
  isFetchingLocationEvents: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetchingLocation: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationName: state.location.location ? state.location.location.regionName : "",
    pageSize: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_size) : 0,
    pageNumber: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_number) : 0,
    totalItems: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.total_items) : 0,
    pageCount: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_count) : 0,
    isFetchingLocationEvents: state.locationEvents.isFetching ? state.locationEvents.isFetching : false,
    locationEvents: state.locationEvents.locationEvents ? state.locationEvents.locationEvents.events.event : [],
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch),
    eventActions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventHome);
