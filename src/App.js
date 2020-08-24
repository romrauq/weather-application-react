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
		country: "Ghana",
		city: "Greater Accra",
		date: new Date().toDateString(),
		img_alt: "Location Image Details",
		precipitation: 3,
		humidity: 74,
		windspeed: 10,
	};

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
