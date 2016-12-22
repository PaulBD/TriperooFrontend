import React from "react";

class UserProfileForm extends React.Component {
    render(){
    return (
        <div>
        <form>
            <h4>Personal Infomation</h4>
            <div className="form-group form-group-icon-left"><i className="fa fa-user input-icon"></i>
                <label>First Name</label>
                <input className="form-control" value="John" type="text" />
            </div>
            <div className="form-group form-group-icon-left"><i className="fa fa-user input-icon"></i>
                <label>Last Name</label>
                <input className="form-control" value="Doe" type="text" />
            </div>
            <div className="form-group form-group-icon-left"><i className="fa fa-envelope input-icon"></i>
                <label>E-mail</label>
                <input className="form-control" value="johndoe@gmail.com" type="text" />
            </div>
            <div className="form-group form-group-icon-left"><i className="fa fa-phone input-icon"></i>
                <label>Phone Number</label>
                <input className="form-control" value="+1 202 555 0113" type="text" />
            </div>
            <div className="gap gap-small"></div>
            <h4>Location</h4>
            <div className="form-group form-group-icon-left"><i className="fa fa-plane input-icon"></i>
                <label>Home Airport</label>
                <input className="form-control" value="London Heathrow Airport (LHR)" type="text" />
            </div>
            <div className="form-group">
                <label>Street Address</label>
                <input className="form-control" value="46 Gray's Inn Rd, London, WC1X 8LP" type="text" />
            </div>
            <div className="form-group">
                <label>City</label>
                <input className="form-control" value="London" type="text" />
            </div>
            <div className="form-group">
                <label>State/Province/Region</label>
                <input className="form-control" value="London" type="text" />
            </div>
            <div className="form-group">
                <label>ZIP code/Postal code</label>
                <input className="form-control" value="4115523" type="text" />
            </div>
            <div className="form-group">
                <label>Country</label>
                <input className="form-control" value="United Kingdom" type="text" />
            </div>
            <hr />
            <input type="submit" className="btn btn-primary" value="Save Changes" />
        </form>
        </div>
        );
    }
}

export default UserProfileForm;