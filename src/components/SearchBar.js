import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

class SearchBar extends Component {
	state = {
		value: this.props.value,
		cities: this.props.citiesArray,
	};

	render() {
		return (
			<div className="searchbar-component">
				<div className="autocomplete-wrapper">
					<Autocomplete
						value={this.state.value}
						items={this.state.cities}
						getItemValue={(item) => item.LocalizedName}
						shouldItemRender={this.renderCityNames}
						renderMenu={(item) => <div className="dropdown">{item}</div>}
						renderItem={(item, isHighlighted) => (
							<div className={`item ${isHighlighted ? "selected-item" : ""}`}>
								{item.title}
							</div>
						)}
						// onChange={(event, value) => this.setState({ value })}
						onChange={this.props.handleChange}
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

	renderCityNames = (state, value = this.state.value) => {
		return state.city.toLowerCase().indexOf(value.toLowerCase()) !== -1;
	};
}

export default SearchBar;
