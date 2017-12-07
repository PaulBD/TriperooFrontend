import React, {PropTypes} from 'react';

class AnalyticsHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
      return (
        <div className="container">
Analytics
        </div>
      );
  }
}

AnalyticsHome.propTypes = {

};


export default AnalyticsHome;
