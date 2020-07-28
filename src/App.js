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
			{/*Insert components here (below)*/}
			<SearchBar />
			<LocationInfo />
			<WeatherTabs />
			<AdditionalInfo />
			<Temperature />
			<Graph />
			{/*Insert components here (above)*/}
		</div>
	);
}

export default App;
