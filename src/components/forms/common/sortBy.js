import React, {PropTypes} from 'react';

class SortBy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.openSortBy = this.openSortBy.bind(this);
    this.state = { openSortBy: false, sortBy: this.props.value, sortByFriendly: this.props.valueFriendly };
  }

  updateSortBy(e) {
    e.preventDefault();
    this.setState({sortBy: e.currentTarget.getAttribute('data-type'), sortByFriendly: e.currentTarget.getAttribute('data-type-friendly'), openSortBy: false});
    this.props.updateSortBy(e.currentTarget.getAttribute('data-type'), e.currentTarget.getAttribute('data-type-friendly'));
  }

  openSortBy(e) {
    e.preventDefault();
    if (!this.state.openSortBy) {
      this.setState({openSortBy: true});
    } else {
      this.setState({openSortBy: false});
    }
  }


  render(){
    return (
      <div className={this.state.openSortBy ? "nav-drop booking-sort active-drop" : "nav-drop booking-sort"}>
        <h5 className="booking-sort-title">
          <a href="#" onClick={this.openSortBy}>Sort: {this.state.sortByFriendly}<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i></a></h5>
        <ul className="nav-drop-menu">
          <li><a href="#" data-type="PROMO" data-type-friendly="Recommended" onClick={this.updateSortBy}>Recommended</a></li>
          <li><a href="#" data-type="PRICE_AVERAGE" data-type-friendly="Price (low to high)" onClick={this.updateSortBy}>Price (low to high)</a></li>
          <li><a href="#" data-type="PRICE_REVERSE" data-type-friendly="Price (high to low)" onClick={this.updateSortBy}>Price (high to low)</a></li>
          <li><a href="#" data-type="QUALITY" data-type-friendly="Ranking (high to low)" onClick={this.updateSortBy}>Ranking (high to low)</a></li>
          <li><a href="#" data-type="QUALITY_REVERSE" data-type-friendly="Ranking (how to high)" onClick={this.updateSortBy}>Ranking (low to high)</a></li>
          <li><a href="#" data-type="PROXIMITY" data-type-friendly="Distance" onClick={this.updateSortBy}>Distance</a></li>
        </ul>
      </div>
    );
  }
}

SortBy.propTypes = {
  updateSortBy: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  valueFriendly: PropTypes.string.isRequired
};

export default SortBy;
