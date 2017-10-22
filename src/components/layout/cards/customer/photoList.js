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

    let style = {
      backgroundImage: 'url(' +  this.props.imageUrl + ')'
    };


    return (
      <div className="col-md-4" key={this.props.key}>
        <div className="hover-img bgImage" style={style}>
          <ul className={this.props.isActiveUser ? "hover-icon-group-center-top" : "hide"}>
            <li><a href="#" ref="removePhoto" onClick={this.removeImage} data-id={this.props.imageReference} className="removePhoto" data-toggle="tooltip" data-placement="top" title="Remove Photo" ><i className="fa fa-remove" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

PhotoList.defaultProps = {

};

PhotoList.propTypes = {
  key: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageReference: PropTypes.string.isRequired,
  removeImage: PropTypes.func.isRequired,
  isActiveUser: PropTypes.bool.isRequired
};

export default PhotoList;
