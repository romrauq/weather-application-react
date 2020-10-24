import React from "react";

const component_styles = {
	display: "flex",
	justifyContent: "space-between",
	width: "98%",
	height: "fit-content",
	padding: "5px",
	margin: "0px auto 5px",
	backgroundColor: "limegreen",
	borderRadius: "5px",
	cursor: "default",
};
const heading_styles = {
	fontSize: "1.1rem",
	fontWeight: "bold",
	margin: "0",
};
const dropdown_styles = {
	fontSize: "0.9rem",
	fontWeight: "bold",
	fontFamily: "Arial",
	padding: "3px 15px",
	borderRadius: "5px",
	outline: "none",
	cursor: "pointer",
};
const Charts = (props) => {
	return (
		<div style={component_styles}>
			<div>
				<p style={heading_styles}>Select Chart</p>
			</div>
			<div>
				<select style={dropdown_styles} onChange={props.selectChart}>
					<option value="bar">Bar Chart</option>
					<option value="line">Line Chart</option>
				</select>
			</div>
		</div>
	);
};

export default Charts;
