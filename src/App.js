import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LocationInfo from "./components/Location";
import WeatherTabs from "./components/WeatherTabs";
import AdditionalInfo from "./components/AdditionalInfo";
import Temperature from "./components/Temperature";
import Graph from "./components/Graph";

function App() {
	return (
		<div className="App">
			<SearchBar />

			<LocationInfo
				country="Ghana"
				city="Greater Accra"
				date={new Date().toDateString()}
				alt="Location image"
			/>

			<WeatherTabs />

			<AdditionalInfo precipitation="3%" humidity="74" windspeed="10" />

			<Temperature />

			<Graph />
		</div>
	);
}

export default App;
