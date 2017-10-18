import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../../../actions/location/locationActions';
import TriperooLoader from '../../../../components/loaders/globalLoader';
import Toastr from 'toastr';
import FacebookSignup from '../../../../components/forms/authentication/facebookSignup';


class LondonTravelGuide extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId)
      .then(() => this.setState({isLoadingLocation: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  render(){
    document.title = 'Take a Fabulous Vacation in London';

    if (!this.state.isLoadingLocation)
    {
      let style = {
        backgroundImage: 'url(' + this.props.location.image + ')'
      };

      return (
        <div>
          <div className="bg-holder full text-center text-white travelPage">
            <div className="bg-mask"></div>
            <div className="bg-img" style={style}></div>
            <div className="bg-front full-center">
              <div className="owl-cap">
                <h1 className="owl-cap-title fittext">Take a Fabulous</h1>
                <div className="owl-cap-price">
                  <small>Vacation To London</small>
                </div>
              </div>
            </div>
          </div>
          <div className="gap gap-small"></div>
          <div className="container">
            <div className="row row-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p className="lead"><strong>London is one of the most amazing cities to visit in the World. Full of energy and
                      ethnic diversity, London is a key destination for any traveler wanting to take in the British
                      culture. With numerous museums, attractions, restaurants and unique neighborhoods it would be very
                      difficult to cram everything into just a few days.</strong></p>
                    <p className="lead">However, if time is limited, here’s Triperoo’s top 5 most popular places that everyone must see
                      while in London:</p>
                    <div className="gap gap-small"></div>
                    <hr />
                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>The British Museum</h5>
                        <p>Founded in 1753, The British Museum holds a multitude of world art and artefacts and is one of the
                        most exciting attractions to visit whilst in London. Experience Egyptian mummies, the Rosetta Stone
                        and Parthenon sculptures to name a few and throughout the year the museum hosts numerous special
                        exhibits. Admission is free and the museum is a perfect place to discover two million years of human history.</p>
                        <p><small><i className="fa fa-map-marker"></i> Great Russell St (btwn Montague & Bloomsbury), London, Greater London, WC1B 3DG, United Kingdom</small></p>
                        <p><a href="/6001533/visit-location/the-british-museum-london-england-united-kingdom">View Details</a></p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/the-british-museum-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>
                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-4">
                        <img src="/static/img/locations/tower-of-london-london-england-united-kingdom.png" className="float-left" />
                      </div>
                      <div className="col-md-8">
                        <h5>The Tower of London</h5>
                        <p>The Tower of London is officially called Her Majesty’s Royal Palace and is a historical castle that can
                          be found on the Northern bank of the River Thames. Over the years, the tower has been used as a secure
                          fortress, a royal palace and a prison with executions historically taking place on tower hill. Once
                          inside the tower, visitors can see a collection of 23,578 gemstones that are known as the Crown
                          Jewels, some of which are still worn by the Royal family today and visit the famous armory detailing
                          some of the methods of execution and torture that took place.</p>
                        <p><small><i className="fa fa-map-marker"></i> Tower Hill, London, Greater London, EC3N 4AB, United Kingdom</small></p>
                        <p><a href="/6001525/visit-location/tower-of-london-london-england-united-kingdom">View Details</a></p>
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Buckingham Palace</h5>
                        <p>There are not too many working palaces left in the world, but Buckingham Palace is one of them. Visitors
                          can see part of the palace during the summer months when the Queen is not in residence and during this
                          tour, visitors can walk around nineteen State Rooms filled with magnificent Royal Collection treasures
                          including paintings by Canaletto, Rubens and Rembrandt. If visitors fail to get tickets into the palace, then
                          there’s always an opportunity to witness the changing of the guard and have multiple photo opportunities
                          in front of the palace gates.</p>
                        <p><small><i className="fa fa-map-marker"></i> Buckingham Palace Rd, London, Greater London, SW1A 1AA, United Kingdom</small></p>
                        <p><a href="/6001520/visit-location/buckingham-palace-london-england-united-kingdom">View Details</a></p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/buckingham-palace-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-4">
                        <img src="/static/img/locations/kensington-palace-london-england-united-kingdom.png" className="float-left" />
                      </div>
                      <div className="col-md-8">
                        <h5>Kensington Palace</h5>
                        <p>Many Royals have lived inside Kensington Palace over the years, beginning with King William and Queen
                          Mary II.  Princess Diana lived there after her divorce from Prince Charles and more recently Prince
                          William and Duchess Kate now call Kensington Palace their family home. While inside the palace,
                          visitors can see the rooms that Queen Victoria lived in as a child as well as an exhibit named Fashion
                          Rules, where the styles of The Queen, Princess Margaret, and Princess Diana are on display.</p>
                        <p><small><i className="fa fa-map-marker"></i> Kensington Gardens, Kensington, Greater London, W8 4PX, United Kingdom</small></p>
                        <p><a href="/6001522/visit-location/kensington-palace-london-england-united-kingdom">View Details</a></p>
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Westminster Abbey</h5>
                        <p>British History comes alive at Westminster Abbey. The seven-hundred-year-old building is the
                          coronation church of England and is now a UNESCO World Heritage Site.  Complete with paintings, stained
                          glass windows and other religious artefacts, Westminster Abbey owns the most important collection of
                          monumental sculptures anywhere in Britain.</p>
                        <p><small><i className="fa fa-map-marker"></i> 20 Dean's Yard, London, Greater London, SW1P 3PA, United Kingdom</small></p>
                        <p><a href="/6001561/visit-location/westminster-abbey-london-england-united-kingdom">View Details</a></p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/westminster-abbey.jpg" className="float-left" />
                      </div>
                    </div>
                    <div className="gap gap-small"></div>
                    <hr/>


                    <blockquote className="blockquote">
                      <p className="mb-0">The man that can dominate a London dinner table can dominate the World.</p>
                      <footer className="blockquote-footer">Oscar Wilde</footer>
                    </blockquote>
                    <hr />

                    <p className="lead">London is also home to some more quirkier locations unknown to the average visitor. Having local
                      knowledge of the ‘go to’ places will reveal fascinating locations that will give you even more stories
                      to take home with you. We’ve listed some of those locations below.</p>

                    <div className="gap gap-small"></div>
                    <div className="card-deck">
                      <div className="card">
                        <img className="card-img-top" src="/static/img/locations/gods-own-junkyard.jpg" alt="God's Own Junkyard" />
                          <div className="card-block">
                            <h4 className="card-title">God's Own Junkyard</h4>
                            <p className="card-text">
                              God’s Own Junkyard is a personal collection of art work that was created by Chris Bracey also known as
                              the Neon Man.  After creating iconic art pieces, he placed them outside his salvage yard in Walthamstow.  His
                              art work includes items that he designed back in the 1960s for Soho sex clubs as well as his more recent
                              work for movies such as ‘Eyes Wide Shut’ and ‘Batman’.  Visitors are allowed to explore his yard every
                              Friday 11am to 9pm, Saturday 11am to 9m and Sunday 11am to 6pm.
                            </p>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted"><i className="fa fa-map-marker"></i> Unit 12, Ravenswood Industrial Estate, Shernhall St, E17 9HQ</small>
                          </div>
                      </div>
                      <div className="card">
                        <img className="card-img-top" src="/static/img/locations/denis-servers-house.jpg" alt="Dennis Severs’ House" />
                          <div className="card-block">
                            <h4 className="card-title">Dennis Severs’ House</h4>
                            <p className="card-text">
                              nyone who visits Dennis Severs’ House will need to be prepared to be silent for the duration of their
                              visit - no one is allowed to speak or make any other noises during the tours.  The Huguenot house has
                              been used to create a still life drama of how residents lived between 1724 and 1914.   During the
                              tour, visitors are taken through the cellar, kitchen, dining room, smoking room and the upstairs
                              bedrooms.  Certain items have been left scattered throughout the spaces to give the impression to
                              visitors that the residents have just stepped out and could return at any moment.</p>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted"><i className="fa fa-map-marker"></i> 18 Folgate St, E1 6BX</small>
                          </div>
                      </div>
                      <div className="card">
                        <img className="card-img-top" src="/static/img/locations/gir-lion-lodge.jpg" alt="Gir Lion Lodge at the London Zoo" />
                          <div className="card-block">
                            <h4 className="card-title">Gir Lion Lodge at the London Zoo</h4>
                            <p className="card-text">
                              A stay in the middle of the lion’s home in the London Zoo can be the ultimate experience for animal
                              lover. The lodge offers luxurious accommodations inside the Land of the Lions development area that
                              has been designed to look like the Gir Forest in India.  Guests receive an after hour tour of the zoo
                              with , animal encounters, two full days at the zoo, dinner, and breakfast.</p>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted"><i className="fa fa-map-marker"></i> ZSL London Zoo, Outer Cir, NW1 4RY</small>
                          </div>
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <hr />


                    <p className="lead">London is a fascinating city and while there are many popular must-see attractions to see, visitors
                      should plan on seeing some of the more unique and quirky ones as well.  Finding those may be a little
                      difficult, but talking to the locals is usually the best way for a person to find out where they should
                      be going during their time in the city.</p>
                  </div>
                </div>
              </div>
              <div className="gap gap-small"></div>
            </div>
          </div>
          <FacebookSignup />
        </div>
      );
    }
    else {
      return (<TriperooLoader />);
    }
  }
}

LondonTravelGuide.defaultProps = {
  isFetching: false
};

LondonTravelGuide.propTypes = {
  locationId: PropTypes.number,
  location: PropTypes.object,
  locationActions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.location.isFetching ? state.location.isFetching : false,
    location: state.location.location ? state.location.location : {},
    locationId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LondonTravelGuide);
