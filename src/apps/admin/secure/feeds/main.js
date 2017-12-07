import React, {PropTypes} from 'react';

class FeedsHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
      return (
        <div className="container">
Feeds
        </div>
      );
  }
}

FeedsHome.propTypes = {

};


export default FeedsHome;
