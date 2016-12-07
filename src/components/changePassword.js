import React from "react";

export default class ChangePassword extends React.Component {
    render(){
    return (
        <form>
            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                <label>Current Password</label>
                <input className="form-control" type="password" />
            </div>
            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                <label>New Password</label>
                <input className="form-control" type="password" />
            </div>
            <div className="form-group form-group-icon-left"><i className="fa fa-lock input-icon"></i>
                <label>New Password Again</label>
                <input className="form-control" type="password" />
            </div>
            <hr />
            <input className="btn btn-primary" type="submit" value="Change Password" />
        </form>
        );
    }
}