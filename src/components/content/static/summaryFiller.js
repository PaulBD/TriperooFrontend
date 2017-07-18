import React, {PropTypes} from 'react';

const SummaryFiller = (show) => {
  return (
    <div className={show ? "" : "hide"}>
      <hr />
      Summary Filler here
    </div>
  );
};

SummaryFiller.propTypes = {
  show: PropTypes.bool.isRequired
};


export default SummaryFiller;
