import React from 'react';
import {Link} from 'react-router';
// Since this component is simple and static, there's no parent container for it.
export default class SearchFlights extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (

    <div className="container">
      <div className="container">
        <h1 className="page-title">Flights</h1>
      </div>

      <div className="container">
          <div className="row">
              Dest
          </div>
      </div>
      <div className="gap"></div>
    </div>
  )};
};