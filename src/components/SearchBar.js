import React from "react";

const SearchBar = () => {
	return (
		<div className="searchbar-component">
			<input type="text" placeholder="Search Location Here" />
			<i
				id="search-button"
				className="fas fa-search search-icon"
				type="button"
			></i>
		</div>
	);
};

export default SearchBar;
