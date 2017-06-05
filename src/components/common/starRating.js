import React, {PropTypes} from "react";

class StarRating extends React.Component {
  render(){
    let greyStarsNumber;
    let maxStars = 5;

    let stars = 0;

    if (this.props.starRating !== '') {
      stars = this.props.starRating;
    }

    greyStarsNumber = maxStars - stars;

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
    })

    let reviewCount = '';

    if (this.props.includeReviewCount)
    {
      reviewCount = (<li className="reviewCount">{this.props.reviewCount == 1 ? this.props.reviewCount + ' Review' : this.props.reviewCount + ' Reviews'}</li>);
    }

    return (
      <ul className={this.props.className}>
        {yellowStars}
        {greyStars}
        {reviewCount}
      </ul>
    );
  }
}

StarRating.propTypes = {
  starRating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  includeReviewCount: PropTypes.bool,
  reviewCount: PropTypes.number
};

export default StarRating;
