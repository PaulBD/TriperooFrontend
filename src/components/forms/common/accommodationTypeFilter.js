import React, {PropTypes} from 'react';

class AccommodationTypeFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = { typeFilterList: [] };
  }

  updateFilter(e) {
    let typeFilterList = this.state.typeFilterList;
    let isAlreadyInList = false;
    let newTag = parseInt(e.currentTarget.getAttribute('data-type'));

    for (let i = 0; i < typeFilterList.length; i++) {
      if (typeFilterList[i] == newTag)
      {
        isAlreadyInList = true;
        typeFilterList.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      typeFilterList.push(newTag);
    }

    this.setState({typeFilterList: typeFilterList});
    this.props.updateFilter(typeFilterList);
  }

  render(){
    return (
      <span>
        <div className="checkbox">
          <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="1" checked={this.state.typeFilterList.includes(1)} />Hotel</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="2" checked={this.state.typeFilterList.includes(2)} />Suite</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="3" checked={this.state.typeFilterList.includes(3)} />Resort</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="4" checked={this.state.typeFilterList.includes(4)} />Vacation Rental</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="5" checked={this.state.typeFilterList.includes(5)} />Bed & Breakfast</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="6" checked={this.state.typeFilterList.includes(6)} />All Inclusive</label>
            </div>
      </span>
    );
  }
}

AccommodationTypeFilter.propTypes = {
  updateFilter: PropTypes.func
};

export default AccommodationTypeFilter;
