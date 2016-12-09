import React from "react";

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
        return (<li><i className="fa fa-star"></i></li>);
      });

      var greyStars = tmpGrey.map(function (i) {
        return (<li><i className="fa fa-star-o"></i></li>);
      });

      return (
        <ul className="icon-list list-inline-block mb0 last-minute-rating">
          {yellowStars}
          {greyStars}
        </ul>
      );
    }
  }

SearchList.propTypes = {
  starRating: PropTypes.int.isRequired
};

export default StarRating;
