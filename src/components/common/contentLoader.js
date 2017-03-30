import React, {PropTypes} from 'react';

class ContentLoader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    let style = {
      display: 'none'
    };

    if (this.props.showLoader)
    {
      style.display = 'block';
    }

    return (
      <div className="timeline-wrapper"  style={style}>
          <div className="timeline-item">
              <div className="animated-background facebook">
                  <div className="background-masker header-top"></div>
                  <div className="background-masker header-left"></div>
                  <div className="background-masker header-right"></div>
                  <div className="background-masker header-bottom"></div>
                  <div className="background-masker subheader-left"></div>
                  <div className="background-masker subheader-right"></div>
                  <div className="background-masker subheader-bottom"></div>
                  <div className="background-masker content-top"></div>
                  <div className="background-masker content-first-end"></div>
                  <div className="background-masker content-second-line"></div>
                  <div className="background-masker content-second-end"></div>
                  <div className="background-masker content-third-line"></div>
                  <div className="background-masker content-third-end"></div>
                  <div className="background-masker content-forth-line"></div>
                  <div className="background-masker content-forth-end"></div>
              </div>
          </div>
      </div>
    );
  }
}

ContentLoader.defaultProps = {
  showLoader: false
};

ContentLoader.propTypes = {
  showLoader: PropTypes.bool
};

export default ContentLoader;
