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
		search: "",
		country: "{Country}",
		city: "{City}",
		date: new Date().toDateString(),
		img_alt: "{Location Image Name}",
		location_icon: "",
		location_condition: "Cloudy",
		precipitation: 3,
		humidity: 74,
		windspeed: 10,
		// Temporary object below:
		icons: {
			cloudy: "fas fa-cloud tab-icons",
			rain: "fas fa-cloud-showers-heavy tab-icons",
			cloud_sun: "fas fa-cloud-sun tab-icons",
			sunny: "fas fa-sun tab-icons",
		},
	};

	// Assigning typed text value to this.state.searchLocation:
	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};

	// Actions to be executed when search button is clicked:
	searchAction = () => {
		if (this.state.search !== "") {
			// 1st fetch() request passes searched text value from the state to retrieve the searched location Key from HTTP request's response data:
			fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&q=${this.state.searchLocation}`
			)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					console.log(data);
					// this.setState({ country: data[0].Country.LocalizedName });
					this.setState({
						country: this.data[0].Country.LocalizedName,
						city: this.data[0].LocalizedName,
					});
					// 2nd fetch request retrieve 12 Hour weather:
					fetch(
						`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${data[0].Key}?apikey=lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&language=en-us&details=true&metric=true`
					)
						.then(function (response) {
							return response.json();
						})
						.then(function (weatherData) {
							console.log(weatherData);
						});
				});
		} else {
			// return null;
			alert("Please enter a location in the text box...");
		}
	};

	render() {
		return (
			<div className="App">
				<SearchBar
					handleChange={this.handleChange}
					searchAction={this.searchAction}
				/>

				<LocationInfo
					country={this.state.country}
					city={this.state.city}
					date={this.state.date}
					alt={this.state.img_alt}
					// location_icon={this.state.location_icon}
					location_icon={this.state.icons.cloud_sun}
					location_condition={this.state.location_condition}
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
