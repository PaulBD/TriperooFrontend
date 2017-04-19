import React, {PropTypes} from 'react';

class FlightCard extends React.Component {
  constructor(props, context) {
      super(props, context);
  }
  
  render(){
    return (
      <div className="text-xs-left">
        <div className="col-md-2">
        <img src={this.props.carrierIds.Length > 1 ? '/static/img/multiple-airlines-34x34.jpg' : returnCarrierImage(this.props.carrierIds[0])} />
        </div>
        <div className="col-md-10">
          <h4 className="card-title"><strong>{this.props.carrierIds.Length > 1 ? 'Multiple Carriers' : returnCarrierName(this.props.carrierIds[0], this.props.carrierList)}</strong></h4>
          <p className="card-subtitle mb-1 text-muted cardAddress">{this.props.isDirect ? 'Direct Flight' : 'Multiple Stops'}</p>
        </div>
        <div className="col-md-12">
          <div className="points-list count2">
            <div className="dotted-route"></div>
            <div className="points-box">
              <div className="point">
                <div className="code">
                  {this.props.inboundLocation}
                </div>
                <div className="circle"></div>
                <div className="time">
                20:35
                </div>
              </div>
              <div className="route"></div>
              <div className="point small-circle second ">
                <div className="code">
                  {this.props.outboundLocation}
                </div>
                <div className="circle"></div>
                <div className="time">
                21:35
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FlightCard.defaultProps = {
  carrierIds: [],
  carrierList: [],
  isDirect: true,
  inboundLocation: 'MAN',
  outboundLocation: 'JFK'
};

FlightCard.propTypes = {
  carrierIds: PropTypes.array.isRequired,
  carrierList: PropTypes.array.isRequired,
  isDirect: PropTypes.bool.isRequired,
  inboundLocation: PropTypes.string.isRequired,
  outboundLocation: PropTypes.string.isRequired
};

function returnCarrierName(carrierId, carrierList)
{
  for (let index = 0; index < carrierList.length; index++) {
    if (carrierList[index].carrierId == carrierId)
    {
      return carrierList[index].name;
    }
  }
}

function returnCarrierImage(carrierId)
{
  switch(carrierId)
  {
    case 105:
      return '/static/img/airlines/29.png';
    case 838:
      return '/static/img/airlines/AF.png';
    case 852:
      return '/static/img/airlines/RA.png';
    case 857:
      return '/static/img/airlines/FI.png';
    case 881:
      return '/static/img/airlines/BA.png';
    case 1033:
      return '/static/img/airlines/EI.png';
    case 1859:
      return '/static/img/airlines/VS.png';
    case 1760:
      return '/static/img/airlines/TP.png';
    case 981:
      return '/static/img/airlines/DE.png';
    case 1324:
      return '/static/img/airlines/KL.png';
  }
}

function returnPlaceName(placeId, placeList)
{
  for (let index = 0; index < placeList.length; index++) {
    if (placeList[index].placeId == placeId)
    {
      return placeList[index].name;
    }
  }
}


export default FlightCard;