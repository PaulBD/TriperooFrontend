import React, { PropTypes } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const App = (props) => {
  return (
    <div>
    <Header />
      {props.children}
    <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
