import React, {PropTypes} from 'react';
let moment = require('moment');

const SideNav = ({tripSummary, selectedDate, showActivity}) => {

  console.log(tripSummary);

  return (
    <ul className="list-inline list-center">
      {
        tripSummary.map((sum, index) => {

          let d = moment(sum.date);
          let formattedD = d.format("YYYY-MM-DD");

          let anchor = "#" + formattedD;

          if (sum.count == 0)
          {
            anchor = "#add";
          }

          return (
            <a href={anchor} onClick={showActivity} data-day={sum.Day} data-date={formattedD} className={moment(selectedDate).format("YYYY-MM-DD") == formattedD ? "calanderSml mb-2 list-inline-item active" : "calanderSml mb-2 list-inline-item"} key={index}>
              <li  data-day={sum.Day} data-date={formattedD}>
                {d.format("ddd")}<br />
                <small data-day={sum.Day} data-date={formattedD}>{d.format("D")}</small>
                <br />{d.format("MMM")}
              </li>
            </a>
          );

        })
      }
    </ul>
  );
};

SideNav.propTypes = {
  tripSummary: PropTypes.array.isRequired,
  selectedDate: PropTypes.string.isRequired,
  showActivity: PropTypes.func.isRequired
};

export default SideNav;
