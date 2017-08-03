import React, {PropTypes} from 'react';

class QuantityList extends React.Component {
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

    let quantities = [{
        "value": "0",
        "name": "0"
      },
      {
        "value": "1",
        "name": "1"
      }, 
      {
        "value": "2",
        "name": "2"
      },
      {
        "value": "3",
        "name": "3"
      },
      {
        "value": "4",
        "name": "4"
      },
      {
        "value": "5",
        "name": "5"
      },
      {
        "value": "6",
        "name": "6"
      },
      {
        "value": "7",
        "name": "7"
      },
      {
        "value": "8",
        "name": "8"
      },
      {
        "value": "9",
        "name": "9"
      },
      {
        "value": "10",
        "name": "10"
      }
    ];

    return (
        <select className={this.props.cssClass} key={this.props.name} ref={this.props.name} name={this.props.name} value={this.props.value} onChange={this.handleChange}>
          {quantities.map(function(quantity){
              return <option key={quantity.value}>{quantity.name}</option>;
            })
          }
        </select>
        );
    }
}

QuantityList.defaultProps = {
  cssClass: 'form-control searchSelect',
  name: 'dropdown',
  value: ''
};

QuantityList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default QuantityList;