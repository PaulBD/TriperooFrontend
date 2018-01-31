import React, {PropTypes} from 'react';

class YearDropDownList extends React.Component {
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
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="2032">2032</option>
        <option value="2033">2033</option>
        <option value="2034">2034</option>
        <option value="2035">2035</option>
        <option value="2036">2036</option>
        <option value="2037">2037</option>
      </select>
    );
  }
}

YearDropDownList.defaultProps = {
  cssClass: 'form-control',
  name: 'YearDropdown',
  value: ''
};

YearDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default YearDropDownList;
