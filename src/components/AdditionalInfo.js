import React from "react";

const GeneralInfo = () => {
	return (
		<div className="general-info-component">
			<p className="general-info-heading">Additional information:</p>
			<div className="general-info-sections">
				<div className="general-info-section">
					<p className="general-info-title">Precipitation</p>
					<p className="general-info-status">3%</p>
				</div>
				<div className="general-info-section">
					<p className="general-info-title">Humidity</p>
					<p className="general-info-status">74%</p>
				</div>
				<div className="general-info-section">
					<p className="general-info-title">Wind Speed</p>
					<p className="general-info-status">10Km/h</p>
				</div>
			</div>
		</div>
	);
};

export default GeneralInfo;
