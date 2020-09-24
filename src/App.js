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
		location_icon: 0,
		location_condition: "???",
		tab_icon_0: 0,
		tab_icon_1: 0,
		tab_icon_2: 0,
		tab_icon_3: 0,
		tab_icon_4: 0,
		tab_temp_0: 0,
		tab_temp_1: 0,
		tab_temp_2: 0,
		tab_temp_3: 0,
		tab_temp_4: 0,
		precipitation: 0,
		humidity: 0,
		windspeed: 0,
		icon: {
			sunny: "fas fa-sun tab-icons",
			mostly_sunny: "fas fa-sun tab-icons",
			partly_sunny: "fas fa-sun tab-icons",
			intermittent_clouds_day: "fas fa-cloud-sun tab-icons",
			hazy_sunshine: "fas fa-smog tab-icons",
			mostly_cloudy_day: "fas fa-cloud tab-icons",
			cloudy: "fas fa-cloud tab-icons",
			dreary_overcast: "fas fa-cloud tab-icons",
			fog: "fas fa-smog tab-icons",
			showers: "fas fa-cloud-rain tab-icons",
			mostly_cloudy_w_showers: "fas fa-cloud-showers-heavy tab-icons",
			partly_sunny_w_showers: "fas fa-cloud-sun-rain tab-icons",
			t_storms: "fas fa-bolt tab-icons",
			mostly_cloudy_w_t_storms: "fas fa-cloud-showers-heavy tab-icons",
			mostly_sunny_w_t_storms: "fas fa-cloud-sun-rain tab-icons",
			rain: "fas fa-cloud-rain tab-icons",
			flurries: "fas fa-snowflake tab-icons",
			mostly_cloudy_w_flurries_day: "fas fa-cloud tab-icons",
			partly_sunny_w_flurries: "fas fa-snowflake tab-icons",
			snow: "fas fa-snowflake tab-icons",
			mostly_cloudy_w_snow_day: "fas fa-snowflake tab-icons",
			ice: "fas fa-icicles tab-icons",
			sleet: "fas fa-snowflake tab-icons",
			freezing_rain: "fas fa-cloud-rain tab-icons",
			rain_and_snow: "fas fa-snowflake tab-icons",
			hot: "fas fa-thermometer-full tab-icons",
			cold: "fas fa-temperature-low tab-icons",
			windy: "fas fa-wind tab-icons",
			clear: "fas fa-sun tab-icons",
			mostly_clear: "fas fa-sun tab-icons",
			partly_cloudy: "fas fa-cloud-moon tab-icons",
			intermittent_clouds_night: "fas fa-cloud-moon tab-icons",
			hazy_moonlight: "fas fa-moon tab-icons",
			mostly_cloudy_night: "fas fa-cloud-moon tab-icons",
			partly_cloudy_w_showers: "fas fa-cloud-moon-rain tab-icons",
			mostly_cloudy_showers: "fas fa-cloud-moon-rain tab-icons",
			partly_cloudy_w_t_storms: "fas fa-bolt tab-icons",
			mostly_cloudy_w_flurries_night: "fas fa-snowflake tab-icons",
			mostly_cloudy_w_snow_night: "fas fa-snowflake tab-icons",
			error_icon: "fas fa-question-circle tab-icons",
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
				this.setState({
					location_icon: res.data[0].WeatherIcon,
					location_condition: res.data[0].IconPhrase,
					tab_icon_0: res.data[0].WeatherIcon,
					tab_icon_1: res.data[1].WeatherIcon,
					tab_icon_2: res.data[2].WeatherIcon,
					tab_icon_3: res.data[3].WeatherIcon,
					tab_icon_4: res.data[4].WeatherIcon,
					tab_temp_0: res.data[0].Temperature.Value,
					tab_temp_1: res.data[1].Temperature.Value,
					tab_temp_2: res.data[2].Temperature.Value,
					tab_temp_3: res.data[3].Temperature.Value,
					tab_temp_4: res.data[4].Temperature.Value,
					precipitation: res.data[0].PrecipitationProbability,
					humidity: res.data[0].RelativeHumidity,
					windspeed: res.data[0].Wind.Speed.Value,
				});
			});
		});
	};

	// Function to return respective fontawesome classes to set Location component icon:
	setIcon = (num) => {
		if (num === 1) {
			// ----------------------------------------- Sunny
			return this.state.icon.sunny;
		} else if (num === 2) {
			// ----------------------------------------- Mostly Sunny
			return this.state.icon.mostly_sunny;
		} else if (num === 3) {
			// ----------------------------------------- Partly Sunny
			return this.state.icon.partly_sunny;
		} else if (num === 4) {
			// ----------------------------------------- Intermittent Clouds
			return this.state.icon.intermittent_clouds_day;
		} else if (num === 5) {
			// ----------------------------------------- Hazy Sunshine
			return this.state.icon.hazy_sunshine;
		} else if (num === 6) {
			// ----------------------------------------- Mostly Cloudy
			return this.state.icon.mostly_cloudy_day;
		} else if (num === 7) {
			// ----------------------------------------- Cloudy
			return this.state.icon.cloudy;
		} else if (num === 8) {
			// ----------------------------------------- Dreary (Overcast)
			return this.state.icon.dreary_overcast;
		} else if (num === 11) {
			// ----------------------------------------- Fog
			return this.state.icon.fog;
		} else if (num === 12) {
			// ----------------------------------------- Showers
			return this.state.icon.showers;
		} else if (num === 13) {
			// ----------------------------------------- Mostly Cloudy w/ Showers
			return this.state.icon.mostly_cloudy_w_showers;
		} else if (num === 14) {
			// ----------------------------------------- Partly Sunny w/ Showers
			return this.state.icon.partly_sunny_w_showers;
		} else if (num === 15) {
			// ----------------------------------------- Thunder-Storms
			return this.state.icon.t_storms;
		} else if (num === 16) {
			// ----------------------------------------- Mostly Cloudy w/ T-Storms
			return this.state.icon.mostly_cloudy_w_t_storms;
		} else if (num === 17) {
			// ----------------------------------------- Partly Sunny w/ T-Storms
			return this.state.icon.partly_cloudy_w_t_storms;
		} else if (num === 18) {
			// ----------------------------------------- Rain
			return this.state.icon.rain;
		} else if (num === 19) {
			// ----------------------------------------- Flurries
			return this.state.icon.flurries;
		} else if (num === 20) {
			// ----------------------------------------- Mostly Cloudy w/ Flurries
			return this.state.icon.mostly_cloudy_w_flurries_day;
		} else if (num === 21) {
			// ----------------------------------------- Partly Sunny w/ Flurries
			return this.state.icon.partly_sunny_w_flurries;
		} else if (num === 22) {
			// ----------------------------------------- Snow
			return this.state.icon.snow;
		} else if (num === 23) {
			// ----------------------------------------- Mostly Cloudy w/ Snow
			return this.state.icon.mostly_cloudy_w_snow_day;
		} else if (num === 24) {
			// ----------------------------------------- Ice
			return this.state.icon.ice;
		} else if (num === 25) {
			// ----------------------------------------- Sleet
			return this.state.icon.sleet;
		} else if (num === 26) {
			// ----------------------------------------- Freezing Rain
			return this.state.icon.freezing_rain;
		} else if (num === 29) {
			// ----------------------------------------- Rain and Snow
			return this.state.icon.rain_and_snow;
		} else if (num === 30) {
			// ----------------------------------------- Hot
			return this.state.icon.hot;
		} else if (num === 31) {
			// ----------------------------------------- Cold
			return this.state.icon.cold;
		} else if (num === 32) {
			// ----------------------------------------- Windy
			return this.state.icon.windy;
		} else if (num === 33) {
			// ----------------------------------------- Clear
			return this.state.icon.clear;
		} else if (num === 34) {
			// ----------------------------------------- Mostly Clear
			return this.state.icon.mostly_clear;
		} else if (num === 35) {
			// ----------------------------------------- Partly Cloudy
			return this.state.icon.partly_cloudy;
		} else if (num === 36) {
			// ----------------------------------------- Intermittent Clouds
			return this.state.icon.intermittent_clouds_night;
		} else if (num === 37) {
			// ----------------------------------------- Hazy Moonlight
			return this.state.icon.hazy_moonlight;
		} else if (num === 38) {
			// ----------------------------------------- Mostly Cloudy
			return this.state.icon.mostly_cloudy_night;
		} else if (num === 39) {
			// ----------------------------------------- Partly Cloudy w/ Showers
			return this.state.icon.partly_cloudy_w_showers;
		} else if (num === 40) {
			// ----------------------------------------- Mostly Cloudy w/ Showers
			return this.state.icon.mostly_cloudy_showers;
		} else if (num === 41) {
			// ----------------------------------------- Partly Cloudy w/ T-Storms
			return this.state.icon.partly_cloudy_w_t_storms;
		} else if (num === 42) {
			// ----------------------------------------- Mostly Cloudy w/ T-Storms
			return this.state.icon.mostly_cloudy_w_t_storms;
		} else if (num === 43) {
			// ----------------------------------------- Mostly Cloudy w/ Flurries
			return this.state.icon.mostly_cloudy_w_flurries_night;
		} else if (num === 44) {
			//	Mostly Cloudy w/ Snow (night)
			return this.state.icon.mostly_cloudy_w_snow_night;
		} else {
			// ----------------------------------------- Unknown cCondition
			return this.state.icon.error_icon;
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
					location_icon={this.setIcon(this.state.location_icon)}
					location_condition={this.state.location_condition}
				/>
				<WeatherTabs
					icon_0={this.setIcon(this.state.tab_icon_0)}
					icon_1={this.setIcon(this.state.tab_icon_1)}
					icon_2={this.setIcon(this.state.tab_icon_2)}
					icon_3={this.setIcon(this.state.tab_icon_3)}
					icon_4={this.setIcon(this.state.tab_icon_4)}
					temp_0={this.state.tab_temp_0}
					temp_1={this.state.tab_temp_1}
					temp_2={this.state.tab_temp_2}
					temp_3={this.state.tab_temp_3}
					temp_4={this.state.tab_temp_4}
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
