import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    let style = {
      display: 'none'
    };

    if (this.props.showLoader == 1)
    {
      style.display = 'block';
    }

    return (
    <div className="spinner" style={style}>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
    );
  }
}

LoadingDots.defaultProps = {
  showLoader: false
};

LoadingDots.propTypes = {
  showLoader: PropTypes.number
};

export default LoadingDots;
