import React, {PropTypes} from 'react';

class CustomersHome extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    document.title = "Triperoo Admin Console";
      return (
        <div className="container">
Customers
        </div>
      );
  }
}

CustomersHome.propTypes = {

};


export default CustomersHome;
