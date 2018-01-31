import React, {PropTypes} from 'react';

class MonthDropDownList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e)
  {
    e.preventDefault();
    this.props.changeValue(e.target.value);
  }

  render(){
    return (
      <select className={this.props.cssClass} key={this.props.name} ref={this.props.name} name={this.props.name} value={this.props.value} onChange={this.handleChange}>
        <option value="">Please Select</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">Map</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    );
  }
}

MonthDropDownList.defaultProps = {
  cssClass: 'form-control',
  name: 'MonthDropdown',
  value: ''
};

MonthDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default MonthDropDownList;
