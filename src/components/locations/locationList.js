import React, {PropTypes} from 'react';

const LocationList = ({locations}) => {
	let i = 0;
	return (
		<div className="row">
			{
			locations.map(location => {				

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
					<div key={location.inventoryReference}>
						<div className={cssClass}>
							<a className="hover-img" href={location.url}>
								<img src={location.image ? location.image : '/static/img/400x300.png'}  alt={location.regionName} onError={(e)=>{e.target.src='/static/img/400x300.png'}} />
								<h5 className="hover-title hover-hold">{location.regionName}</h5>
							</a>
						</div>
						{spacer}
					</div>
				);
			})
		}
		</div>
	);
};

LocationList.propTypes = {
	locations: PropTypes.array.isRequired
};

export default LocationList;
