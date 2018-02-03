import React, {PropTypes} from 'react';

class AustraliaCountyDropDownList extends React.Component {
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
        <option value="AC">Australian Capital</option>
        <option value="NW">New South Wales</option>
        <option value="NO">Northern Territory</option>
        <option value="QL">Queensland</option>
        <option value="SA">South Australia</option>
        <option value="TS">Tasmania</option>
        <option value="VC">Victoria</option>
        <option value="WT">Western Australia</option>
      </select>
    );
  }
}

AustraliaCountyDropDownList.defaultProps = {
  cssClass: 'form-control',
  name: 'YearDropdown',
  value: ''
};

AustraliaCountyDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default AustraliaCountyDropDownList;
