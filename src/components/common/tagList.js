import React, {PropTypes} from 'react';

class TagList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.selectTag = this.selectTag.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.state = { selectedTags: [] };
  }

  componentWillReceiveProps(props)
  {
    this.state = { selectedTags: this.props.selectedTags };
  }

  selectTag(e) {
    let selectedTags = this.state.selectedTags;
    let isAlreadyInList = false;
    let newTag = e.target.getAttribute('data-name');

    for (let i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i] == newTag)
      {
        isAlreadyInList = true;
        selectedTags.splice(i, 1);
      }
    }

    if (!isAlreadyInList)
    {
      selectedTags.push(newTag);
    }

    this.setState({selectedTags: selectedTags});

    this.props.returnTags(selectedTags);
  }

  getIndex(value, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
  }

  render(){
    return (
      <p className="tagCollection">
        {
          this.props.tags.slice(0, this.props.maxTags).map(tag => {
            if (this.props.readOnly)
            {
              return (
                <span className="tagReadOnly tag-default" key={tag}>{tag} {this.state.selectedTags.includes(tag)}</span>
              );
            }
            else {
              return (
                <span className={this.getIndex(tag, this.state.selectedTags) > -1 ? "tag tag-default selected" : "tag tag-default"} key={tag} onClick={this.selectTag} data-name={tag}>{tag} {this.state.selectedTags.includes(tag)}</span>
              );
            }
          })
        }
      </p>
    );
  }
}

TagList.defaultProps = {
  readOnly: true,
  selectedTags: [],
  tags:[]
};

TagList.propTypes = {
  returnTags: PropTypes.func,
  tags: PropTypes.array.isRequired,
  maxTags: PropTypes.number.isRequired,
  selectedTags: PropTypes.array.isRequired,
  readOnly: PropTypes.bool
};

export default TagList;
