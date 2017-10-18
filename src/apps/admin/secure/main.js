import React, {PropTypes} from 'react';

class AdminSecureHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
      return (
        <div className="container">
Main Console
        </div>
      );
  }
}

AdminSecureHome.propTypes = {

}


export default AdminSecureHome;
