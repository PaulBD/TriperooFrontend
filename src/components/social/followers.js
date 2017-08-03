import React, {PropTypes} from 'react';

class Followers extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){

    let style = {};

    if (this.props.user.backgroundImageUrl != undefined) {
      style = {
        backgroundImage: 'url(' + this.props.user.backgroundImageUrl + ')'
      };
    }

    return (
      <div className="col-md-4">
        <div className="twPc-div">
          <a href={this.props.user.profileUrl} className="twPc-bgSml twPc-block" style={style}></a>
          <div>
            <a href={this.props.user.profileUrl} className="twPc-avatarLink">
              <img src={this.props.user.imageUrl ? this.props.user.imageUrl : '/static/img/userProfileImg.png'} className="twPc-avatarImgSml"/>
            </a>
            <div className="twPc-divUser">
              <div className="twPc-divNameSml">
                <a href={this.props.user.profileUrl}>{this.props.user.name}</a><br />
              </div>
            </div>

            <div className="twPc-divDesc">
              <i className="fa fa-map-marker"></i> {this.props.user.currentLocation}
            </div>
            <div className={this.props.user.bio ? "twPc-divDesc" : "hide"}>
              <p>{this.props.user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Followers.propTypes = {
  user: PropTypes.object
};

export default Followers;
