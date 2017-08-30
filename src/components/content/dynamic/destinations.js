import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../../actions/location/locationsActions';
import Loader from '../../loaders/contentLoader';

class Destinations extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.loadLocations();
  }

  loadLocations() {
    this.setState({isLoading: true});
    this.props.locationsActions.loadTopLocations(this.props.locationCount, this.props.contentType)
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  render(){
    if (!this.state.isLoading) {
      return (
        <div className="col-md-12 text-center">
          <div className={this.props.title ? "gap gap-small" : "hide"}></div>
          <h3 className={this.props.title ? "mb20" : "hide"}>{this.props.title}</h3>
          <div className="row">
            {
              this.props.locationList.map(item => {
                let url = item.url;

                if (this.props.contentType == "hotels")
                {
                  url += '/hotels';
                }

                return (
                  <div className={this.props.cssClass} key={item.name}>
                    <a className="hover-img" href={url}>
                      <img src={item.image} alt="London"/>
                      <h5 className="hover-title hover-hold">{item.name}</h5>
                    </a>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }
    else {
      return (<Loader showLoader={true} />);
    }
  }
}


Destinations.defaultProps = {
  locationList: [],
  locationCount: 0,
  contentType: '',
  cssClass: 'col-md-4 featureLocation'
};

Destinations.propTypes = {
  title: PropTypes.string,
  locationsActions: PropTypes.object.isRequired,
  locationCount: PropTypes.number.isRequired,
  locationList: PropTypes.array.isRequired,
  contentType: PropTypes.string.isRequired,
  cssClass: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    locationList: state.locations.destinationList ? state.locations.destinationList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationsActions: bindActionCreators(locationsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
