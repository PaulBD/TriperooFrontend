import React from "react";

export default class ChangePassword extends React.Component {
	render(){
	return (
<form>
                                <div class="form-group form-group-icon-left"><i class="fa fa-lock input-icon"></i>
                                    <label>Current Password</label>
                                    <input class="form-control" type="password" />
                                </div>
                                <div class="form-group form-group-icon-left"><i class="fa fa-lock input-icon"></i>
                                    <label>New Password</label>
                                    <input class="form-control" type="password" />
                                </div>
                                <div class="form-group form-group-icon-left"><i class="fa fa-lock input-icon"></i>
                                    <label>New Password Again</label>
                                    <input class="form-control" type="password" />
                                </div>
                                <hr />
                                <input class="btn btn-primary" type="submit" value="Change Password" />
                            </form>
       	);
	}
}