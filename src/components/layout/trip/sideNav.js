import React, {PropTypes} from 'react';
let moment = require('moment');

const SideNav = ({trip, selectedDate, showActivity}) => {
  let innerNav = [];

  for (let i = 0; i <= trip.tripDetails.tripLength; i++)
  {
    let d = moment(trip.tripDetails.tripStart, "YYYY-MM-DD");
    var newDate = d.add('days', i);
    innerNav.push(
      <a href="#" onClick={showActivity} data-day={i} data-date={newDate.format("YYYY-MM-DD")} className={moment(selectedDate).format("YYYY-MM-DD") == newDate.format("YYYY-MM-DD") ? "calanderSml mb-2 list-inline-item active" : "calanderSml mb-2 list-inline-item"} key={i}>
        <li className="" data-day={i} data-date={newDate.format("YYYY-MM-DD")}>
          {newDate.format("ddd")}<br />
          <small>{newDate.format("D")}</small>
          <br />{newDate.format("MMM")}
        </li>
      </a>);
  }

  return (
    <ul className="list-inline list-center">
      {innerNav}
    </ul>
  );
};

SideNav.propTypes = {
  trip: PropTypes.object.isRequired,
  selectedDate: PropTypes.string.isRequired,
  showActivity: PropTypes.func.isRequired
};

export default SideNav;
