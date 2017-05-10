import React from 'react';
import Search from '../../components/holidays/search';
import FeaturedHeader from '../../components/content/dynamic/featuredHeader';
import Destinations from '../../components/content/dynamic/destinations';
import Copy from '../../components/holidays/copy';

import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import FacebookSignup from '../../components/authentication/facebookSignup';

// Since this component is simple and static, there's no parent container for it.
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
            <div className="row row-wrap text-xs-center">
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
