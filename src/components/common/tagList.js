import React, {PropTypes} from 'react';

const TagList = ({tags}) => {
  
  return (
    <p className="tagCollection">
    <strong>Recommended For:</strong><br />
      {
        tags.map(tag => {
        return (
          <span className="tag tag-default" key={tag}>{tag}</span> 
          );
        })
      }
    </p>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired
};

export default TagList;
