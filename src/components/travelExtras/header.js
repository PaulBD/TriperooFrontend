import React, {PropTypes} from 'react';

class Header extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render(){
        
        let style = {
            backgroundImage: 'url(/static/img/' + this.props.contentType + '.jpg'
        };

        if (this.props.showSmallHeader)
        {
            return (
            <div className="top-area show-onload infoPage">
                  <div className="bg-holder full text-white">
                      <div className="bg-mask"></div>
                      <div className="bg-img" style={style}></div>
                      <div className="container">
                          <div className="row">
                              <div className="col-md-8 col-xs-7">
                                  <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/travel-extras">Travel Extras</a></li>
                                    <li className="breadcrumb-item active">{this.props.headerTitle}</li>
                                  </ol>
                                  <h1>{this.props.headerTitle}</h1>
                              </div>
                              <div className="col-md-4 col-xs-5">&nbsp;</div>
                          </div>
                      </div>
                  </div>
              </div>
            )
        }
        else {
         return (
            <div className="bg-holder full text-xs-center text-white holidayPage">
                <div className="bg-mask"></div>
                <div className="bg-img" style={style}></div>
                <div className="bg-front full-center">
                    <div className="owl-cap">
                        <h1 className="owl-cap-title fittext">{this.props.headerTitle}</h1>
                        <div className="owl-cap-price">
                        <small>{this.props.subHeaderTitle}</small>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
}

Header.propTypes = {
  headerTitle:  PropTypes.string.isRequired,
  subHeaderTitle:  PropTypes.string.isRequired,
  contentType:  PropTypes.string.isRequired,
  showSmallHeader: PropTypes.bool.isRequired
};

export default Header;