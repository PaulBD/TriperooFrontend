import React, {PropTypes} from 'react';
import { Link } from "react-router";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/newsletter';

class Newsletter extends React.Component {
   constructor(props, context) {
     super(props, context);

     this.save = this.save.bind(this);
  }

  save(e) {

    e.preventDefault();

    console.log(this.refs.emailAddress.value);

    //this.props.saveNewsletter(this.props.footerNewsletter, this.refs.emailAddress.value);
  }

   render() {

    //const {footerNewsletter} = this.props;

      return (
          <div>
            <h4>Newsletter</h4>
              <form onSubmit={this.save}>
                <label>Enter your E-mail Address</label>
                <input type="text" className="form-control" ref="emailAddress" name="emailAddress" />
                <p className="mt5"><small>*We Never Send Spam</small></p>
                <input type="submit" className="btn btn-primary" value="Subscribe" />
              </form>
          </div>
      );
   }
}

Newsletter.propTypes = {
  //saveNewsletter: PropTypes.func.isRequired,
  //footerNewsletter: PropTypes.object.isRequired,
  //error: PropTypes.object.isRequired
};

export default Newsletter;
