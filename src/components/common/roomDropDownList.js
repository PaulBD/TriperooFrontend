import React, {PropTypes} from 'react';

class RoomDropDownList extends React.Component {
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

    let rooms = [{
        "value": "D20",
        "name": "Double - 2 adults"
      }, 
      {
        "value": "T20",
        "name": "Twin - 2 adults"
      },
      {
        "value": "T11",
        "name": "Twin - 1 adult"
      },
      {
        "value": "S10",
        "name": "Single - 1 adult"
      },
      {
        "value": "T12",
        "name": "Triple - 1 adult 2 children"
      },
      {
        "value": "T21",
        "name": "Triple - 2 adults 1 child"
      },
      {
        "value": "F13",
        "name": "Triple - 3 adults"
      },
      {
        "value": "F13",
        "name": "Family - 1 adult 3 children"
      },
      {
        "value": "F22",
        "name": "Family - 2 adults 2 children"
      },
      {
        "value": "F23",
        "name": "Family - 2 adults 3 children"
      },
      {
        "value": "F31",
        "name": "Family - 3 adults 1 child"
      },
      {
        "value": "F32",
        "name": "Family - 3 adults 2 children"
      }
    ]

    let roomList = rooms.map(function(room){
      return <option key={room.value}>{room.name}</option>;
    })
    return (
        <select className={this.props.cssClass} ref={this.props.name} name={this.props.name} selected={this.props.value} onChange={this.handleChange}>
          {roomList}
        </select>
        );
    }
}

RoomDropDownList.defaultProps = {
  cssClass: 'form-control searchSelect',
  name: 'dropdown',
  value: ''
};

RoomDropDownList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func
};

export default RoomDropDownList;