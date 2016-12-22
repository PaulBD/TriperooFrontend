import React, {PropTypes} from 'react';

class TagList extends React.Component {
  
  render(){
    return (
      <p className="tagCollection">
      <strong>Recommended For:</strong><br />
        {
          this.props.tags.slice(0, this.props.maxTags).map(tag => {
          return (
            <span className="tag tag-default" key={tag}>{tag}</span> 
            );
          })
        }
      </p>
    );
  }
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  maxTags: PropTypes.number.isRequired
};

export default TagList;
