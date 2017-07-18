import React, {PropTypes} from 'react';
import TagList from '../common/tagList';

class FilterReviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tags:["Adventure","Arty","Backpackers","Budget","Business","Family","Foodies","Eco","History","Local Culture","Luxury","Nightlife","Outdoor","Solo","Spiritual","Students","Trendsters","Vegetarian","Wellness" ],
      selectedTags:[]
    };
    this.addTags = this.addTags.bind(this);
  }

  addTags(value) {
    this.setState({ selectedTags: value });
    this.props.filterReviews(value);
  }

  render() {
      return (
        <div>

          <div className="form-group">
            <label>Filter on Tags:</label>
            <TagList tags={this.state.tags} selectedTags={this.state.selectedTags} maxTags={30} readOnly={false} returnTags={this.addTags} />
          </div>
        </div>
      );
  }
}

FilterReviews.defaultProps = {
};

FilterReviews.propTypes = {
  filterReviews: PropTypes.func.isRequired
};

export default FilterReviews;

