import React, {PropTypes} from 'react';
import Place from './place';

const PlaceList = ({places}) => {
		let i = 0;
	return (
		<div className="row">
			{
			places.map(place => {				

				i += 1;
				let cssClass = "col-md-6";

				if (i > 4) {
					cssClass = "col-md-4";
				}

				let spacer = '';

				switch (i)
				{
					case 2:
					case 4:
			  			spacer = <div className="gap gap-small"></div>;
			  			break;
				}

				return (
					<div key={place.id}>
                    	<Place  name={place.name} imageUrl={place.imageUrl} url={place.url} cssClass={cssClass} />
                    	{spacer}
					</div>
				);
			})
		}
		</div>
	);
}

PlaceList.propTypes = {
  places: PropTypes.array.isRequired
};

export default PlaceList;
