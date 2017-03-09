import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reviewsActions from '../../actions/reviewsActions';
import ReviewCard from './card';

class Reviews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { reviews: [] };
  }

  componentWillMount() { 
    this.props.actions.loadReviews(this.props.searchType, this.props.limit, this.props.offset);
  }

    render(){
    const {reviews} = this.props;

    let title = null;

    if (this.props.showTitle) {
      title = (
        <div>
          <h3 className="mb20">Share The Knowledge</h3>
          <p>Community is the heart of everything we do, share tips on where to go and what to do with other<br />like-minded people and help others discover amazing places, even earn commission whilst you do it!</p>
        </div>
      );
    }

    return (
        <div>
            {title}
            <div className="gap gap-small"></div>
            <ReviewCard reviews={reviews} maxTags={5} />
        </div>    
        );
    }
}

Reviews.defaultProps = {
  showTitle: true
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchType: PropTypes.string.isRequired,
  searchId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  showTitle: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    reviews: state.reviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reviewsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);