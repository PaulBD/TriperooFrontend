import React, {PropTypes} from 'react';

class ContentHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
      return (
        <div className="container">
Content
        </div>
      );
  }
}

ContentHome.propTypes = {

}


export default ContentHome;
