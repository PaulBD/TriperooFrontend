import React, {PropTypes} from 'react';

const SearchList = ({searches}) => {

  var searchCount = searches.length; 

    var style = {
      display: 'none'
    };

    if (searchCount > 0)
    {
    	style.display = 'block';
    }
    
  return (

    <div style={style}>
    <ul className="ui-autocomplete">
      {searches.map(search => {
      	let icon = '';

      	switch (search.type)
      	{
      		case 'city':
      			icon = 'fa fa-map-marker';
      		break;
      		case 'country':
      			icon = 'fa fa-global';
      		break;
      		case 'hotel':
      			icon = 'fa fa-bed';
      		break;
      		case 'restaurant':
      			icon = 'fa fa-cutlery';
      		break;
      		case 'attraction':
      			icon = 'fa fa-ticket';
      		break;
      		case 'bar':
      			icon = 'fa fa-glass';
      		break;
      	}

        return (<li key={search.id} className="ui-menu-item"><a href={search.url}><span><i className={icon}></i></span> {search.value}</a></li>);
    }
      )}
      </ul>
    </div>
  );
};

SearchList.propTypes = {
  searches: PropTypes.array.isRequired
};

export default SearchList;
