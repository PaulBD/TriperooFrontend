import React, {PropTypes} from 'react';

class Room extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <li >
        <a className="booking-item">
          <div className="row">
            <div className="col-md-3 mb-3">
              <img src=""/>
            </div>
            <div className="col-md-6">
              <h5 className="booking-item-title">{this.props.hotelRoom.description[0]}</h5>
              <div className="row hidden-sm-down">
                <div className="col-md-4">
                  <ul className="nav card-text mb-2">
                    <li className="nav-item bedType">Sleeps: </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <ul className="nav card-text mb-2">
                    <li>Bed Description</li>
                  </ul>
                </div>
                <div className="col-md-12 mb-2">
                  <strong>rooms left</strong>
                </div>
                <div className="col-md-12">
                  <ul className="nav card-text mb-2">
                    <li className="nav-item bedType"><i className="fa fa-check-square-o" aria-hidden="true"></i> Includes Value Adds</li>
                  </ul>
                </div>
              </div>
              <p className="mb-3">Non-Refundable</p>
              <p className="text-small">Cancellation Policy:<br />Policy</p>

            </div>
            <div className="col-md-3 hidden-sm-down">
              <h5 className="hotelPrice mb-1 priceRight">GBP 0.00</h5>
              <br /><br />
              <a href="" className="btn btn-primary mb-1 priceRight">Book Room</a>
              <br />
              <small className="priceBreakdown priceRight">
                <span><strong>Breakdown:</strong></span>
                <span>Nightly Rate: GBP 0.00</span>
                <span>Tax & Service Fees: GBP 0.00</span>
                <span className="mb-3"><strong>Total: GBP 0.00</strong></span>
                <span >Due at Hotel (City/local Tax): GBP 0.00</span>
              </small>
            </div>

            <div className="col-md-12 hidden-sm-up">
              <div className="row">
                <div className="col-12">
                  <ul className="nav card-text mb-2">
                    <li className="nav-item bedType">Sleeps: 0</li>
                  </ul>

                  <ul className="nav card-text mb-2">
                    <li>Bed Description</li>
                  </ul>
                </div>
                <div className="col-md-12 mb-2">
                  0
                </div>
                <div className="col-12">
                  <ul className="nav card-text mb-2">
                    <li className="nav-item bedType"><i className="fa fa-check-square-o" aria-hidden="true"></i> Includes Value Adds</li>
                  </ul>
                </div>
                <div className="col-6">
                  <small className="priceBreakdownMobile">
                    <span><strong>Breakdown:</strong></span>
                    <span>Nightly Rate: GBP 0.00</span>
                    <span>Tax & Service Fees: GBP 0.00</span>
                    <span className="mb-3"><strong>Total: GBP 0.00</strong></span>
                    <span >Due at Hotel (City/local Tax): GBP 0.00</span>
                  </small>
                </div>
                <div className="col-6">
                  <h5 className="hotelPrice mb-1 priceRight">GBP 0.00</h5>
                  <br />
                  <a href="" className="btn btn-primary mb-1 priceRight">Book Room</a>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      );
  }
}
Room.defaultProps = {

};

Room.propTypes = {
  hotelRoom: PropTypes.object
};

export default Room;

