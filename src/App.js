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
		search_query: "",
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
		if (this.state.search_query !== "") {
			// 1st fetch() request passes searched text value from the state.search_query
			// to fetch data containing the a location Key from the HTTP request's response data:
			fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&q=${this.state.search_query}`
			)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					console.log(data);
					// this.setState({
					// 	country: data[0].Country.LocalizedName,
					// 	city: data[0].LocalizedName,
					// });
					
					// 2nd fetch request retrieves 12 Hour weather:
					fetch(
						`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${data[0].Key}?apikey=lulVbGjWKvDKKR7fVOza26BTcRrc8NIW&language=en-us&details=true&metric=true`
					)
						.then(function (response) {
							return response.json();
						})
						.then(function (weatherData) {
							console.log(weatherData);
							//Set the respective state values using the data retrieved from 2nd fetch():
							// this.setState({
							// 	location_icon: weatherData[0].WeatherIcon,
							// 	location_condition: weatherData[0].IconPhrase,
							// 	precipitation: weatherData[0].PrecipitationProbability,
							// 	humidity: weatherData[0].RelativeHumidity,
							// 	windspeed: weatherData[0].Wind.Speed.Value,
							// });
						});
				});
		} else {
			// return null;
			alert("Enter your location in the text area before searching");
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
