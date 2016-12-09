import React, {PropTypes} from "react";

class StarRating extends React.Component {
  render(){
    var greyStars = 0;
    var maxStars = 5;

    greyStars = maxStars - this.props.starRating;

    var tmpYellow = [];
    for (var i = 0; i < this.props.starRating; i++) {
      tmpYellow.push(i);
    }

    var tmpGrey = [];
    for (var i = 0; i < greyStars; i++) {
      tmpGrey.push(i);
    }

    var yellowStars = tmpYellow.map(function (i) {
      return (<li key={i}><i className="fa fa-star"></i></li>);
    });

    var greyStars = tmpGrey.map(function (i) {
      return (<li key={i}><i className="fa fa-star-o"></i></li>);
    });

    return (
      <ul className={this.props.className}>
        {yellowStars}
        {greyStars}
      </ul>
    );
  }
}

StarRating.propTypes = {
  starRating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default StarRating;
