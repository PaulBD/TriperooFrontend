import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as airportActions from '../../actions/location/travelContent/airportActions';

class AirportList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = { isLoading: false };
  }

  componentDidMount() {
    this.loadAirports();
  }

  loadAirports() {
    this.setState({isLoading: true});
    this.props.airportActions.loadAirports()
      .then(() => this.setState({isLoading: false}))
      .catch(error => {
        this.setState({isLoading: false});
      });
  }

  handleChange(e) {
    e.preventDefault();
    this.props.changeValue(e.target.value);
  }

  render(){

    return (
        <select className={this.props.cssClass} ref={this.props.name} name={this.props.name} value={this.props.selectedValue} onChange={this.handleChange}>
          <option key="Select">Please Select</option>
          {
            !this.state.isLoading ?
            this.props.airportList.map(airport  => {
              return <option key={airport.code} value={airport.code} >{airport.name}</option>;
            }) : <option key="loading">Loading Airport</option>
          }
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
  airportActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
 return {
    airportList: state.airports.airportList ? state.airports.airportList : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    airportActions: bindActionCreators(airportActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AirportList);
