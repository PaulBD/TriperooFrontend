import React, {PropTypes} from 'react';
let titleCase = require('title-case');

class Overview extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { showMore: false };
        this.onHandleTextClick = this.onHandleTextClick.bind(this);
    }

    onHandleTextClick(event) {
        event.preventDefault();
        if (this.state.showMore) {
            this.setState({ showMore: false });
        }
        else {
            this.setState({ showMore: true });
        }
    }

    render(){

        let summary = this.props.summary;

        if ((summary != null) && (summary.length > 0))
        {
            let showMore = 'Read Less';

            if (!this.state.showMore)
            {
                if (summary.length > 870)
                {
                    summary = summary.substring(0, 870) + '...';
                    showMore = 'Read More';
                }
                else {
                    showMore = '';
                }
            }

            return (
                <div>
                    <h4>Why {titleCase(this.props.locationName)}?</h4>
                    <p dangerouslySetInnerHTML={{__html: summary}}></p>
                    <p><a href="#" onClick={this.onHandleTextClick}>{showMore}</a></p>
                </div>
            );
        } else {
            return null;
        }
    }
}

Overview.defaultProps = {
    showMore: false,
    locationName: '',
    summary: ''
};

Overview.propTypes = {
  locationName: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  showMore: PropTypes.bool
};

export default Overview;
