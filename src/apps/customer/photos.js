import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../actions/customer/authenticationActions';
import * as userActions from '../../actions/customer/userActions';
import UserProfile from '../../components/customer/user/userProfile';
import TriperooLoader from '../../components/common/triperooLoader';
import Toastr from 'toastr';

class UserPhotos extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentWillMount() {
    document.title = 'Your Photos';
    window.scrollTo(0, 0);

    this.props.userActions.getUser(this.props.currentUserId)
      .then(() => {
        this.setState({loading: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loading: false});
      });
  }

  render(){
    if (!this.state.loading) {
      return (
        <div className="container">
          <div className="gap gap-small"></div>
          <div className="row">
            <div className="col-md-4">
              <UserProfile user={this.props.user} isActiveUser={this.props.isActiveUser}/>
            </div>
            <div className="col-md-8">
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
    else {
      return (<TriperooLoader />);
    }
  }
}

UserPhotos.propTypes = {
  authActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isActiveUser: PropTypes.bool.isRequired,
  user: PropTypes.object,
  currentUserId: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  let user = localStorage.getItem('id_token') ? JSON.parse(localStorage.getItem('id_token')) : {};

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    currentUserId: ownProps.params.guid,
    isActiveUser: user ? ownProps.params.guid == user.userId : false,
    user: state.user.user ? state.user.user : null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotos);


