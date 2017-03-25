import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../actions/eventsActions';

class ByLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadEvents(this.props.locationName, 3, 1);
  }

  render(){
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    if (this.props.locationEvents != undefined)
    {

      let allEventsUrl = this.props.baseUrl + '/all-events-this-week';

      return (
        <div className="row greyBg events">
          <div className="container">
              <div className="col-md-12">
                <h3>Events This Week</h3>
              </div>
              <div className="col-md-6">
              <p>Discover the best events happening in <strong>{this.props.location}</strong> every week.</p>
              </div>
              <div className="col-md-6 text-xs-right">
                <p><a href={allEventsUrl}>View all events</a></p>
              </div>
              <div className="row">
              <div className="col-md-12">
                  {
                    this.props.locationEvents.map(function (locationEvent, i) {
                      return (
                        <a href="#" className="col-md-4" key={i}>
                          <div className="card text-xs-left">
                            <div className="card-block eventCard">
                              <h4 className="card-title">{locationEvent.title}</h4>
                              <p className="card-subtitle mb-1 text-muted cardAddress"><i className="fa fa-map-marker"></i> {locationEvent.venue_name}<br/>{locationEvent.venue_address}</p>
                              <p className="card-subtitle mb-1 text-muted cardAddress"><i className="fa fa-clock-o"></i> {locationEvent.start_time}</p>
                              <p className="card-subtitle mb-1 text-muted cardAddress">{locationEvent.descriptionDecoded.length > 90 ? locationEvent.descriptionDecoded.substring(0, 90) + '...': locationEvent.descriptionDecoded}</p>
                              <p className="tagCollection">
                              {
                                locationEvent.categories.category.map(function (category, j) {
                                  return (<span className="tagReadOnly tag-default" key={j}>{category.name.replace("&amp;", "&")}</span>);
                                })
                              }
                              </p>
                            </div>
                          </div>
                        </a>
                      );
                    })
                  }
                </div>
              </div>
            </div> 
        </div>
      );
    }
    else { return null; }
  }
}

ByLocation.defaultProps = {
  locationEvents: [],
  baseUrl : ''
};

ByLocation.propTypes = {
  locationEvents: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  locationName: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationEvents.isFetching ? state.locationEvents.isFetching : false,
    locationEvents: state.locationEvents.locationEvents ? state.locationEvents.locationEvents : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ByLocation);