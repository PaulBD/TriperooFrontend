import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as globalActions from '../actions/globalActions';

import Header from '../components/common/header';
import Footer from '../components/common/footer';
import LoginPopup from '../components/authentication/login';
import RegisterPopup from '../components/authentication/register';
import ReviewPopup from '../components/reviews/reviewPopup';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render(){
    	return (
			<div className="global-wrap">
				<Header showHeader={true} />
				{this.props.children}
				<Footer />
				<LoginPopup />
				<RegisterPopup />
				<ReviewPopup modalName="reviewModel" locationId={this.props.locationId} locationName='' locationType='' />
			</div>
		);
	}
}

App.defaultProps = {
    locationId: 0
};

App.propTypes = {
	children: PropTypes.element,
	locationId: PropTypes.number
};

function mapStateToProps(state, ownProps) {
     return {
        locationId: state.global.locationId ? state.global.locationId : 0
    };
}

function mapDispatchToProps(dispatch) {
  return {
    globalActions: bindActionCreators(globalActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);