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
		location_icon: {},
		location_condition: "",
		weather_tabs: {
			tab_0: {
				tab_icon: [],
				temperature: [],
			},
			tab_1: {
				tab_icon: [],
				temperature: [],
			},
			tab_2: {
				tab_icon: [],
				temperature: [],
			},
			tab_3: {
				tab_icon: [],
				temperature: [],
			},
			tab_4: {
				tab_icon: [],
				temperature: [],
			},
		},
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
			).then((res) => {
				// console.log(res.data[0]);
				this.setState({
					location_icon: res.data[0].WeatherIcon,
					location_condition: res.data[0].IconPhrase,
					// weather_tabs.tab_0.tab_icon: res.data[0].WeatherIcon,
					// weather_tabs.tab_1.tab_icon: res.data[1].WeatherIcon,
					// weather_tabs.tab_2.tab_icon: res.data[2].WeatherIcon,
					// weather_tabs.tab_3.tab_icon: res.data[3].WeatherIcon,
					// weather_tabs.tab_4.tab_icon: res.data[4].WeatherIcon,
					// weather_tabs.tab_0.temperature: res.data[0].Temperature.Value,
					// weather_tabs.tab_1.temperature: res.data[1].Temperature.Value,
					// weather_tabs.tab_2.temperature: res.data[2].Temperature.Value,
					// weather_tabs.tab_3.temperature: res.data[3].Temperature.Value,
					// weather_tabs.tab_4.temperature: res.data[4].Temperature.Value,
					precipitation: res.data[0].PrecipitationProbability,
					Humidity: res.data[0].RelativeHumidity,
					windspeed: res.data[0].Wind.Speed.Value,
				});
			});
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

				<WeatherTabs
					weather_icon_0={this.state.weather_tabs.tab_0.tab_icon}
					weather_temp_0={this.state.weather_tabs.tab_0.temperature}
					weather_icon_1={this.state.weather_tabs.tab_1.tab_icon}
					weather_temp_1={this.state.weather_tabs.tab_1.temperature}
					weather_icon_2={this.state.weather_tabs.tab_2.tab_icon}
					weather_temp_2={this.state.weather_tabs.tab_2.temperature}
					weather_icon_3={this.state.weather_tabs.tab_3.tab_icon}
					weather_temp_3={this.state.weather_tabs.tab_3.temperature}
					weather_icon_4={this.state.weather_tabs.tab_4.tab_icon}
					weather_temp_4={this.state.weather_tabs.tab_4.temperature}
				/>

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
