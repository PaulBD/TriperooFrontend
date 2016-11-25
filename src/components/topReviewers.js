import React from "react";

export default class TopReviewers extends React.Component {
    render(){
    return (
            <div className="row greyBg">
                <div className="col-md-12">
                    <div className="gap-small"></div>
                    <h4>Chesters Top Reviewers</h4>
                    <p>The more you review the more points you earn.</p>
                    <hr />
                    <div className="article comment topReviewer" inline_comment="comment">
                        <div className="points"><span>1000</span><br />POINTS</div>
                        <div className="comment-number">
                            1
                        </div>
                        <div className="comment-author">
                            <img src="/static/img/50x50.png" alt="Image Alternative text" title="Gamer Chick" />
                        </div>
                        <div className="comment-inner"><span className="comment-reviewer-name">Cyndy Naquin</span></div>
                    </div>
                    <hr />
                    <div className="article comment topReviewer" inline_comment="comment">
                        <div className="points"><span>1000</span><br />POINTS</div>
                        <div className="comment-number">
                            2
                        </div>
                        <div className="comment-author">
                            <img src="/static/img/50x50.png" alt="Image Alternative text" title="Gamer Chick" />
                        </div>
                        <div className="comment-inner"><span className="comment-reviewer-name">Cyndy Naquin</span></div>
                    </div>
                    <hr />
                    <div className="article comment topReviewer" inline_comment="comment">
                        <div className="points"><span>1000</span><br />POINTS</div>
                        <div className="comment-number">
                            3
                        </div>
                        <div className="comment-author">
                            <img src="/static/img/50x50.png" alt="Image Alternative text" title="Gamer Chick" />
                        </div>
                        <div className="comment-inner"><span className="comment-reviewer-name">Cyndy Naquin</span></div>
                    </div>
                    <hr />
                    <div className="article comment topReviewer" inline_comment="comment">
                        <div className="points"><span>1000</span><br />POINTS</div>
                        <div className="comment-number">
                            4
                        </div>
                        <div className="comment-author">
                            <img src="/static/img/50x50.png" alt="Image Alternative text" title="Gamer Chick" />
                        </div>
                        <div className="comment-inner"><span className="comment-reviewer-name">Cyndy Naquin</span></div>
                    </div>
                    <hr />
                    <div className="article comment topReviewer" inline_comment="comment">
                        <div className="points"><span>1000</span><br />POINTS</div>
                        <div className="comment-number">
                            5
                        </div>
                        <div className="comment-author">
                            <img src="/static/img/50x50.png" alt="Image Alternative text" title="Gamer Chick" />
                        </div>
                        <div className="comment-inner"><span className="comment-reviewer-name">Cyndy Naquin</span></div>
                    </div>
                    <hr />
                    <p><a href="#">View All Reviewers</a></p>
                    <div className="gap-small"></div>
                </div>
            </div>
        );
    }
}