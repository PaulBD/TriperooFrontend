import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as destinationActions from '../../../actions/destinationActions';
import Loader from '../../common/loadingDots';

class Destinations extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.loadDestinations(this.props.destinationCount, this.props.contentType);
    }

    render(){

	return (
        <div className="row row-wrap text-xs-center">
            <div className={this.props.title ? "gap" : "hide"}></div>
            <h3 className={this.props.title ? "mb20" : "hide"}>{this.props.title}</h3>
            <div className="row">
            {
            this.props.destinationList.map(item => {
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
  destinationList: [],
  destinationCount: 0,
  contentType: ''
};

Destinations.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.object.isRequired,
    destinationCount: PropTypes.number.isRequired,
    destinationList: PropTypes.array.isRequired,
    contentType: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return { 
        destinationList: state.destinations.destinationList ? state.destinations.destinationList : []
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(destinationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);