import React, {PropTypes} from 'react';
import Loader from '../common/loadingDots';
import Item from './navigationItem';
import initialState from '../../reducers/initialState';
let titleCase = require('title-case');

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.state = { isLoading: false };
  }

  render() {
        return (            
          <div className="search-tabs search-tabs-bg search-tabs-to-top">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane fade in active text-xs-center" id="tab-1">
                  <h2 className="text-xs-center">Explore, Plan &amp; Book Your Visit to {titleCase(this.props.name)}</h2>
                  <div className="gap gap-small"></div>
                  <ul className="list text-xs-center list-inline user-profile-statictics mb30 l30">
                    <Item item={this.props.place.data.hotels} cssClass="fa fa-bed user-profile-statictics-icon" />
                    <Item item={this.props.place.data.flights} cssClass="fa fa-plane user-profile-statictics-icon" />
                    <Item item={this.props.place.data.attractions} cssClass="fa fa-ticket user-profile-statictics-icon" />
                    <Item item={this.props.place.data.restaurants} cssClass="fa fa-cutlery user-profile-statictics-icon" />
                    <Item item={this.props.place.data.bars} cssClass="fa fa-glass user-profile-statictics-icon" />
                    <Item item={this.props.place.data.reviews} cssClass="fa fa-comment user-profile-statictics-icon" />
                    <Item item={this.props.place.data.questions} cssClass="fa fa-question user-profile-statictics-icon" />
                  </ul>                        
                </div>
              </div>
            </div>
          </div> 
    );
  }
}

Navigation.defaultProps = {
  place: initialState.place
};

Navigation.propTypes = {
    place: PropTypes.object.isRequired,
    name: PropTypes.string,
};


export default Navigation;