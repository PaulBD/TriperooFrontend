import React, {PropTypes} from 'react';
import Loader from '../../../loaders/contentLoader';

const HotelOverview = ({hotel, hotelRoom, currency, arrivalDate, departureDate, nights, guests, loadingHotels}) => {

  if (!loadingHotels) {
    return (
      <div className="card">
        <img className="card-img-top" src={hotel.hotelInformationResponse.hotelImages.hotelImage[0].highResolutionUrl}/>
        <div className="card-block">
          <h4 className="card-title">{hotel.hotelInformationResponse.hotelSummary.name}</h4>
          <p className="card-text mb-0"><strong>1 Room:</strong><span className="float-right">{hotelRoom.rateDescription}</span></p>
          <p className="card-text mb-0"><strong>Check-in:</strong><span className="float-right">{arrivalDate}</span></p>
          <p className="card-text mb-0"><strong>Check-out:</strong><span className="float-right">{departureDate}</span></p>
          <p className="card-text mb-3"><strong>Nights:</strong><span className="float-right">{nights}</span></p>
          <p className={hotelRoom.rateInfos.rateInfo && hotelRoom.rateInfos.rateInfo[0].promoDescription ? "card-text mb-3" : "hide"}>
            <strong>{hotelRoom.rateInfos.rateInfo[0].promoDescription}</strong></p>
          <hr />
          <p className="card-text mb-3"><strong>Room 1:</strong><span
            className="float-right">{guests == 1 ? '1 Adult' : guests + ' Adults'} </span>
          </p>
          <p className="card-text mb-0"><strong>Nightly Rate:</strong>
            <span className="float-right">{currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.nightlyRateTotal}</span>
          </p>
          <p className="card-text mb-0"><strong>Tax & Service Fees:</strong>
            <span className="float-right">{currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.surchargeTotal}</span>
          </p>
          <hr />
          <p className="card-text mb-3"><strong>Total:
            <span className="float-right"> {currency}{hotelRoom.rateInfos.rateInfo[0].chargeableRateInfo.total}</span></strong>
          </p>
          <hr />
          <span className={hotelRoom.rateInfos.rateInfo[0].hotelFees != null && hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? '' : 'hide'}>
            Due at Hotel (City/local Tax):
            <span className="float-right">{currency}{hotelRoom.rateInfos.rateInfo[0].hotelFees != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee != null ? hotelRoom.rateInfos.rateInfo[0].hotelFees.hotelFee[0].amount : '' : ''}</span>
            <hr />
          </span>
          <p className="card-text text-center">
            <small>Rates are quoted in <strong>British pounds sterling</strong>.</small>
          </p>
          <hr />
          <p className="card-text text-center">Customer Support Number: (800) 279 8034</p>
        </div>
      </div>
    );
  }
  else {
    return (<Loader showLoader={true}/>);
  }
};

HotelOverview.propTypes = {
  hotel: PropTypes.object.isRequired,
  hotelRoom: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  departureDate: PropTypes.string.isRequired,
  nights: PropTypes.string.isRequired,
  guests: PropTypes.string.isRequired,
  loadingHotels: PropTypes.bool.isRequired
};

export default HotelOverview;
