import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../../actions/location/articleActions';
import Toastr from 'toastr';

class LocationArticles extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { loadingArticles : true };
  }

  componentWillMount() {
    this.loadArticles();
  }

  loadArticles() {
    this.props.articleActions.loadArticles(this.props.locationId)
      .then(() => {
        this.setState({loadingArticles: false});
      })
      .catch(error => {
        Toastr.error(error);
        this.setState({loadingArticles: false, errors: error});
      });
  }

  render(){

    if ((!this.props.isLoading) && (this.props.articles.length > 0)) {
      return (
        <div className="row">
          <div className="col-md-12">
          {
            this.props.articles.map(article => {
              return(
                <div className="card" key={article.name}>
                  <img className="card-img-top" src={article.image} alt={article.name} />
                    <div className="card-block">
                      <h4 className="card-title">{article.name}</h4>
                      <p className="card-text">{article.summary}</p>
                      <a href={article.path} className="btn btn-primary">View Article</a>
                    </div>
                </div>
              );
            })
          }
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

LocationArticles.defaultProps = {
  locationId: 0,
  isLoading: false,
  articles: []
};

LocationArticles.propTypes = {
  locationId: PropTypes.number,
  locationName: PropTypes.string,
  isLoading: PropTypes.bool,
  articleActions: PropTypes.object.isRequired,
  articles: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.articles.isFetching,
    articles: state.articles.articles ? state.articles.articles : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    articleActions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationArticles);
