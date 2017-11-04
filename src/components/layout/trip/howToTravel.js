import React, {PropTypes} from 'react';

const HowToTravel = ({trip}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mb-2">How To Travel</h5>
            <hr className="pageTitle"/>
          </div>
          <div className="col-md-12">
            <div className="row">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HowToTravel.propTypes = {
  trip: PropTypes.object.isRequired
};

export default HowToTravel;
