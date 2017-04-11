import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportActions from '../../actions/airportActions';

class AirportList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.airportActions.loadAirports();
  }

  handleChange(e) {
    e.preventDefault();
    this.props.changeValue(e.target.value);
  }

  render(){
    console.log(this.props.selectedValue);
    let airportList = this.props.airportList.map(airport  => {
      return <option key={airport.code} value={airport.code} selected={this.props.selectedValue == airport.code ? true : false}>{airport.name}</option>;
    })

    return (
        <select className={this.props.cssClass} ref={this.props.name} name={this.props.name} selected={this.props.value} onChange={this.handleChange}>
          <option>Please Select</option>
          {airportList}
        </select>
      );
    }
}

AirportList.defaultProps = {
  cssClass: 'form-control searchSelect',
  name: 'dropdown',
  selectedValue: '',
  airportList: []
};

AirportList.propTypes = {
  cssClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  changeValue: PropTypes.func,
    airportList: PropTypes.array,
    airportActions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
     return {
        isFetching: state.airports.isFetching ? state.airports.isFetching : false,
        airportList: state.airports.airportList ? state.airports.airportList : []
    };
}

function mapDispatchToProps(dispatch) {
  return {
    airportActions: bindActionCreators(airportActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportList);