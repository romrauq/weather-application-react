import React from "react";

const component_styles = {
	display: "flex",
	flexDirection: "row",
	width: "98%",
	justifyContent: "spaced-between",
	margin: "0 auto 5px",
};
const input_styles = {
	fontSize: "1rem",
	width: "90%",
	height: "35px",
	padding: "5px 5px",
	border: "1px solid rgba(135, 206, 235, 0.7)",
	borderRadius: "3px",
	outline: "none",
};
const search_button_styles = {
	color: "#444",
	fontSize: "1.5rem",
	margin: "auto",
};

const SimpleSearch = (props) => {
	return (
		<div style={component_styles}>
			<input
				style={input_styles}
				type="text"
				autoFocus={true}
				placeholder="Enter Your City's Name Here"
				onChange={props.handleChange}
			/>

			<i
				id="search-button"
				style={search_button_styles}
				className="fas fa-search search-icon"
				type="button"
				onClick={props.searchAction}
			></i>
		</div>
	);
};

export default SimpleSearch;
