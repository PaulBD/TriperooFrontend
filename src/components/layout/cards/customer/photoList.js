import React, {PropTypes} from 'react';

class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.removeImage = this.removeImage.bind(this);
  }

  componentDidMount() {
    $(this.refs.removePhoto).tooltip();
  }

  removeImage(e) {
    e.preventDefault();
    this.props.removeImage(this.props.imageReference);
  }

  render() {
    return (
      <div className="card" key={this.props.key}>
        <img class="card-img-top" src={this.props.imageUrl} />
        <div className="card-footer">
          <small className="text-muted">Likes {this.props.likeCount} &bull; <a href="#" ref="removePhoto" onClick={this.removeImage} data-id={this.props.imageReference} className={this.props.isActiveUser ? "removePhoto" : "hide"} data-toggle="tooltip" data-placement="top" title="Remove Photo" >Remove Photo</a></small>
        </div>
      </div>
    );
  }
}

PhotoList.defaultProps = {

};

PhotoList.propTypes = {
  likeCount: PropTypes.number,
  key: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageReference: PropTypes.string.isRequired,
  removeImage: PropTypes.func.isRequired,
  isActiveUser: PropTypes.bool.isRequired
};

export default PhotoList;
