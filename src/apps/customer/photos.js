import React from 'react';
import UserProfile from '../../components/customers/userProfile';
// Since this component is simple and static, there's no parent container for it.
export default class Photos extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
        <div className="container">
            <div className="gap gap"></div>
            <div className="row">
                <div className="col-md-3">
                    <UserProfile />
                </div>
                <div className="col-md-9">
                    <a href="#" className="btn btn-primary mb20"><i className="fa fa-plus-circle"></i> Add new photo</a>
                    <div className="row row-no-gutter">
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/400x300.png" alt="Image Alternative text" title="the journey home" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Midtown East)</p><small className="text-white">July 10, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="El inevitable paso del tiempo" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Midtown East)</p><small className="text-white">July 7, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Viva Las Vegas" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Downtown - Wall Street)</p><small className="text-white">July 9, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="people on the beach" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Queens (LaGuardia Airport (LGA))</p><small className="text-white">July 25, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Gaviota en el Top" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Flushing, NY (LaGuardia Airport (LGA))</p><small className="text-white">July 6, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="4 Strokes of Fun" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Upper West Side)</p><small className="text-white">July 8, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Pictures at the museum" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Long Island City, NY (Long Island City - Astoria)</p><small className="text-white">July 3, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="new york at an angle" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Long Island City, NY (Long Island City - Astoria)</p><small className="text-white">July 16, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Bridge" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Upper West Side)</p><small className="text-white">July 1, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Street" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> East Elmhurst, NY (LaGuardia Airport (LGA))</p><small className="text-white">July 30, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="The Hidden Power of the Heart" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Upper West Side)</p><small className="text-white">July 16, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Plunklock live in Cologne" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Jamaica, NY (Kennedy Airport (JFK))</p><small className="text-white">July 21, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Fly away" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Brooklyn, NY (Brooklyn)</p><small className="text-white">July 20, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="Pizza Hut" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> Brooklyn, NY (Brooklyn)</p><small className="text-white">July 13, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <a className="hover-img" href="#">
                                    <img src="img/800x600.png" alt="Image Alternative text" title="me" />
                                    <div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-inner-sm hover-hold">
                                        <div className="text-small">
                                            <p><i className="fa fa-map-marker"></i> New York, NY (Times Square)</p><small className="text-white">July 2, 2014</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gap gap-small"></div>
                    <ul className="pagination">
                        <li className="active"><a href="#">1</a>
                        </li>
                        <li><a href="#">2</a>
                        </li>
                        <li><a href="#">3</a>
                        </li>
                        <li><a href="#">4</a>
                        </li>
                        <li><a href="#">5</a>
                        </li>
                        <li><a href="#">6</a>
                        </li>
                        <li><a href="#">7</a>
                        </li>
                        <li className="dots">...</li>
                        <li><a href="#">43</a>
                        </li>
                        <li className="next"><a href="#">Next Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
