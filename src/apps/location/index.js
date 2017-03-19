import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

import FacebookSignup from '../../components/authentication/facebookSignup';

import ReviewList from '../../components/reviews/list';

import RecentQuestions from '../../components/questions/questions';
import QuestionButton from '../../components/questions/askButton';

import Deals from '../../components/legacy/deals/list';
import TopPlaces from '../../components/places/topPlaces';
import NavigationWrapper from '../../components/places/navigation/navigationWrapper';

import Overview from '../../components/locations/overview';
import Header from '../../components/locations/header';

let titleCase = require('title-case');

class LocationHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true};
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let id = this.props.placeId;

        this.props.locationActions.loadLocation(id);

        this.setState({ isLoading: false});

    }
      
    render(){

    document.title = 'Explore, Plan, Book in ' + titleCase(this.props.location.nameShort);

    return (
        <div>
            <Header id={this.props.placeId} location={this.props.location}  />

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

LocationHome.propTypes = {
    placeId: PropTypes.number,
    location: PropTypes.object,
    locationActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    location: state.location,
    placeId: ownProps.params.placeId ? parseInt(ownProps.params.placeId) : 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationHome);