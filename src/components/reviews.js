import React from "react";
import WriteReview from './writeReview';

export default class Reviews extends React.Component {
    render(){
    return (
        <div>

                <ul className="booking-item-reviews list">
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="booking-item-review-person">
                                    <a className="booking-item-review-person-avatar round" href="#">
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Afro" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">John Doe</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">143 Reviews</a></small>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Ridiculus volutpat varius"</h5>
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
                                    <p>Suspendisse velit venenatis facilisi velit quis volutpat enim ipsum mauris mus tortor leo augue non sociosqu ridiculus sagittis odio curabitur nostra maecenas nisi lectus platea mauris venenatis sed dui primis porttitor sit turpis litora<span className="booking-item-review-more"> Eu nisl volutpat nam per primis dictum hendrerit gravida facilisis porta pretium erat turpis erat vivamus torquent ornare bibendum vitae dui congue torquent aptent placerat in tortor arcu eu blandit sit fusce lorem eu tortor proin egestas neque senectus netus ac augue senectus pulvinar rutrum habitasse nostra montes aenean mauris lacinia sociosqu posuere curabitur vestibulum venenatis euismod habitasse litora rhoncus purus pretium nullam nibh montes gravida pharetra eu parturient semper</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Fringilla dictum montes eget senectus cras dictum dictum sollicitudin maecenas</p>
                                        <p>Aliquam quisque orci auctor auctor natoque ultrices elit quisque porta tortor sollicitudin bibendum proin facilisi duis magna risus fringilla donec velit justo pretium curabitur velit quis platea tristique libero iaculis velit scelerisque ullamcorper id proin placerat faucibus hac purus tristique consectetur interdum donec fames euismod consequat sodales egestas faucibus</p>
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
                                                            <li><i className="fa fa-smile-o text-gray"></i>
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
                                                            <li><i className="fa fa-smile-o text-gray"></i>
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
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 7</b>
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
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Bubbles" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Minnie Aviles</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">128 Reviews</a></small>
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
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">146 Reviews</a></small>
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
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">123 Reviews</a></small>
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
                    <li>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="booking-item-review-person">
                                    <a className="booking-item-review-person-avatar round" href="#">
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Gamer Chick" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Cheryl Gustin</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">29 Reviews</a></small>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Morbi platea sollicitudin adipiscing fames duis maecenas"</h5>
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
                                    <p>Dapibus aliquam vivamus libero pretium sociis dignissim nisi ornare euismod nec est justo massa gravida fames vulputate auctor egestas ante suscipit augue lacinia gravida velit conubia pharetra mollis risus facilisis dignissim lobortis euismod dolor placerat<span className="booking-item-review-more"> Maecenas vel ultrices id lacus proin ante vulputate ornare congue placerat quam vivamus ante lacinia hendrerit rhoncus ad habitasse ante taciti vivamus auctor molestie nisl ipsum per aliquam sociis etiam pulvinar eros tortor ante id lectus odio porta dictumst facilisi integer phasellus elit aliquam aenean vivamus curabitur iaculis taciti aptent ac morbi quis tempor in est amet ultrices ipsum quam natoque</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Cum pellentesque potenti phasellus aenean egestas iaculis duis mi porta litora mi conubia dictum dictumst libero rutrum erat est fusce vestibulum aliquam ultricies adipiscing parturient class tempor suspendisse facilisis molestie gravida</p>
                                        <p>Phasellus tincidunt vel aliquet sociosqu tempor laoreet dignissim diam elementum neque massa aliquam leo maecenas duis enim litora pulvinar aliquam dictumst quis laoreet diam per facilisis cursus hac ante mus aenean sem dapibus malesuada nulla elementum iaculis</p>
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
                                                            <li><i className="fa fa-smile-o text-gray"></i>
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
                                                            <li><i className="fa fa-smile-o text-gray"></i>
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
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 20</b>
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
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="AMaze" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Joe Smith</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">113 Reviews</a></small>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Nisl adipiscing tempor massa sit sodales lacus"</h5>
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
                                    <p>Turpis odio dapibus consequat lacus accumsan nibh per interdum justo donec facilisis placerat senectus nostra praesent nostra platea tortor curabitur aliquam vulputate pellentesque fermentum eu dolor volutpat laoreet<span className="booking-item-review-more"> Dui eu luctus egestas cursus posuere egestas tristique vivamus lectus senectus dictumst a velit hac facilisi bibendum duis laoreet vel mus porta cum himenaeos est hac augue et nascetur phasellus feugiat tempor facilisi nulla magna tortor sagittis parturient pellentesque mus tristique purus lacinia nec vitae himenaeos tincidunt dapibus sollicitudin magna odio arcu tellus nec rhoncus litora tempus nisl tellus commodo egestas</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Aenean aliquet dictumst quam sociis tempor lectus sapien lorem lobortis blandit dolor ultricies interdum sociosqu fermentum pellentesque sagittis ultrices volutpat odio donec amet nam fringilla quisque lacus tellus praesent aliquam scelerisque eros erat convallis himenaeos neque ullamcorper odio taciti dapibus cursus ornare magnis tempor</p>
                                        <p>Vivamus quisque vivamus amet senectus at montes mattis pellentesque curae tristique nullam vestibulum convallis et eget posuere nec iaculis per habitasse nibh laoreet rutrum tempor ridiculus curae ultricies proin donec ridiculus ultricies turpis magna vulputate cubilia suspendisse praesent amet integer mus luctus odio at lorem tempor volutpat vestibulum nec magnis sociis libero fringilla laoreet himenaeos hendrerit posuere eu fringilla ante dictum cras urna habitasse potenti nibh tincidunt</p>
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
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 19</b>
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
                                        <img src="/static/img/70x70.png" alt="Image Alternative text" title="Me with the Uke" />
                                    </a>
                                    <p className="booking-item-review-person-name"><a href="#">Ava McDonald</a>
                                    </p>
                                    <p className="booking-item-review-person-loc">Palm Beach, FL</p><small><a href="#">135 Reviews</a></small>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="booking-item-review-content">
                                    <h5>"Non ridiculus purus ipsum pharetra fringilla"</h5>
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
                                    <p>Dictum elit tempus suscipit vulputate neque bibendum felis sagittis curae nostra dictum ornare dictum fermentum justo dapibus iaculis mus malesuada leo velit curabitur in auctor<span className="booking-item-review-more"> Ornare ligula nam cubilia penatibus felis vivamus enim primis auctor consectetur magna ante nascetur urna libero hac cum turpis eleifend tellus parturient ac lacus facilisi lacus porta convallis taciti feugiat varius urna euismod phasellus egestas ultrices sagittis fusce malesuada porttitor blandit odio elit hac in lacus lacinia magnis laoreet</span>
                                    </p>
                                    <div className="booking-item-review-more-content">
                                        <p>Aptent massa dolor lacus hac litora at class placerat quisque dictumst orci tempor himenaeos curae sed etiam quisque auctor sagittis primis tortor metus</p>
                                        <p>Felis nec enim nisl nostra per sagittis ullamcorper imperdiet fusce viverra mollis taciti lectus scelerisque augue quisque felis posuere nulla facilisis scelerisque pharetra quisque dignissim elit diam nisi penatibus magnis dapibus pretium lacinia torquent convallis egestas posuere etiam aliquam posuere duis a fringilla enim dictum tortor accumsan litora faucibus felis mi lacinia sociis commodo suscipit pulvinar ligula nibh litora malesuada ipsum orci felis facilisi interdum neque</p>
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
                                                            <li><i className="fa fa-smile-o text-gray"></i>
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
                                        <a className="fa fa-thumbs-o-up box-icon-inline round" href="#"></a><b className="text-color"> 8</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row wrap">
                    <div className="col-md-5">
                        <p><small>1108 reviews on this hotel. &nbsp;&nbsp;Showing 1 to 7</small>
                        </p>
                    </div>
                    <div className="col-md-7">
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
                <div className="gap gap-small"></div>
                <div className="box bg-gray">
                    <WriteReview />
                </div>
            </div>
        );
    }
}