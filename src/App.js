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
		country: "Your Country",
		city: "Your City",
		date: new Date().toDateString(),
		img_alt: "{Location Image Name}",
		location_icon: {},
		location_condition: "",
		tab_icon_0: 0,
		tab_temp_0: 0,
		tab_icon_1: 0,
		tab_temp_1: 0,
		tab_icon_2: 0,
		tab_temp_2: 0,
		tab_icon_3: 0,
		tab_temp_3: 0,
		tab_icon_4: 0,
		tab_temp_4: 0,
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
			// Setting location_key, country & city values to the state:
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
					tab_icon_0: res.data[0].WeatherIcon,
					tab_temp_0: res.data[1].WeatherIcon,
					tab_icon_1: res.data[2].WeatherIcon,
					tab_temp_1: res.data[3].WeatherIcon,
					tab_icon_2: res.data[4].WeatherIcon,
					tab_temp_2: res.data[0].Temperature.Value,
					tab_icon_3: res.data[1].Temperature.Value,
					tab_temp_3: res.data[2].Temperature.Value,
					tab_icon_4: res.data[3].Temperature.Value,
					tab_temp_4: res.data[4].Temperature.Value,
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
					weather_icon_0={this.state.tab_icon_0}
					weather_temp_0={this.state.tab_temp_0}
					weather_icon_1={this.state.tab_icon_1}
					weather_temp_1={this.state.tab_temp_1}
					weather_icon_2={this.state.tab_icon_2}
					weather_temp_2={this.state.tab_temp_2}
					weather_icon_3={this.state.tab_icon_3}
					weather_temp_3={this.state.tab_temp_3}
					weather_icon_4={this.state.tab_icon_4}
					weather_temp_4={this.state.tab_temp_4}
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
