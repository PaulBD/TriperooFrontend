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
                  <p><a href={attractionUrl}>Find more attractions in {this.props.useParent ? this.props.location.parentRegionName : this.props.location.regionName}</a></p>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <TopLocations locationId={this.props.useParent ? this.props.location.parentRegionID : this.props.location.regionID}
                                  name={this.props.useParent ? this.props.location.parentRegionName : this.props.location.regionName} locationType="Attractions" pageSize={4}
                                  showTitle={false} locationName={this.props.useParent ? this.props.location.parentRegionName : this.props.location.regionName}/>

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
  useParent: true

};

AtractionNearLocation.propTypes = {
  useParent: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  hasLoadedLocation: PropTypes.bool.isRequired
};

export default AtractionNearLocation;

