import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class overview extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true, overview: '', showMore: 1 };
        this.onHandleTextClick = this.onHandleTextClick.bind(this);
    }

    onHandleTextClick(event) {
        event.preventDefault();
        if (this.state.showMore) {
            this.setState({ showMore: 0 });
        }
        else {
            this.setState({ showMore: 1 });
        }
    }

    render(){

        let overview = this.props.overview;

        let showMore = 'Read Less';

        if (this.state.showMore == 1)
        {
            if (overview.length > 480)
            {
                overview = overview.substring(0, 480) + '...';
                showMore = 'Read More';
            }
        }

        return (
            <div>
                <h4>Why {titleCase(this.props.name)}?</h4>
                <p>{overview}</p>
                <p><a href="#" onClick={this.onHandleTextClick}>{showMore}</a></p>
            </div>
        );
    }
}

overview.defaultProps = {
    showMore: false
};

overview.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  showMore: PropTypes.number
};

export default overview;
