import React, {PropTypes} from 'react';

class Newsletter extends React.Component {
   constructor(props, context) {
     super(props, context);

     this.save = this.save.bind(this);
  }

  save(e) {

    e.preventDefault();

    console.log(this.refs.emailAddress.value);
  }

   render() {

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

export default Newsletter;
