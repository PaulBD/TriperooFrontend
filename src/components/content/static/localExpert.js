import React from "react";

export default class LocalExpert extends React.Component {
    render(){
    return (
        <div className="row">
            <hr />
            <div className="gap gap-small"></div>
            <div className="col-md-6">
                <h4>Become A Triperoo Agent!</h4>
                <p><strong>STEP 1</strong><br />
                Sign up to Triperoo and add 5 reviews to qualify to become a Triperoo Agent.</p>

                <p><strong>STEP 2</strong><br />
                Start to earn commission by booking hotels and flights for friends and family, just like a travel agent.</p>
                
                <p><strong>STEP 3</strong><br />
                Increase your commission by signing up friends and family as agents and help fellow travelers from across the globe with your local recommendations.</p>
                <p><a href="/become-a-triperoo-agent" className="btn btn-primary">Learn More</a></p>
            </div>
            <div className="col-md-6">
                <img src="/static/img/community.jpg" className="communityImg" />
            </div>
        </div>
        );
    }
}