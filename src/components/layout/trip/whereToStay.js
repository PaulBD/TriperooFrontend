import React, {PropTypes} from 'react';
import HotelsNearLocation from '../../layout/cards/hotels/hotelsForTrip';
let moment = require('moment');

const WhereToStay = ({trip}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mb-2">Where To Stay</h5>
            <hr className="pageTitle"/>
          </div>
          <div className="col-md-12">
            <div className="row">
              <HotelsNearLocation
                locationType="activity"
                arrivalDate={moment().add(7, 'days').format('YYYY-MM-DD')}
                pageNumber={0}
                currencyCode="GBP"
                exclude={0}
                locale="en_en"
                radius={5}
                rooms1={1}
                nights={1}
                guests={1}
                sortBy="PROMO"
                locationId={trip.tripDetails.regionID} latitude={0} longitude={0} pageSize={8} locationName={trip.tripDetails.regionName} url={trip.tripDetails.regionUrl}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhereToStay.propTypes = {
  trip: PropTypes.object.isRequired
};

export default WhereToStay;
