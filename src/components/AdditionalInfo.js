import React from "react";
const component_styles = {
	width: "98%",
	padding: "5px",
	margin: "0px auto 5px",
	backgroundColor: "pink",
	borderRadius: "5px",
	cursor: "default",
};
const section_container = {
	display: "flex",
	justifyContent: "space-around",
};
const title_styles = {
	fontSize: "1rem",
	fontWeight: "bolder",
	textAlign: "center",
	margin: "0",
};
const center_section = {
	padding: "0 5px",
	borderLeft: "1px solid #555",
	borderRight: "1px solid #555",
};
const info = {
	fontSize: "0.8rem",
	textAlign: "center",
	margin: "0",
};

const AdditionalInfo = (props) => {
	return (
		<div style={component_styles}>
			<div style={section_container}>
				<div>
					<p style={title_styles}>Precipitation</p>
					<p style={info}>{props.precipitation}%</p>
				</div>
				<div style={center_section}>
					<p style={title_styles}>Humidity</p>
					<p style={info}>{props.humidity}%</p>
				</div>
				<div>
					<p style={title_styles}>Wind Speed</p>
					<p style={info}>{props.windspeed}Km/h</p>
				</div>
			</div>
		</div>
	);
};

export default AdditionalInfo;
