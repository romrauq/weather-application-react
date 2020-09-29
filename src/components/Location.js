import React from "react";

const location_image = "./resources/images/location-image.jpg";

const Location = (props) => {
	return (
		<div className="location-component">
			<div className="location-component-child-1">
				<h1 className="location-heading">
					{props.country}
					<br />
					{props.city}
				</h1>

				<p className="location-date">{props.date}</p>

				<div className="icon-info-container">
					<i className={props.location_icon}></i>
					<span className="location-condition">{props.location_condition}</span>
				</div>
			</div>

			<div className="location-component-child-2">
				<img src={location_image} alt={props.alt} className="location-image" />
			</div>
		</div>
	);
};

export default Location;
