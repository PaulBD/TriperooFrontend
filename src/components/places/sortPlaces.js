import React, {PropTypes} from 'react';

class Sort extends React.Component {
  constructor(props, context) {
    super(props, context);
    	this.state = { sortBy: 'recommended', sortByFriendly: 'Recommended', currency: 'GBP', currencyFriendly: 'GBP', sortCondition: false, currencyCondition: false };
   		this.handleSortChange = this.handleSortChange.bind(this);
   		this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
   		this.handleSortDropDownList = this.handleSortDropDownList.bind(this);
   		this.handleCurrencyDropDownList = this.handleCurrencyDropDownList.bind(this);
   	}

	handleSortChange(e) {
    	e.preventDefault();
    	this.setState({ sortBy: e.target.getAttribute('data-ref'), sortByFriendly: e.target.getAttribute('data-friendly') });
		this.props.handleSort(e.target.getAttribute('data-ref'), this.state.currency)
	}

	handleCurrencyChange(e) {
    	e.preventDefault();
    	this.setState({ currency: e.target.getAttribute('data-ref'), currencyFriendly: e.target.getAttribute('data-friendly') });
		this.props.handleSort(this.state.sortBy, e.target.getAttribute('data-ref'))
	}

	handleSortDropDownList(e) {
		e.preventDefault();
		if (this.state.sortCondition) {
    		this.setState({ sortCondition: false });
	    } 
	    else {
	    	this.setState({ sortCondition: true });
	    }
	}

	handleCurrencyDropDownList(e) {
		e.preventDefault();
		if (this.state.currencyCondition) {
    		this.setState({ currencyCondition: false });
	    } 
	    else {
	    	this.setState({ currencyCondition: true });
	    }
	}

	render(){

		let currency = '';

		if (this.props.pageType == 'hotels') {
			currency = (

				<div className={this.state.currencyCondition ? "nav-drop booking-sort active-drop" :"nav-drop booking-sort"}  id="currency" onClick={this.handleCurrencyDropDownList}>
					<h5 className="booking-sort-title">
						<a href="#">Currency: {this.state.currencyFriendly}
							<i className="fa fa-angle-down"></i>
							<i className="fa fa-angle-up"></i>
						</a>
					</h5>
	                <ul className="nav-drop-menu">
	                    <li><a href="#" onClick={this.handleCurrencyChange} data-ref="gbp" data-friendly="GBP">GBP</a></li>
	                    <li><a href="#" onClick={this.handleCurrencyChange} data-ref="eur" data-friendly="EUR">EUR</a></li>
	                </ul>
	            </div>
			);
		};

	return (

		<div className="sort">
			<div className={this.state.sortCondition ? "nav-drop booking-sort active-drop" :"nav-drop booking-sort"}  id="sort" onClick={this.handleSortDropDownList}>
				<h5 className="booking-sort-title">
					<a href="#">Sort: {this.state.sortByFriendly}
						<i className="fa fa-angle-down"></i>
						<i className="fa fa-angle-up"></i>
					</a>
				</h5>
                <ul className="nav-drop-menu">
                    <li><a href="#" onClick={this.handleSortChange} data-ref="recommended" data-friendly="Recommended">Recommended</a></li>
                    <li><a href="#" onClick={this.handleSortChange} data-ref="priceAsc" data-friendly="Price (low to high)">Price (low to high)</a></li>
                    <li><a href="#" onClick={this.handleSortChange} data-ref="priceDesc" data-friendly="Price (high to low)">Price (hight to low)</a></li>
                    <li><a href="#" onClick={this.handleSortChange} data-ref="ranking" data-friendly="Ranking">Ranking</a></li>
                    <li><a href="#" onClick={this.handleSortChange} data-ref="distance" data-friendly="Distance">Distance</a></li>
                    <li><a href="#" onClick={this.handleSortChange} data-ref="reviews" data-friendly="Number of Reviews">Number of Reviews</a></li>
                </ul>
            </div>

			{currency}
		</div>
		);
	}
}

Sort.propTypes = {
  handleSort: PropTypes.func,
  pageType: PropTypes.string.isRequired
};

export default Sort;
