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
		searchLocation: "",
		country: "Ghana (default)",
		city: "Greater Accra (default)",
		date: new Date().toDateString(),
		img_alt: "Location Image Details",
		precipitation: 3,
		humidity: 74,
		windspeed: 10,
	};

	handleChange = (e) => {
		this.setState({ searchLocation: e.target.value });
	};

	searchAction = () => {
		console.log(this.state.searchLocation);
	};

	// Component lifecycle to run fetch API(s) upon initial page render:
	componentDidMount() {
		// 1st fetch() request passes searched text value from the state to retrieve the location Key from HTTP request's response data:
		fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&q=${this.state.searchLocation}`
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				// 2nd fetch request uses the location Key to retrieve 12 Hour weather data of its respective location:
				fetch(
					`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${data[0].Key}?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&language=en-us&details=true&metric=false`
				)
					.then(function (response) {
						return response.json();
					})
					.then(function (data) {
						console.log(data);
					});
			});
	}

	render() {
		return (
			<div className="App">
				<SearchBar
					handleChange={this.handleChange}
					searchText={this.searchAction}
				/>

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
