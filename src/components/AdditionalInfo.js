import React from "react";

const AdditionalInfo = (props) => {
	return (
		<div className="additional-info-component">
			{/* <h3 className="additional-info-heading">Additional Information</h3> */}
			<div className="additional-info-sections">
				<div className="additional-info-section">
					<p className="additional-info-title">Precipitation</p>
					<p className="additional-info-status">{props.precipitation}%</p>
				</div>
				<div className="additional-info-section middle-info-section">
					<p className="additional-info-title">Humidity</p>
					<p className="additional-info-status">{props.humidity}%</p>
				</div>
				<div className="additional-info-section">
					<p className="additional-info-title">Wind Speed</p>
					<p className="additional-info-status">{props.windspeed}Km/h</p>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
