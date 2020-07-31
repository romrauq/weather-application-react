import React from "react";

const AdditionalInfo = () => {
	return (
		<div className="additional-info-component">
			<p className="additional-info-heading">Additional information:</p>
			<div className="additional-info-sections">
				<div className="additional-info-section">
					<p className="additional-info-title">Precipitation</p>
					<p className="additional-info-status">3%</p>
				</div>
				<div className="additional-info-section">
					<p className="additional-info-title">Humidity</p>
					<p className="additional-info-status">74%</p>
				</div>
				<div className="additional-info-section">
					<p className="additional-info-title">Wind Speed</p>
					<p className="additional-info-status">10Km/h</p>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
