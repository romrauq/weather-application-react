import React from "react";

const icon = {
	cloudy: "fas fa-cloud tab-icons",
	rain: "fas fa-cloud-showers-heavy tab-icons",
	cloud_sun: "fas fa-cloud-sun tab-icons",
	sunny: "fas fa-sun tab-icons",
};

const location_image = "./resources/images/location-image.jpg";

const Location = (props) => {
	return (
		<div className="location-component">
			<div className="location-component-child-1">
				<a href="location.html">
					<h1 className="location-heading">
						{props.country},<br />
						{props.city}
					</h1>
				</a>

				<p className="location-date">{props.date}</p>

				<div className="icon-info-container">
					<i className={icon.cloudy}></i>
					<span className="location-condition">{props.location_condition}</span>
				</div>
			</div>

			<div className="location-component-child-2">
				<a href="location.html">
					<img
						src={location_image}
						alt={props.alt}
						className="location-image"
					/>
				</a>
			</div>
		</div>
	);
};

export default Location;
