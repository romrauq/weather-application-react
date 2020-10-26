import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

class AutoCompleteComponent extends Component {
	state = {
		value: this.props.value,
		cities: this.props.citiesArray,
	};

	component_styles = {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		margin: "0 auto 5px",
	};
	search_button_styles = {
		color: "#444",
		fontSize: "1.5rem",
		margin: "auto",
	};
	render() {
		return (
			<div style={this.component_styles}>
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
					style={this.search_button_styles}
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

export default AutoCompleteComponent;
