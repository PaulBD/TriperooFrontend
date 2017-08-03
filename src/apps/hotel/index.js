import React from 'react';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Search from '../../components/content/headers/hotels';
import Destinations from '../../components/content/dynamic/destinations';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';

export default class SearchHotels extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    document.title = 'Search for hotels';
  }

  render(){
    return (
      <div>
        <FeaturedHeader contentType="hotel" />
        <div className="container">
          <Search searchType="all" />
        </div>
        <div className="container">
          <Destinations locationCount={6} title="Our Top Hotel Destinations" contentType="hotels" />
        </div>
        <LastMinuteDeal locationId={2114} />
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
