import React from "react";
import CommentCard from './commentCard';


var RecentQuestions = React.createClass({
      render: function() {

        return (
        <div>
            <h3 className="mb20">Share The Knowledge</h3>
            <p>Community is the heart of everything we do, share tips on where to go and what<br />to do with other like-minded people and help others discover amazing places.</p>
            
            <div className="gap gap-small"></div>
            <div className="row row-wrap">
                <div className="col-md-4">
                    <CommentCard />
                </div>
                <div className="col-md-4">
                    <CommentCard />
                </div>
                <div className="col-md-4">
                    <CommentCard />
                </div>
            </div>
        </div>    
        );
    }
});

export default RecentQuestions;