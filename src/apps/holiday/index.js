import React from 'react';
import Search from '../../components/forms/searchForms/holidays';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Destinations from '../../components/content/dynamic/destinations';
import Copy from '../../components/content/static/holidays';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';

export default class Holidays extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Search for holidays';
  }

  render(){
    return (
      <div>
        <FeaturedHeader contentType="holiday" />
        <div className="container">
          <Search />
          <div className="gap"></div>
            <div className="row row-wrap text-center">
            <Destinations destinationCount={3} title="Our Top Destinations" />
          </div>
        </div>
        <LastMinuteDeal locationId={2114} />
        <div className="container">
            <div className="gap gap"></div>
            <Copy />
            <div className="gap gap-small"></div>
            <hr />
            <div className="gap"></div>
            <FacebookSignup />
            <div className="gap"></div>
        </div>
      </div>
    );
  }
}
