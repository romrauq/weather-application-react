import React from "react";

// Replace statement below with an api request that would get respective city images:
const location_image = "./resources/images/location-image.jpg";
// CSS STYLING:
const component_styles = {
	display: "flex",
	justifyContent: "space-between",
	padding: "5px",
	margin: "0 auto 5px",
	width: "98%",
	backgroundColor: "blueviolet" /*Temporary*/,
	borderRadius: "5px",
	cursor: "default",
};
const component_child_1 = {
	width: "60%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};
const heading_styles = {
	color: "white",
	fontSize: "1.1rem",
	fontWeight: "bold",
	margin: "0",
};
const date_styles = {
	color: "white",
	fontSize: "0.85rem",
	margin: "0",
};
const location_info_container = {
	display: "flex",
	width: "fit-content",
};
const icon_styles = {
	fontSize: "1.2rem",
	color: "skyblue",
};
const condition_text_styles = {
	color: "skyblue",
	fontSize: "0.85rem",
	marginLeft: "5px",
	marginTop: "4px",
};
const component_child_2 = {
	width: "100px",
	height: "100px",
};
const image_styles = {
	width: "100%",
	height: "100%",
	borderRadius: "5px",
};

const Location = (props) => {
	return (
		<div style={component_styles}>
			<div style={component_child_1}>
				<h1 style={heading_styles}>
					{props.country}
					<br />
					{props.city}
				</h1>

				<p style={date_styles}>{props.date}</p>

				<div className={location_info_container}>
					<i className={props.location_icon} style={icon_styles}></i>
					<span style={condition_text_styles}>{props.location_condition}</span>
				</div>
			</div>

			<div style={component_child_2}>
				<img src={location_image} alt={props.alt} style={image_styles} />
			</div>
		</div>
	);
};

export default Location;
