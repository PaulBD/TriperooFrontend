import React from "react";

export default class RecentComments extends React.Component {
	render(){
	return (
		<div className="sidebar-widget">
            <h4>Recent Comments</h4>
            <ul className="thumb-list thumb-list-right">
                <li>
                    <a href="#">
                        <img className="rounded" src="/static/img/70x70.png" alt="Image Alternative text" title="AMaze" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">5 minutes ago</p>
                        <h4 className="thumb-list-item-title"><a href="#">Carl Butler</a></h4>
                        <p className="thumb-list-item-desciption">Ligula ornare euismod etiam ultricies libero hendrerit...</p>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img className="rounded" src="/static/img/70x70.png" alt="Image Alternative text" title="Gamer Chick" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">9 minutes ago</p>
                        <h4 className="thumb-list-item-title"><a href="#">Alison Mackenzie</a></h4>
                        <p className="thumb-list-item-desciption">Fringilla volutpat cum rhoncus venenatis mi et...</p>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img className="rounded" src="/static/img/70x70.png" alt="Image Alternative text" title="Afro" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">6 minutes ago</p>
                        <h4 className="thumb-list-item-title"><a href="#">Bernadette Cornish</a></h4>
                        <p className="thumb-list-item-desciption">Nec donec imperdiet convallis id maecenas nam...</p>
                    </div>
                </li>
            </ul>
        </div>
       	);
	}
}