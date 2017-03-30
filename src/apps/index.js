import React, {PropTypes} from 'react';

import Header from '../components/common/header';
import Footer from '../components/common/footer';
import LoginPopup from '../components/authentication/login';
import RegisterPopup from '../components/authentication/register';
import ReviewPopup from '../components/reviews/reviewPopup';

export const App = (props) => {
	return (
		<div className="global-wrap">
			<Header showHeader={true} />
			{props.children}
			<Footer />
			<LoginPopup />
			<RegisterPopup />
			<ReviewPopup />
		</div>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;