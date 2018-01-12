import React, {PropTypes} from 'react';

import TopLocations from './topLocations';
import Loader from '../../../loaders/contentLoader';

class AtractionNearLocation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  render() {
    if (this.props.location.doctype == "Viator") {
      return null;
    }
    else {
      let attractionUrl = this.props.url + '/attractions';

      if (this.props.hasLoadedLocation) {
        let title = "Attractions near " + this.props.location.regionName;
        return (
          <div className="jumbotron hotels">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h4>{title}</h4>
                </div>
                <div className="col-md-5 text-right">
                  <p><a href={attractionUrl}>Find more attractions in {this.props.location.parentRegionName}</a></p>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <TopLocations locationId={this.props.location.parentRegionID}
                                  name={this.props.location.parentRegionName} locationType="Attractions" pageSize={4}
                                  showTitle={false} locationName={this.props.location.parentRegionName}/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="jumbotron hotels">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <Loader showLoader={true}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

AtractionNearLocation.defaultProps = {

};

AtractionNearLocation.propTypes = {
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  hasLoadedLocation: PropTypes.bool.isRequired
};

export default AtractionNearLocation;

