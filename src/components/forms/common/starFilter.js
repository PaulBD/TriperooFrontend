import React, {PropTypes} from 'react';

class StarFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = { starFilterList: ['1','2','3','4', '5'] };
  }

  updateFilter(e) {
    e.preventDefault();
    let starFilterList = this.state.starFilterList;
    let isAlreadyInList = false;
    let newTag = e.currentTarget.getAttribute('data-type');

    for (let i = 0; i < starFilterList.length; i++) {
      if (starFilterList[i] == newTag)
      {
        isAlreadyInList = true;
        starFilterList.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      starFilterList.push(newTag);
    }

    this.setState({starFilterList: starFilterList});
    this.props.updateFilter(starFilterList);
  }

  render(){
    return (
      <span>
        <a href="#" onClick={this.updateFilter} data-type="1" className="star">
              <span className={this.state.starFilterList.includes('1') ? "fa-stack hotelStarWrapper orange fa-2x" : "fa-stack hotelStarWrapper fa-2x"}>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">1</span>
              </span>
            </a>
            <a href="#" onClick={this.updateFilter} data-type="2" className="star">
              <span className={this.state.starFilterList.includes('2') ? "fa-stack hotelStarWrapper orange fa-2x" : "fa-stack hotelStarWrapper fa-2x"}>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">2</span>
              </span>
            </a>
            <a href="#" onClick={this.updateFilter} data-type="3" className="star">
              <span className={this.state.starFilterList.includes('3') ? "fa-stack hotelStarWrapper orange fa-2x" : "fa-stack hotelStarWrapper fa-2x"}>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">3</span>
              </span>
            </a>
            <a href="#" onClick={this.updateFilter} data-type="4" className="star">
              <span className={this.state.starFilterList.includes('4') ? "fa-stack hotelStarWrapper orange fa-2x" : "fa-stack hotelStarWrapper fa-2x"}>
                <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">4</span>
              </span>
            </a>
            <a href="#" onClick={this.updateFilter} data-type="5" className="star">
             <span className={this.state.starFilterList.includes('5') ? "fa-stack hotelStarWrapper orange fa-2x" : "fa-stack hotelStarWrapper fa-2x"}>
                 <i className="fa fa-star fa-stack-1x hotelStar"></i>
                <span className="fa-stack-1x hotelStarNumber">5</span>
              </span>
            </a>
      </span>
    );
  }
}

StarFilter.propTypes = {
  updateFilter: PropTypes.func
};

export default StarFilter;
