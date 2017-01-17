import React from 'react';

import FacebookSignup from '../../components/common/facebookSignup';
import CitySubHeader from '../../components/places/common/subHeader';
import HotelSearch from '../../components/hotels/searchForm';
import HotelThumb from '../../components/hotels/thumb';
import CityMap from '../../components/places/map/mapWrapper';
import QuestionButton from '../../components/questions/askButton';

export default class HotelPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <div>
          <CitySubHeader pageType="hotel" />
          <div className="gap gap-small"></div>
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                    <HotelSearch />
                    <div className="gap gap-small"></div>
                    <h3 className="mb20">Hotels in Chester</h3>
                    <div className="row row-wrap">
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                        <div className="col-md-4">
                          <HotelThumb />
                        </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <QuestionButton />
                      <div className="gap gap-small"></div>
                      <CityMap />

                  </div>
              </div>
          </div>
          <div className="container">
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
