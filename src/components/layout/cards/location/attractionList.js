import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authenticationActions from '../../../../actions/customer/authenticationActions';
import ReviewIcon from '../../location/reviewIcon';
import PhotoIcon from '../../location/photoIcon';
import BookmarkIcon from '../../location/bookmarkIcon';
import VisitIcon from '../../location/visitIcon';
let titleCase = require('title-case');

class LocationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleMissingImage = this.handleMissingImage.bind(this);
  }

  handleMissingImage(e) {
    e.target.src = '/static/img/placeholder-large.png';
  }

  render() {
	let i = 0;
    console.log(this.props.locations);
	return (
		<div className="row">
			{
			this.props.locations.map(location => {

				i += 1;

				let spacer = '';

				if (this.props.cssClass == 'col-md-4') {
          switch (i) {
            case 3:
            case 6:
            case 9:
            case 12:
            case 15:
            case 18:
            case 21:
            case 24:
              spacer = <div className="gap gap-small"></div>;
              break;
          }
        }
        else {
          switch (i) {
            case 4:
            case 7:
            case 10:
            case 12:
            case 15:
            case 18:
            case 21:
            case 24:
              spacer = <div className="gap gap-small"></div>;
              break;
          }
        }

				let locationType = "";


        const bgImage = {
          backgroundImage: "url(" + location.productImage.imageURL + ")"
        };

        if (location.productCategories.productCategory.length > 0)
        {
          locationType = location.productCategories.productCategory[0].category;
        }



				return (
					<div className={this.props.cssClass} key={location.productCode}>
						<div className="hover-img bgImage attractionImage" style={bgImage}>
							<div className="hover-inner hover-inner-block hover-inner-bottom hover-inner-bg-black hover-hold">
                <a  href="">
								<div className="text-small">
									<h5>{location.productName.en}</h5>
									<p className="">{titleCase(locationType)}</p>
								</div>
                </a>
							</div>
						</div>
					</div>
				);
			})
		}
		</div>
	);
	}
}

LocationList.defaultProps = {
  locations: [],
  cssClass: 'col-md-4'
};

LocationList.propTypes = {
	locations: PropTypes.array.isRequired,
	cssClass: PropTypes.string,
  authActions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currency: state.currency,
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authenticationActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
