import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventsActions from '../../actions/eventsActions';
import EventList from './eventList';

class EventCategories extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = { categoryName: 'all' };
  }

  componentWillMount() {
    this.props.actions.loadEventCategories();
  }

  handleCategoryChange(e) {
    e.preventDefault();
    this.setState({ categoryName: e.target.getAttribute('data-name') });
    this.props.changeCategory(e.target.getAttribute('data-id'));
    this.props.changeFriendlyCategory(e.target.getAttribute('data-name'));
  }

  render(){
    if (this.props.eventCategories.length > 0) 
    {
      return (
        <aside className="booking-filters text-white">
          <h3>Filter By:</h3>
          <ul className="list booking-filters-list">
            <li>
              <div className="eventOptions"><label><i className="fa fa-bed"></i> <a href="#" onClick={this.handleCategoryChange} data-id={0} data-name="all">All Events</a></label></div>
              {
                this.props.eventCategories.map(category => {

                var className = this.state.categoryName == category.name ? 'eventOptions active' : 'eventOptions';

                  return (
                    <div className={className} key={category.name}>
                      <label><i className={category.icon}></i>&nbsp; 
                        <a href="#" onClick={this.handleCategoryChange} data-id={category.id} data-name={category.name}>
                           {category.name}
                        </a>
                      </label>
                    </div>
                  );
                })
              }
            </li>
          </ul>
        </aside>
      );
    }
    else { return null; }
  }
}

EventCategories.defaultProps = {
  eventCategories: [],
  isFetching: false,
};

EventCategories.propTypes = {
  eventCategories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changeCategory: PropTypes.func,
  changeFriendlyCategory: PropTypes.func,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.locationEvents.isFetching ? state.locationEvents.isFetching : false,
    eventCategories: state.locationEvents.eventCategoryList ? state.locationEvents.eventCategoryList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCategories);