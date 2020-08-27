import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LocationInfo from "./components/Location";
import WeatherTabs from "./components/WeatherTabs";
import AdditionalInfo from "./components/AdditionalInfo";
import Temperature from "./components/Temperature";
import Graph from "./components/Graph";

class App extends Component {
	state = {
		searchText: "Accra",
		country: "Ghana",
		city: "Greater Accra",
		date: new Date().toDateString(),
		img_alt: "Location Image Details",
		precipitation: 3,
		humidity: 74,
		windspeed: 10,
	};

	// Fetch APIs to run upon main application page loads:
	componentDidMount() {
		// 1st fetch() passes a string value from state.searchText to retrieve location Key:
		fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&q=${this.state.searchText}`
		)
			.then(function (res) {
				return res.json();
			})
			.then(function (data) {
				// 2nd fetch has location Key passed through it retrieved from the previous fetch response to retrieve 12 Hour weather data:
				fetch(
					`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${data[0].Key}?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&language=en-us&details=true&metric=false`
				)
					.then(function (res) {
						return res.json();
					})
					.then(function (data) {
						console.log(data);
					});
			});
	}

	render() {
		return (
			<div className="App">
				<SearchBar />

				<LocationInfo
					country={this.state.country}
					city={this.state.city}
					date={this.state.date}
					alt={this.state.img_alt}
				/>

				<WeatherTabs />

				<AdditionalInfo
					precipitation={this.state.precipitation}
					humidity={this.state.humidity}
					windspeed={this.state.windspeed}
				/>

				<Temperature />

				<Graph />
			</div>
		);
	}
}

export default App;
