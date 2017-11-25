import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../../../actions/location/locationActions';
import TriperooLoader from '../../../../components/loaders/globalLoader';
import Toastr from 'toastr';
import FacebookSignup from '../../../../components/forms/authentication/facebookSignup';


class NewYorkTravelGuide extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({isLoadingLocation: true});
    this.loadLocation();
  }

  loadLocation() {
    this.props.locationActions.loadLocationById(this.props.locationId, true)
      .then(() => this.setState({isLoadingLocation: false}))
      .catch(error => {
        Toastr.error(error);
        this.setState({isLoadingLocation: false});
      });
  }

  render(){
    document.title = 'The Big Apple - New York';

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
                <h1 className="owl-cap-title fittext">Discover New York</h1>
                <div className="owl-cap-price">
                  <small>Welcome to New York</small>
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
                    <p className="lead"><strong>There’s a reason why New York City receives about 60 million visitors each year; one of
                      the highest numbers to be found for any city worldwide.  The Big Apple, as it is also called, has a wide array of
                      diversity, which attracts people from all walks of life, and it’s known for its renowned cuisines, reputable
                      museums, and New Yorkers impeccable sense of fashion. My biggest advice to visitors of NYC is to avoid the
                      tourist traps and see the real New York! Go explore all the boroughs, not just Manhattan, and partake in the
                      local’s way of living! This is where I will be guiding you through now, with this article. I hope I can give you a
                      good sense of the excitement that NY has to offer, without being stranded at Times Square for the entire duration
                      of your stay.</strong></p>
                    <div className="gap gap-small"></div>
                    <hr />
                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Day One</h5>
                        <p>The most magical time to visit my favorite city is the winter, in particular Christmas time. Even though it’s
                          also the busiest time of the year, it nonetheless will make you fall in love with it, regardless of the massive
                          crowds around you.</p>
                          <p>To start out with on Day 1, I would suggest heading to the quintessential <a href="/502076/visit-location/rockefeller-center-new-york-new-york-united-states-of-america">Rockefeller Center</a> Christmas Tree,
                            as seen in many movies. Watching Home Alone will never be the same afterwards! Even locals like to visit this
                            site on occasion, because it’s truly breathtaking. It will also give you an opportunity to possible attend a show
                            at the impressive <a href="/6047349/visit-location/radio-city-music-hall-new-york-new-york-united-states-of-america">Radio City Music Hall</a>, as well as going up Rockefeller Center to take in the impressive
                            views of The Top of The Rocks. Now it’s time to move on to something less “touristy”!
                          Depending on what your preference is, either head to Birdland, a famous jazz club to have some excellent southern
                            comfort food and drinks, or go straight to the East Village to try Crif Dogs, the best hot dog place in the
                            city. It’s a hole in the wall, but you won’t be disappointed. The best part about this location is that you
                            can enter the telephone booth, located inside of Crif Dogs, after your meal, and if lucky, a door into a
                            secret bar will open! Call for reservations, especially on weekends: http://www.pdtnyc.com/. There is
                            usually a wait, but it’s worth it! </p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/the-british-museum-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Day Two</h5>
                        <p>For day 2, I recommend taking the train to the Bronx (yes, you heard me!), to visit the beautiful Holiday Train Show
                          at the Bronx Botanical Gardens. It’s a lovely place, especially all the miniature trains, as well as mini buildings,
                          which will give you an endless amount of cute picture opportunities. Great for kids too!
                        </p>
                        <p>Relatively close to the gardens, there is a neighborhood filled with authentic Italian Restaurants; one of them being
                          Antonio’s Trattoria.  It will fulfill all your Italian food desires in one sitting and leave you wanting for more!
                          After you head back into the city, make sure to visit <a href="/507426/visit-location/bryant-park-new-york-new-york-united-states-of-america">Bryant Park</a> and stroll along the huge Christmas Market, surrounding
                          the entire park. There are also locations at <a href="/6141729/visit-location/union-square-new-york-new-york-united-states-of-america">Union Square</a> and <a href="/6142026/visit-location/columbus-circle-new-york-new-york-united-states-of-america">Columbus Circle</a>, as alternatives. Make sure to try some of
                          their food and, if available, a traditional waffle for dessert! This is a great place to do your Christmas shopping,
                          since most of the merchandise is very unique and unlike anything you’ll find in a regular store.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/tower-of-london-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Day Three</h5>
                        <p>Day 3 should be started with a trip to Central Park, an amazing place to visit during the winter. Yes, it’s outdoors, but as
                          long as you bundle it, you should be fine. Most people, including New Yorkers, don’t know this, but Central Park has a
                          castle! It’s called Belvedere Castle and contains exhibit rooms as well as an observation deck, which are all interesting
                          enough to see. Being in the park already, it also allows you to get a glimpse of the Bow Bridge and Strawberry Fields; a
                          memorial to John Lennon, if you decide to take a walk (highly recommended!). Try to emerge on the East Side when you’re done,
                          so that you can visit Neue Gallerie, an often overlooked Austrian and German art museum. Take your lunch here at the
                          exquisite Café Sabarsky and try some real Austrian food, such as the delicious cheese spaetzle, sausage platter, or Goulash
                          soup. And of course, don’t miss the dessert part!</p>
                        <p>For your afternoon and evening entertainment, I suggest heading to Brooklyn.  Your pick can lie between Williamsburg,
                          Bushwick, or Queensbridge, which are my top 3 choices. In Williamsburg, you can have some fun at the local Brooklyn Bowling,
                          followed by dinner and a movie at the Nighthawk, an independent, sit-in dining movie theater. That’s my all-time Saturday
                          night outing right there, so you will be completely emerged into NYC culture, if you choose to do this. As a second choice,
                          you could go Brooklyn Boulders in Queensbridge, which is an indoor rock climbing facility. Park Slope and the Barclay Center
                          are nearby, so you will have no shortage of good dining options in the area. Shake Shack is a great casual burger joint, if
                          you are looking for an affordable and quick meal. In Bushwick, as a last choice, you could either take a
                          self-guided Graffiti tour, since Bushwick has some of the most astonishing Graffiti sprayings in the entire city, or a free,
                          guided walking tour (http://www.freetoursbyfoot.com). This can be followed by dinner at Mominette, a fantastic French
                          restaurant with a great wine selection, or, Seawolf, a seafood-specialized restaurant with happy hour $1 oysters.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/buckingham-palace-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>

                    <div className="gap gap-small"></div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>Day Four</h5>
                        <p>For Day 4, which is where my article will come to an end, I will let you stay in Manhattan, I promise! Start
                          your day at Cafeteria, a 24/7 restaurant where a scene of Sex and the City was shot in. The food is fantastic, but
                          please be advised to come early, or call ahead, since weekends have an extraordinarily long line.</p>
                        <p>Then head to the financial district to visit the 9/11 Museum.  As an alternative, you could also go the
                          Lower East Side and visit the much lesser known Tenement Museum. This is also very educational and informative,
                          but I’d suggest the 9/11 museum first. If you have time, why not do both? In the Lower East Side, you’ll find
                          Rice to Riches; a delicious rice pudding place, with tons of different flavors to choose from.  And while in the
                          financial district, you could check out Trinity Church and see Alexander Hamilton’s grave. Just one of the many
                          things to see and do in the great Big Apple! For the evening, possibly your last, I will say that it’s crucial
                          for you to at least see one Broadway show, or play! The highlights, in my opinion, are Avenue Q, Wicked, the
                          Lion King, and Kinky Boots. This covers something for everybody, including children. If you feel like seeing a
                          comedy show instead, check the schedule for Gotham Comedy Club. Up for some dancing too? Then head to Webster
                          Hall (different types of dancing, sometimes concerts as well) or Iguana New York (Latin American). For dinner,
                          visit The Smith, which has a fresh and great selection of American food available.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img src="/static/img/locations/kensington-palace-london-england-united-kingdom.png" className="float-left" />
                      </div>
                    </div>
                    <div className="gap gap-small"></div>
                    <hr/>

                    <p className="lead">I hope your days visiting will be filled with lots of laughter, love and adventures and that
                      my guide was able to give you some points of reference and helpful hints on how to enhance your NYC experience. Enjoy
                      your travels!
                    </p>
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

NewYorkTravelGuide.defaultProps = {
  isFetching: false
};

NewYorkTravelGuide.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(NewYorkTravelGuide);
