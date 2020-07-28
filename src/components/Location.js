import React from "react";

const Location = () => {
	return (
		<div className="d2">
			<div className="d2-1">
				<a href="location.html">
					<h1 className="location-heading">
						Accra, <br />
						Greater Accra
					</h1>
				</a>
				<p>
					<small>
						<span className="location-date">Feb 7th, 2020</span>
					</small>
					<br />
					<small>
						<i className="fas fa-cloud location-icon"></i>
						<span className="location-condition">Cloudy</span>
					</small>
				</p>
			</div>

			<div className="d2-2">
				<a href="location.html">
					<img src="resources/images/img-400.jpg" className="location-image" />
				</a>
			</div>
		</div>
	);
};

export default Location;
