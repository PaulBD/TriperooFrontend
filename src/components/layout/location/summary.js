import React, {PropTypes} from 'react';
let titleCase = require('title-case');
import GoogleMaps from '../../maps/googleMap';

class Overview extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showMore: false };
    this.onHandleTextClick = this.onHandleTextClick.bind(this);
  }

  onHandleTextClick(event) {
    event.preventDefault();
    if (this.state.showMore) {
      this.setState({ showMore: false });
    }
    else {
      this.setState({ showMore: true });
    }
  }

  render(){

    let summaryCount = 660;

    let summary = this.props.location.summary ? this.props.location.summary.en : '';

    if ((summary != null) && (summary.length > 0))
    {
      let showMore = 'Read Less';

      if (!this.state.showMore)
      {
        if (summary.length > summaryCount)
        {
          summary = summary.substring(0, summaryCount) + '...';
          showMore = 'Read More';
        }
        else {
          showMore = '';
        }
      }

      return (
        <div className="row">
          <div className="col-md-12">
            <h4>About {titleCase(this.props.location.regionName)}...</h4>
            <p dangerouslySetInnerHTML={{__html: summary}}></p>
            <p><a href="#" onClick={this.onHandleTextClick}>{showMore}</a></p>

            <div className={this.props.showMap ? this.state.showMore ? "hide" : "col-md-12" : "hide"}>
              <div className="row">
                <GoogleMaps latitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.latitude : 0} longitude={this.props.location.locationCoordinates ? this.props.location.locationCoordinates.longitude : 0} text={this.props.location.regionName} zoom={12} isLoading={this.state.isLoadingLocation} locationType="city"/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.props.showHelp) {
        let editUrl = this.props.location.url + '/add';
        return (
          <div className="row">
            <div className="col-md-12">
              <h4>We Need Your Help!!</h4>
              <p>We want to supply the best local content for {titleCase(this.props.location.regionName)} so e need you
                to submit the best attractions, pubs and restaurants to Triperoo!</p>
              <p>Simply, click the button below and add your favourite location so we can review and add to our growing
                database. Our mission is provide the best guide to {titleCase(this.props.location.regionName)}.</p>
              <p><a href={editUrl} className="btn btn-primary" title="Suggest Location">Suggest Location</a></p>
            </div>
          </div>
        );
      }
      else { return null; }
    }
  }
}

Overview.defaultProps = {
  showMore: false,
  location: {},
  showMap: false,
  showHelp: true
};

Overview.propTypes = {
  location: PropTypes.object.isRequired,
  showMore: PropTypes.bool,
  showMap: PropTypes.bool,
  showHelp: PropTypes.bool
};

export default Overview;
