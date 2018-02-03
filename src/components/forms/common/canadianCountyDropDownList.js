import React, {PropTypes} from 'react';

class CanadianCountyDropDownList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e)
  {
    e.preventDefault();
    this.props.changeValue(e.target.value, e.target.name);
  }

  render(){
    return (
      <select className={this.props.cssClass} key={this.props.name} ref={this.props.name} name={this.props.name} value={this.props.value} onChange={this.handleChange}>
        <option value="">Choose country</option>
        <option value="AB">Alberta</option>
        <option value="BC">British Columbia</option>
        <option value="MB">Manitoba</option>
        <option value="NB">New Brunswick</option>
        <option value="NL">Newfoundland and Labrador</option>
        <option value="NT">Northwest Territories</option>
        <option value="NS">Nova Scotia</option>
        <option value="NU">Nunavut</option>
        <option value="ON">Ontario</option>
        <option value="PE">Prince Edward Island</option>
        <option value="QC">Québec</option>
        <option value="SK">Saskatchewan</option>
        <option value="YT">Yukon</option>
        <option value=""></option>
      </select>
    );
  }
}

CanadianCountyDropDownList.defaultProps = {
  cssClass: 'form-control',
  name: 'YearDropdown',
  value: ''
};

  CanadianCountyDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default CanadianCountyDropDownList;
