import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

class SearchBar extends Component {
	state = {
		query: "",
	};
	render() {
		return (
			<div className="searchbar-component">
				<div className="autocomplete-wrapper">
					<Autocomplete
						value={this.state.query}
						// autoItems={this.state.city_options}
						// getItemValue={(cityList) => data.localizedName}
						shouldItemRender={this.renderMovieTitle}
						renderMenu={(item) => <div className="dropdown">{item}</div>}
						renderItem={(item, isHighlighted) => (
							<div className={`item ${isHighlighted ? "selected-item" : ""}`}>
								{item.title}
							</div>
						)}
						onChange={(event, value) => this.setState({ value })}
						onSelect={(value) => this.setState({ value })}
					/>
				</div>
				<i
					id="search-button"
					className="fas fa-search search-icon"
					type="button"
					onClick={this.props.searchAction}
				></i>
			</div>
		);
	}

	renderMovieTitle = (state, val) => {
		return state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
	};
}

export default SearchBar;
