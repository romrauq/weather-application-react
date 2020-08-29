import React, { Component } from "react";

class searchBar extends Component {
	state = {};

	render() {
		return (
			<div className="searchbar-component">
				<input
					type="text"
					placeholder="Search Location Here"
					onChange={this.props.handleChange}
				/>

				<i
					id="search-button"
					className="fas fa-search search-icon"
					type="button"
					onClick={this.props.searchAction}
				></i>
			</div>
		);
	}
}

export default searchBar;
