import React from 'react';
import Terms from '../../components/content/static/terms';

const TermsPage = () => {

  window.scrollTo(0, 0);
  document.title = 'Terms of Use';

  let style = {
    backgroundImage: 'url(/static/img/contact-us.jpg)'
  };

  return (
      <div>
        <div className="bg-holder full text-center text-white infoPageWrapper">
          <div className="bg-mask"></div>
          <div style={style} className="bg-img infoImg" ></div>
          <div className="bg-front full-center">
            <div className="owl-cap">
              <h1 className="owl-cap-title fittext">Terms of Use</h1>
            </div>
          </div>
        </div>
      <div className="container">
        <div className="row row-wrap">
            <div className="gap gap-small"></div>
              <Terms />
          </div>
        </div>
      </div>
    );
};

export default TermsPage;
