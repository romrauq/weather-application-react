import React from "react";

const SearchBar = (props) => {
	return (
		<div className="searchbar-component">
			<input
				type="text"
				placeholder="Search Location Here"
				onChange={props.handleChange}
			/>

			<i
				id="search-button"
				className="fas fa-search search-icon"
				type="button"
				onClick={props.searchAction}
			></i>
		</div>
	);
};

export default SearchBar;
