import React from "react";

export default class Newsletter extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
	render() {
	return (
    <div>
      <h4>Newsletter</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your E-mail Address</label>
          <input type="text" className="form-control" />
          <p className="mt5"><small>*We Never Send Spam</small></p>
          <input type="submit" className="btn btn-primary" value="Subscribe" />
        </form>
		</div>
   );
  }
}