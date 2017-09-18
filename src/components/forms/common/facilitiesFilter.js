import React, {PropTypes} from 'react';

class FacilitiesFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = { typeFilterList: [] };
  }

  updateFilter(e) {
    let typeFilterList = this.state.typeFilterList;
    let isAlreadyInList = false;
    let newTag = e.currentTarget.getAttribute('data-type');

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
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="wi-fi" checked={this.state.typeFilterList.includes("wi-fi")}  />Wi-Fi (55)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onClick={this.updateFilter} data-type="parking" checked={this.state.typeFilterList.includes("parking")} />Parking (264)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Airport Shuttle (137)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Fitness Center (15)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Non-Smoking Rooms (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Indoor Pool (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Spa (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Family Rooms (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Pet Friendly (20)</label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" />Restaurant (20)</label>
            </div>
      </span>
    );
  }
}

FacilitiesFilter.propTypes = {
  updateFilter: PropTypes.func
};

export default FacilitiesFilter;
