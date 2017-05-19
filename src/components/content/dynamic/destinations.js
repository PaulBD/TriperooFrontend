import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationsActions from '../../../actions/location/locationsActions';

class Destinations extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.locationsActions.loadTopLocations(this.props.locationCount, this.props.contentType);
    }

    render(){

	return (
        <div className="row row-wrap text-xs-center">
            <div className={this.props.title ? "gap" : "hide"}></div>
            <h3 className={this.props.title ? "mb20" : "hide"}>{this.props.title}</h3>
            <div className="row">
            {
            this.props.locationList.map(item => {
                return (
                    <div className="col-md-4 featureLocation" key={item.name}>
                        <a className="hover-img" href={item.url}>
                            <img src={item.image} alt="London" />
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
}


Destinations.defaultProps = {
  locationList: [],
  locationCount: 0,
  contentType: ''
};

Destinations.propTypes = {
    title: PropTypes.string,
    locationsActions: PropTypes.object.isRequired,
    locationCount: PropTypes.number.isRequired,
    locationList: PropTypes.array.isRequired,
    contentType: PropTypes.string.isRequired
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
