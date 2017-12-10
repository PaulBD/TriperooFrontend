import React, {PropTypes} from 'react';

import BulletPoints from '../../components/content/static/bulletPoints';
import TrustedPartners from '../../components/content/static/trustedPartners';
import LastMinuteDeal from '../../components/content/dynamic/lastMinuteDeal';
import Search from '../../components/forms/searchForms/homePage';
import Destinations from '../../components/content/dynamic/destinations';
import ReviewList from '../../components/layout/cards/reviews/homePageReviewList';
import FacebookSignup from '../../components/forms/authentication/facebookSignup';
import { getTranslate } from 'react-localize-redux';


class HomePage extends React.Component {

  render() {

    document.title = 'Explore - Plan - Book. Get the best deals from top travel websites';

    let style = {
      backgroundImage: 'url(/static/img/holiday.jpg)'
    };

    return (
      <div>
        <div className="bg-holder full text-center text-white holidayPage">
          <div className="bg-mask"></div>
          <div className="bg-img" style={style}></div>
          <div className="bg-front full-center text-xs-center">
            <div className="owl-cap">
              <span>&nbsp;</span>
              <h1 className="owl-cap-title fittext">Explore - Plan - Book</h1>
              <div className="owl-cap-price hidden-md-down">
                <small>Get the best deals from the top travel websites, plus reviews on the <br />best hotels,
                  restaurants, attractions & more from local experts!
                </small>
              </div>
              <Search searchType="all"/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="gap gap-mini"></div>
          <div className="row text-center">
            <Destinations locationCount={3} title="Our Top Destinations" contentType="homePage"/>
          </div>
          <hr />
          <div className="gap"></div>
          <div className="row row-wrap">
            <ReviewList locationType="all" locationId={0} pageSize={3} locationName="" pageNumber={0}
                        showTitle={true}/>
          </div>
        </div>
        <LastMinuteDeal locationId={2114}/>
        <div className="container">
          <div className="gap"></div>
          <BulletPoints />
          <div className="gap gap-mini"></div>
          <FacebookSignup showLines={true} />
          <TrustedPartners />
          <div className="gap gap-mini"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
