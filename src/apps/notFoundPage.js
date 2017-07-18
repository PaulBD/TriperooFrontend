import React, {PropTypes} from 'react';

export default class NotFoundPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found - Triperoo';
  }
  
  render(){
    let style = {
      backgroundImage: 'url(/static/img/about.jpg)'
    };

    return (
        <div>
            <div className="bg-holder full text-center text-white infoPageWrapper">
                <div className="bg-mask"></div>
                <div style={style} className="bg-img infoImg" ></div>
                <div className="bg-front full-center">
                    <div className="owl-cap">
                        <h1 className="owl-cap-title fittext">This is embarressing!</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row row-wrap">
                    <div className="gap gap-small"></div>
                        <div className="col-md-12">
                        <p>An error has occurred. Blah Blah Blah</p>
                        <p>An error has occurred. Blah Blah Blah</p>
                        <p>An error has occurred. Blah Blah Blah</p>
                        <p>An error has occurred. Blah Blah Blah</p>
                        <p>An error has occurred. Blah Blah Blah</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}