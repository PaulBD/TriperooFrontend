import React, {PropTypes} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';

export const App = (props) => {
	return (
		<div className="global-wrap">
			<Header showHeader={true} />
			{props.children}
			<Footer />
      <Login />
      <Register />
		</div>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;