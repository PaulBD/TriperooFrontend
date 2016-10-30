import React from "react";

export default class PopularPosts extends React.Component {
	render(){
	return (
        <div className="sidebar-widget">
            <h4>Popular Posts</h4>
            <ul className="thumb-list">
                <li>
                    <a href="#">
                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Viva Las Vegas" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">Jul 18, 2014</p>
                        <h5 className="thumb-list-item-title"><a href="#">Congue metus</a></h5>
                        <p className="thumb-list-item-desciption">Auctor aptent arcu vivamus sociis</p>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="4 Strokes of Fun" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">Jul 18, 2014</p>
                        <h5 className="thumb-list-item-title"><a href="#">Nostra potenti</a></h5>
                        <p className="thumb-list-item-desciption">Accumsan in pharetra ornare fusce</p>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Cup on red" />
                    </a>
                    <div className="thumb-list-item-caption">
                        <p className="thumb-list-item-meta">Jul 18, 2014</p>
                        <h5 className="thumb-list-item-title"><a href="#">Commodo porta</a></h5>
                        <p className="thumb-list-item-desciption">Venenatis dictum scelerisque pellentesque erat</p>
                    </div>
                </li>
            </ul>
        </div>          
	    );
	}
}