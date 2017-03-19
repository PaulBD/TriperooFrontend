import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as destinationActions from '../../../actions/topDestinationActions';
import Loader from '../../common/loadingDots';

class TopDestinations extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true, places: [] };
    }

    componentDidMount() {
        this.props.actions.loadTopDestination(this.props.destinationCount);
        this.setState({ isLoading: false });
    }

    render(){
    const {destinations} = this.props;

	return (
        <div className="row row-wrap text-xs-center">
            <div className={this.props.title ? "gap" : "hide"}></div>
            <h3 className={this.props.title ? "mb20" : "hide"}>{this.props.title}</h3>
            <div className="row">
            {
            destinations.map(item => {
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

TopDestinations.propTypes = {
    title: PropTypes.string,
    destinationCount: PropTypes.number.isRequired,
    destinations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    destinations: state.destinations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(destinationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDestinations);