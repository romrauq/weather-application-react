import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LocationInfo from "./components/Location";
import WeatherTabs from "./components/WeatherTabs";
import AdditionalInfo from "./components/AdditionalInfo";
import Temperature from "./components/Temperature";
import Graph from "./components/Graph";
import Axios from "axios";

class App extends Component {
	state = {
		search_query: "",
		location_key: {},
		country: "{Country}",
		city: "{City}",
		date: new Date().toDateString(),
		img_alt: "{Location Image Name}",
		location_icon: "",
		location_condition: "Cloudy",
		precipitation: 3,
		humidity: 74,
		windspeed: 10,
		// TEMPORARY "icons" object below:
		icons: {
			cloudy: "fas fa-cloud tab-icons",
			rain: "fas fa-cloud-showers-heavy tab-icons",
			cloud_sun: "fas fa-cloud-sun tab-icons",
			sunny: "fas fa-sun tab-icons",
		},
	};

	// Function to assign typed text value to this.state.search_query:
	handleChange = (e) => {
		this.setState({ search_query: e.target.value });
	};

	// Function(s) to be executed when search button is clicked:
	searchAction = () => {
		Axios.get(
			`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&q=${this.state.search_query}`
		).then((res) => {
			//Getting the location key & setting its value to the state:
			// console.log(res.data[0].Country.LocalizedName);
			// console.log(res.data[0].LocalizedName);
			this.setState({
				location_key: res.data[0].Key,
				country: res.data[0].Country.LocalizedName,
				city: res.data[0].LocalizedName,
			});
			Axios.get(
				`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${this.state.location_key}?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&language=en-us&details=true&metric=true`
			).then((res) => console.log(res.data[0]));
		});
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
					location_icon={this.state.icons.cloud_sun} // Replace with above script when able to use icon data from state.
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
