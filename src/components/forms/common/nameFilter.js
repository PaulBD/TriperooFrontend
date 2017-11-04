import React, {PropTypes} from 'react';

class NameFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
    this.state = { filteredName: '' };
  }

  updateFilter(event) {
    event.preventDefault();
    this.setState({ filteredName: event.target.value });
    this.props.updateFilter( event.target.value);
  }

  render(){
    return (

      <ul className="list booking-filters-list">
        <li><h5>{this.props.title}</h5></li>
        <li><input type="text" value={this.props.searchName} id="filtteredSearch" onChange={this.updateFilter} className="form-control" placeholder={this.props.placeHolder}/></li>
      </ul>
    );
  }
}

NameFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  searchName: PropTypes.string
};

export default NameFilter;
