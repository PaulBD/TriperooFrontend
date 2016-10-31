import React, {PropTypes} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

export const App = (props) => {
  return (
    <div className="global-wrap">
    <Header showHeader={true} />
      {props.children}
    <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element

};

export default App;