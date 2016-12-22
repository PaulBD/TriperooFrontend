import React from "react";

export default class Reviews extends React.Component {
    render(){
    return (
            <div>
            <h3>Member Reviews (14)</h3>
            <ul className="booking-item-reviews list">
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="booking-item-review-person">
                                    <a className="booking-item-review-person-avatar round" href="#">
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Bubbles" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Minnie Aviles</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Neque suspendisse massa cras inceptos volutpat"</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <p>Malesuada elit pellentesque lectus ante nisi vel varius magna per iaculis porttitor pharetra lacus mi libero varius gravida magnis inceptos cras iaculis tempus eros nisi a rhoncus est<span className="booking-item-review-more"> Dictum dignissim quam conubia egestas interdum urna at nascetur nulla tortor scelerisque mus fames purus morbi aliquam justo auctor aenean habitant lectus venenatis ligula gravida fusce accumsan mus habitasse natoque fermentum montes eleifend consequat maecenas cubilia fermentum leo neque nascetur ligula mauris egestas molestie vulputate sem magnis est ridiculus eu volutpat luctus convallis justo scelerisque in ultrices dapibus metus primis luctus ad erat porttitor pellentesque ultricies netus aliquam sagittis hac</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Non varius primis euismod ultrices cubilia sem dignissim nostra suspendisse tincidunt</p>
                                        <p>Aenean etiam sed facilisi est accumsan donec tempor tempus interdum ridiculus viverra fusce nascetur proin ligula nisi at scelerisque odio cum accumsan dignissim himenaeos varius vulputate nullam a leo congue feugiat himenaeos orci vehicula ac sit vulputate nisl torquent donec litora per porta taciti mi elit odio nunc curabitur ultrices laoreet suspendisse sem sagittis</p>
                                        <p className="text-small mt20">Stayed March 2014, traveled as a couple</p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Sleep</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Location</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Service</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Clearness</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Rooms</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="booking-item-review-expand"><span className="booking-item-review-expand-more">More <i className="fa fa-angle-down"></i></span><span className="booking-item-review-expand-less">Less <i className="fa fa-angle-up"></i></span>
                                    </div>
                                    <p className="booking-item-review-rate">Was this review helpful?
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 13</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="booking-item-review-person">
                                    <a className="booking-item-review-person-avatar round" href="#">
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Good job" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Cyndy Naquin</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Faucibus in litora"</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <p>Lectus viverra nascetur neque vivamus per eleifend cras volutpat bibendum proin nibh nascetur libero ullamcorper ultricies fames magna consectetur nisi fames justo dictum neque cum vel ligula habitant varius faucibus rutrum suspendisse est duis<span className="booking-item-review-more"> Massa netus egestas tincidunt lorem malesuada integer aliquet adipiscing auctor tristique torquent vulputate eros felis cursus purus montes proin auctor condimentum tincidunt quis gravida lacus quisque lobortis dictumst morbi convallis litora feugiat senectus lobortis sodales vivamus bibendum pulvinar dis taciti phasellus justo nulla dolor libero lobortis</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Porttitor posuere purus hendrerit montes nisl interdum at proin nisl ridiculus ante hendrerit ut porta etiam aliquet faucibus mattis egestas sociosqu vehicula auctor suspendisse hendrerit</p>
                                        <p>Nascetur potenti ornare posuere imperdiet eu mus litora convallis conubia aptent primis ac bibendum consequat blandit purus magnis dui orci nam dui facilisis viverra dapibus nec suspendisse donec sagittis laoreet sollicitudin turpis cubilia consequat</p>
                                        <p className="text-small mt20">Stayed March 2014, traveled as a couple</p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Sleep</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Location</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o text-gray"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Service</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o text-gray"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Clearness</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Rooms</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="booking-item-review-expand"><span className="booking-item-review-expand-more">More <i className="fa fa-angle-down"></i></span><span className="booking-item-review-expand-less">Less <i className="fa fa-angle-up"></i></span>
                                    </div>
                                    <p className="booking-item-review-rate">Was this review helpful?
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 11</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="booking-item-review-person">
                                    <a className="booking-item-review-person-avatar round" href="#">
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Chiara" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Carol Blevins</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Purus diam leo magna mauris nisi lacinia"</h5>
                                    <ul className="icon-group booking-item-rating-stars">
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                        <li><i className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <p>Tempor nullam eu euismod convallis ante semper quisque nibh enim facilisi arcu congue dis faucibus tristique ad hendrerit vel massa dapibus praesent senectus nibh turpis pretium accumsan imperdiet auctor habitant congue nibh ac auctor duis leo mus suscipit ultricies<span className="booking-item-review-more"> Ornare at cursus fermentum lacus iaculis vestibulum ac mattis sociis purus auctor commodo eu ligula consectetur ultricies at natoque egestas dis aenean arcu vulputate orci massa in metus lorem habitasse mi integer ipsum turpis vel pretium phasellus ad nulla bibendum volutpat adipiscing a natoque nascetur ridiculus auctor rutrum conubia nisi facilisis semper tempus hac ornare erat nam imperdiet neque donec id mi bibendum erat aptent convallis nostra malesuada</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Sed aliquet cubilia mi habitant nibh cras lectus turpis nunc nascetur sit dolor mattis tortor risus leo</p>
                                        <p>Arcu condimentum torquent hac odio parturient est curae bibendum mattis maecenas natoque primis curabitur ornare sed lacus mollis habitasse neque molestie cubilia placerat conubia tellus urna elementum curabitur sapien iaculis consectetur tempus cubilia lectus tristique aenean est nisi porta semper ac semper blandit velit porttitor nascetur diam phasellus dolor sem</p>
                                        <p className="text-small mt20">Stayed March 2014, traveled as a couple</p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Sleep</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Location</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Service</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list booking-item-raiting-summary-list">
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Clearness</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="booking-item-raiting-list-title">Rooms</div>
                                                        <ul className="icon-group booking-item-rating-stars">
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                            <li><i className="fa fa-smile-o"></i>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="booking-item-review-expand"><span className="booking-item-review-expand-more">More <i className="fa fa-angle-down"></i></span><span className="booking-item-review-expand-less">Less <i className="fa fa-angle-up"></i></span>
                                    </div>
                                    <p className="booking-item-review-rate">Was this review helpful?
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 16</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}