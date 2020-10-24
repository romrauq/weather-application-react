import React from "react";

const component_styles = {
	display: "flex",
	flexDirection: "column",
	color: "white",
	fontSize: "0.8rem",
	textAlign: "center",
	width: "20%",
	height: "fit-content",
	borderRadius: "0 0 20% 20%",
};
const tab_text_styles = {
	margin: "0",
};
const icon_styles = {
	fontSize: "1.2rem",
	margin: "5px 0",
};
const WeatherTab = (props) => {
	return (
		<div style={component_styles}>
			<p style={tab_text_styles}>
				{props.hour}
				{props.ampm}
			</p>
			<i style={icon_styles} className={props.icon}></i>
			<p style={tab_text_styles}>{props.temp}&#8451;</p>
		</div>
	);
};

export default WeatherTab;
