import React, {PropTypes} from 'react';

class CardTypeDropDownList extends React.Component {
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
        <option value="VI">Visa</option>
        <option value="CA">MasterCard</option>
        <option value="E">Visa Electron</option>
        <option value="TO">Maestro</option>
        <option value="AX">American Express</option>
      </select>
    );
  }
}

CardTypeDropDownList.defaultProps = {
  cssClass: 'form-control',
  name: 'MonthDropdown',
  value: ''
};

CardTypeDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default CardTypeDropDownList;
