import React, {PropTypes} from "react";

class StarRating extends React.Component {
  render(){
    let greyStarsNumber = 0;
    let maxStars = 5;

    greyStarsNumber = maxStars - this.props.starRating;

    let tmpYellow = [];
    for (let i = 0; i < this.props.starRating; i++) {
      tmpYellow.push(i);
    }

    let tmpGrey = [];
    for (let i = 0; i < greyStarsNumber; i++) {
      tmpGrey.push(i);
    }

    let yellowStars = tmpYellow.map(function (i) {
      return (<li key={i}><i className="fa fa-star"></i></li>);
    });

    let greyStars = tmpGrey.map(function (i) {
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
