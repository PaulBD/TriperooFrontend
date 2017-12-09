import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/forms/searchForms/flights';
import Destinations from '../../components/content/dynamic/destinations';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

let moment = require('moment');

class FlightsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Search for flights';
  }

  updateSearch(fromCode, fromFriendly, toCode, toFriendly, fromDate, toDate, passengerTotal, adultTotal, childTotal, infantTotal, journeyType, formattedFromDate, formattedToDate) {
    browserHistory.push('/flights/search-results?from=' + fromFriendly + '&fromCode=' + fromCode + '&to=' + toFriendly  + '&toCode=' + toCode  + '&fromDate=' + formattedFromDate  + '&toDate=' + formattedToDate  + '&passengers=' + passengerTotal + '&journeyType=' + journeyType);
  }

  render(){
    return (
      <div>
        <FeaturedHeader contentType="flight" />
        <div className="container">
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane active" id="tab-1">
                  <Search fromCode=""
                          fromFriendly=""
                          toCode=""
                          toFriendly="" fromDate={this.props.fromDate} toDate={this.props.toDate}
                    updateSearch={this.updateSearch}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Destinations title="Our Top Flight Destinations" locationCount={6} contentType="flights" cssClass="col-md-4" />
          <hr />
        </div>
        <div className="container">
          <div className="gap"></div>
          <BulletPoints />
          <div className="gap gap-mini"></div>
          <FacebookSignup />
          <TrustedPartners />
          <div className="gap gap-mini"></div>
        </div>
      </div>
    );
  }
}

FlightsPage.defaultProps = {
  fromDate: moment().add(7, 'days').format('YYYY-MM-DD'),
  toDate: moment().add(14, 'days').format('YYYY-MM-DD')
};

FlightsPage.propTypes = {
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired
};


export default FlightsPage;
