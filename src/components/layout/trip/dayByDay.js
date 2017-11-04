import React, {PropTypes} from 'react';
import SideNav from './sideNav';
let moment = require('moment');

class DayByDay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showActivity = this.showActivity.bind(this);
    this.state = {
      selectedDate: this.props.trip.tripDetails.tripStart,
      selectedDay: 0
    };
  }

  showActivity(e) {
    e.preventDefault();
    this.setState({ selectedDate: e.target.getAttribute("data-date"), selectedDay: e.target.getAttribute("data-day") });
  }

  render() {

    return (
      <div className="row">

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h4 className="tripDetailTitle"><small>Day by Day</small><br />{this.props.trip.tripDetails.regionName}</h4>
                    </div>

                    <SideNav trip={this.props.trip} selectedDate={this.state.selectedDate} showActivity={this.showActivity}/>
                  </div>
                  <div className="gap gap-small"></div>
                  <div className="row">
                    <div className="timeline-centered">
                      <article className="timeline-entry left-aligned">
                        <div className="timeline-entry-inner">
                          <time className="timeline-time" datetime="2014-01-10T03:45"><span>03:45 AM</span> <span>Today</span></time>
                          <div className="timeline-icon bg-success">
                            <i className="entypo-feather"></i>
                          </div>
                          <div className="timeline-label">
                            <h2><a href="#">Art Ramadani</a> <span>posted a status update</span></h2>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry">
                        <div className="timeline-entry-inner">
                          <time className="timeline-time" datetime="2014-01-10T03:45"><span>03:45 AM</span> <span>Today</span></time>
                          <div className="timeline-icon bg-success">
                            <i className="entypo-feather"></i>
                          </div>
                          <div className="timeline-label">
                            <h2><a href="#">Art Ramadani</a> <span>posted a status update</span></h2>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry left-aligned">
                        <div className="timeline-entry-inner">
                          <time className="timeline-time" datetime="2014-01-10T03:45"><span>03:45 AM</span> <span>Today</span></time>
                          <div className="timeline-icon bg-success">
                            <i className="entypo-feather"></i>
                          </div>
                          <div className="timeline-label">
                            <h2><a href="#">Art Ramadani</a> <span>posted a status update</span></h2>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                          </div>
                        </div>
                      </article>
                      <article className="timeline-entry begin">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon">
                          <i className="entypo-flight"></i>
                        </div>
                      </div>
                    </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap gap-small"></div>
      </div>
    );
  }
};

DayByDay.propTypes = {
  trip: PropTypes.object.isRequired
};

export default DayByDay;
