import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../actions/location/event/eventsActions';
import * as locationActions from '../../actions/location/locationActions';

import EventCategories from '../../components/filters/locations';
import EventList from '../../components/layout/cards/events/eventList';
import Pagination from "react-js-pagination";
import SubPageHeader from '../../components/content/headers/locationCategory';
import TriperooLoader from '../../components/loaders/globalLoader';
import Toastr from 'toastr';

let titleCase = require('title-case');

class EventHome extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeEvent = this.changeEvent.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = { isLoadingLocation: false, isLoadingEvents: false, pageSize: 12, pageNumber: 0, activePageNumber: 1, categoryName: 'all', friendlyCategory: '' };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.loadEvents(this.props.locationId, this.state.categoryName, this.state.pageSize, this.state.pageNumber))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  changeEvent(categoryId, catgeoryName) {
    window.scrollTo(0, 0);
    this.setState({ categoryName: categoryId, friendlyCategory: catgeoryName });
    this.loadEvents(this.props.locationId, categoryId, this.state.pageSize, this.state.pageNumber);
  }

  changePage(value) {
    window.scrollTo(0, 0);
    this.setState({ pageNumber: value - 1, activePageNumber: value });
    this.loadEvents(this.props.locationId, this.state.categoryName, this.state.pageSize, value - 1);
  }

  loadEvents(locationId, categoryName, pageSzie, pageNumber) {
    this.setState({isLoadingLocation: false, isLoadingEvents: true });
    this.props.eventActions.loadEventsByCategory(locationId, categoryName, pageSzie, pageNumber)
      .then(() => this.setState({isLoadingEvents: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingEvents: false});
      });
  }

  render() {
    document.title = 'All events this week in ' + this.props.locationName;

    let intro = '';
    let title = '';
    let totalItems = 0;

    if (! this.state.isLoadingLocation)
    {
      totalItems = this.props.totalItems;

      if (this.state.categoryName != '') {
        if (this.state.friendlyCategory == '')
        {
          intro = 'We found ' + totalItems + ' events matching all categories.';
          title= '<span>Featured Events:</span> Recommended For You';
        }
        else
        {
          intro = 'We found ' + totalItems + ' events matching ' + this.state.friendlyCategory + '.';
          title= '<span>Local:</span> ' + this.state.friendlyCategory;
        }
      }
      else {
        intro = 'We found ' + totalItems + ' events in total.';
          title= '<span>Featured Events:</span> Recommended For You';
      }
    }

    let style = {
      backgroundImage: 'url(/static/img/community.jpg)'
    };

    let resultCount =  this.props.totalItems + ' Results ';

    if (this.state.friendlyCategory != '') {
      resultCount += ' - filtered by ' + titleCase(this.state.friendlyCategory);
    }

    if (this.state.isLoadingEvents)
    {
      resultCount = '';
    }
    if (! this.state.isLoadingLocation)
    {

      return (
        <div>
          <SubPageHeader location={this.props.location} contentType="events" title="events" />
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12">
                      <h4 dangerouslySetInnerHTML={{__html: title}}></h4>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <EventList locationEvents={this.props.locationEvents} isFeature={this.state.categoryName == 'all' || this.state.categoryName == ''  ? true : false} cssClass={this.state.categoryName == 'all' || this.state.categoryName == ''  ? "col-md-4" : "col-md-3"} isFetching={this.state.isLoadingEvents} />
                  </div>
                  <div className="gap gap-small"></div>
                  <div className="col-md-12">
                    <div className="row justify-content-center">
                      <Pagination innerClass={this.state.categoryName == 'all' || this.state.categoryName == '' ? "hide" : totalItems > this.state.pageSize ? "pagination justify-content-center" : "hide"} activePage={this.state.activePageNumber} itemsCountPerPage={this.props.pageSize} totalItemsCount={this.props.totalItems} pageRangeDisplayed={10} onChange={this.changePage} />
                    </div>
                  </div>
                  <div className="gap gap-small"></div>
                </div>
              </div>
              <div className="col-md-3">
                <EventCategories changeCategory={this.changeEvent} contentType="events" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

EventHome.defaultProps = {
  locationEvents: [],
  pageCount: 0,
  pageSize: 0,
  totalItems: 0,
  pageNumber: 0,
  locationName: ''
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
  locationActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location.location ? state.location.location : {},
    locationName: state.location.location ? state.location.location.regionName : "",
    pageSize: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_size) : 0,
    pageNumber: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_number) : 0,
    totalItems: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.total_items) : 0,
    pageCount: state.locationEvents.locationEvents ? parseInt(state.locationEvents.locationEvents.page_count) : 0,
    locationEvents: state.locationEvents.locationEvents && state.locationEvents.locationEvents.events ? state.locationEvents.locationEvents.events.event : [],
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
