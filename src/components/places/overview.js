import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class Overview extends React.Component {
    render(){
    return (
            <div>
                <h4>Why {titleCase(this.props.name)}?</h4>
                {this.props.overview}
            </div>
        );
    }
}
Overview.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

export default Overview;
