import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LocationInfo from "./components/Location";
import WeatherTabs from "./components/WeatherTabs";
import AdditionalInfo from "./components/AdditionalInfo";
import ChartSelect from "./components/ChartSelect";
import Chart from "./components/Chart";
import Axios from "axios";
require("dotenv").config();

class App extends Component {
	state = {
		search_query: "",
		location_key: {},
		country: "Country Name",
		city: "City Name",
		date: new Date().toDateString(),
		hour: new Date().getHours(),
		img_alt: "img alt text",
		location_icon: 0,
		location_condition: "Location condition",
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
		precipitation_0: 0,
		precipitation_1: 0,
		precipitation_2: 0,
		precipitation_3: 0,
		precipitation_4: 0,
		humidity_0: 0,
		humidity_1: 0,
		humidity_2: 0,
		humidity_3: 0,
		humidity_4: 0,
		windspeed_0: 0,
		windspeed_1: 0,
		windspeed_2: 0,
		windspeed_3: 0,
		windspeed_4: 0,
		icon: {
			sunny: "iconfont-sun tab-icons",
			mostly_sunny: "icofont-full-sunny tab-icons",
			partly_sunny: "icofont-sunny tab-icons",
			intermittent_clouds_day: "icofont-cloudy tab-icons",
			hazy_sunshine: "icofont-full-sunny tab-icons",
			mostly_cloudy_day: "icofont-cloudy tab-icons",
			cloudy: "icofont-clouds tab-icons",
			dreary_overcast: "icofont-clouds tab-icons",
			fog: "fas fa-smog tab-icons",
			showers: "icofont-rainy tab-icons",
			mostly_cloudy_w_showers: "icofont-rainy tab-icons",
			partly_sunny_w_showers: "icofont-rainy-sunny tab-icons",
			t_storms: "icofont-rainy-thunder tab-icons",
			mostly_cloudy_w_t_storms: "icofont-rainy-thunder tab-icons",
			mostly_sunny_w_t_storms: "icofont-hail-thunder-sunny tab-icons",
			rain: "icofont-rainy tab-icons",
			flurries: "icofont-snowy tab-icons",
			mostly_cloudy_w_flurries_day: "icofont-snowy-sunny tab-icons",
			partly_sunny_w_flurries: "icofont-snowy-sunny tab-icons",
			snow: "icofont-snow-alt tab-icons",
			mostly_cloudy_w_snow_day: "icofont-snowy tab-icons",
			ice: "fas fa-icicles tab-icons",
			sleet: "icofont-snowy-rainy tab-icons",
			freezing_rain: "icofont-snowy-rainy tab-icons",
			rain_and_snow: "icofont-snowy-rainy tab-icons",
			hot: "icofont-sunny-day-temp tab-icons",
			cold: "icofont-snow-temp tab-icons",
			windy: "icofont-windy tab-icons",
			clear: "icofont-sun-alt tab-icons",
			mostly_clear: "icofont-night tab-icons",
			partly_cloudy: "icofont-full-night tab-icons",
			intermittent_clouds_night: "icofont-cloudy tab-icons",
			hazy_moonlight: "icofont-full-night tab-icons",
			mostly_cloudy_night: "icofont-cloudy tab-icons",
			partly_cloudy_w_showers: "icofont-rainy-night tab-icons",
			mostly_cloudy_showers: "icofont-rainy tab-icons",
			partly_cloudy_w_t_storms: "icofont-snowy-thunder-night tab-icons",
			mostly_cloudy_w_flurries_night: "icofont-snowy-night tab-icons",
			mostly_cloudy_w_snow_night: "icofont-snowy-night tab-icons",
			error_icon: "icofont-question-circle tab-icons",
		},
		displayed_chart: "bar-chart",
	};

	// Function to be executed as text is inputted into (search) text input field:
	handleChange = (e) => {
		// Assign input field text value to the state property: "search_query".
		this.setState({ search_query: e.target.value });
	};

	// Function containing requests and state change executions when search icon is clicked:
	searchAction = () => {
		// GET location_key, country & city values:
		Axios.get(
			`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09${process.env.REACT_APP_API_KEY}&q=${this.state.search_query}`
		).then((res) => {
			// Assign the location key, country & city values received from response data into respective state property values:
			this.setState({
				location_key: res.data[0].Key,
				country: res.data[0].Country.LocalizedName,
				city: res.data[0].LocalizedName,
			});
			// GET the next 12 hour weather data array containing hourly objects:
			Axios.get(
				`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${this.state.location_key}?apikey=%09${process.env.REACT_APP_API_KEY}&language=en-us&details=true&metric=true`
			)

				.then((res) => {
					// Assign the data value values received from request response into respective state property values:
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
						precipitation_0: res.data[0].PrecipitationProbability,
						precipitation_1: res.data[1].PrecipitationProbability,
						precipitation_2: res.data[2].PrecipitationProbability,
						precipitation_3: res.data[3].PrecipitationProbability,
						precipitation_4: res.data[4].PrecipitationProbability,
						humidity_0: res.data[0].RelativeHumidity,
						humidity_1: res.data[1].RelativeHumidity,
						humidity_2: res.data[2].RelativeHumidity,
						humidity_3: res.data[3].RelativeHumidity,
						humidity_4: res.data[4].RelativeHumidity,
						windspeed_0: res.data[0].Wind.Speed.Value,
						windspeed_1: res.data[1].Wind.Speed.Value,
						windspeed_2: res.data[2].Wind.Speed.Value,
						windspeed_3: res.data[3].Wind.Speed.Value,
						windspeed_4: res.data[4].Wind.Speed.Value,
					});
				})
				.catch((err) => console.log(err));
		});
	};

	// Function to set time to 12 hour format:
	setTime = (val) => {
		if (val === 24) {
			return 12;
		} else if (val > 12) {
			return val % 12;
		} else {
			return val;
		}
	};

	// Function to suffix "AM" or "PM" onto hour value:
	setAMPM = (hourValue) => {
		if (hourValue >= 24) {
			return "am";
		} else if (hourValue >= 12) {
			return "pm";
		} else {
			return "am";
		}
	};

	// Function to set respective icon classes based on passed icon number values:
	setIcon = (icon_num) => {
		if (icon_num === 1) {
			// ----------------------------------------- Sunny
			return this.state.icon.sunny;
		} else if (icon_num === 2) {
			// ----------------------------------------- Mostly Sunny
			return this.state.icon.mostly_sunny;
		} else if (icon_num === 3) {
			// ----------------------------------------- Partly Sunny
			return this.state.icon.partly_sunny;
		} else if (icon_num === 4) {
			// ----------------------------------------- Intermittent Clouds
			return this.state.icon.intermittent_clouds_day;
		} else if (icon_num === 5) {
			// ----------------------------------------- Hazy Sunshine
			return this.state.icon.hazy_sunshine;
		} else if (icon_num === 6) {
			// ----------------------------------------- Mostly Cloudy
			return this.state.icon.mostly_cloudy_day;
		} else if (icon_num === 7) {
			// ----------------------------------------- Cloudy
			return this.state.icon.cloudy;
		} else if (icon_num === 8) {
			// ----------------------------------------- Dreary (Overcast)
			return this.state.icon.dreary_overcast;
		} else if (icon_num === 11) {
			// ----------------------------------------- Fog
			return this.state.icon.fog;
		} else if (icon_num === 12) {
			// ----------------------------------------- Showers
			return this.state.icon.showers;
		} else if (icon_num === 13) {
			// ----------------------------------------- Mostly Cloudy w/ Showers
			return this.state.icon.mostly_cloudy_w_showers;
		} else if (icon_num === 14) {
			// ----------------------------------------- Partly Sunny w/ Showers
			return this.state.icon.partly_sunny_w_showers;
		} else if (icon_num === 15) {
			// ----------------------------------------- Thunder-Storms
			return this.state.icon.t_storms;
		} else if (icon_num === 16) {
			// ----------------------------------------- Mostly Cloudy w/ T-Storms
			return this.state.icon.mostly_cloudy_w_t_storms;
		} else if (icon_num === 17) {
			// ----------------------------------------- Partly Sunny w/ T-Storms
			return this.state.icon.partly_cloudy_w_t_storms;
		} else if (icon_num === 18) {
			// ----------------------------------------- Rain
			return this.state.icon.rain;
		} else if (icon_num === 19) {
			// ----------------------------------------- Flurries
			return this.state.icon.flurries;
		} else if (icon_num === 20) {
			// ----------------------------------------- Mostly Cloudy w/ Flurries
			return this.state.icon.mostly_cloudy_w_flurries_day;
		} else if (icon_num === 21) {
			// ----------------------------------------- Partly Sunny w/ Flurries
			return this.state.icon.partly_sunny_w_flurries;
		} else if (icon_num === 22) {
			// ----------------------------------------- Snow
			return this.state.icon.snow;
		} else if (icon_num === 23) {
			// ----------------------------------------- Mostly Cloudy w/ Snow
			return this.state.icon.mostly_cloudy_w_snow_day;
		} else if (icon_num === 24) {
			// ----------------------------------------- Ice
			return this.state.icon.ice;
		} else if (icon_num === 25) {
			// ----------------------------------------- Sleet
			return this.state.icon.sleet;
		} else if (icon_num === 26) {
			// ----------------------------------------- Freezing Rain
			return this.state.icon.freezing_rain;
		} else if (icon_num === 29) {
			// ----------------------------------------- Rain and Snow
			return this.state.icon.rain_and_snow;
		} else if (icon_num === 30) {
			// ----------------------------------------- Hot
			return this.state.icon.hot;
		} else if (icon_num === 31) {
			// ----------------------------------------- Cold
			return this.state.icon.cold;
		} else if (icon_num === 32) {
			// ----------------------------------------- Windy
			return this.state.icon.windy;
		} else if (icon_num === 33) {
			// ----------------------------------------- Clear
			return this.state.icon.clear;
		} else if (icon_num === 34) {
			// ----------------------------------------- Mostly Clear
			return this.state.icon.mostly_clear;
		} else if (icon_num === 35) {
			// ----------------------------------------- Partly Cloudy
			return this.state.icon.partly_cloudy;
		} else if (icon_num === 36) {
			// ----------------------------------------- Intermittent Clouds
			return this.state.icon.intermittent_clouds_night;
		} else if (icon_num === 37) {
			// ----------------------------------------- Hazy Moonlight
			return this.state.icon.hazy_moonlight;
		} else if (icon_num === 38) {
			// ----------------------------------------- Mostly Cloudy
			return this.state.icon.mostly_cloudy_night;
		} else if (icon_num === 39) {
			// ----------------------------------------- Partly Cloudy w/ Showers
			return this.state.icon.partly_cloudy_w_showers;
		} else if (icon_num === 40) {
			// ----------------------------------------- Mostly Cloudy w/ Showers
			return this.state.icon.mostly_cloudy_showers;
		} else if (icon_num === 41) {
			// ----------------------------------------- Partly Cloudy w/ T-Storms
			return this.state.icon.partly_cloudy_w_t_storms;
		} else if (icon_num === 42) {
			// ----------------------------------------- Mostly Cloudy w/ T-Storms
			return this.state.icon.mostly_cloudy_w_t_storms;
		} else if (icon_num === 43) {
			// ----------------------------------------- Mostly Cloudy w/ Flurries
			return this.state.icon.mostly_cloudy_w_flurries_night;
		} else if (icon_num === 44) {
			// ----------------------------------------- Mostly Cloudy w/ Snow (night)
			return this.state.icon.mostly_cloudy_w_snow_night;
		} else {
			// ----------------------------------------- Unknown Condition
			return this.state.icon.error_icon;
		}
	};

	// Function containing conditions to render respective charts when the selection dropdown is changed:
	selectChart = (e) => {
		if (e.target.value === "bar") {
			// console.log("bar");
			this.setState({ displayed_chart: "bar-chart" });
		} else if (e.target.value === "line") {
			// console.log("line");
			this.setState({ displayed_chart: "line-chart" });
		}
		// else if (e.target.value === "pie") {
		// 	// console.log("pie");
		// 	this.setState({ displayed_chart: "pie-chart" });
		// }
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
					hour={this.state.hour}
					setTime={this.setTime}
					setAMPM={this.setAMPM}
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
					precipitation={this.state.precipitation_0}
					humidity={this.state.humidity_0}
					windspeed={this.state.windspeed_0}
				/>

				<ChartSelect selectChart={this.selectChart} />

				<Chart
					chart={this.state.displayed_chart}
					hour={this.state.hour}
					setTime={this.setTime}
					setAMPM={this.setAMPM}
					precipitation={[
						this.state.precipitation_0,
						this.state.precipitation_1,
						this.state.precipitation_2,
						this.state.precipitation_3,
						this.state.precipitation_4,
					]}
					humidity={[
						this.state.humidity_0,
						this.state.humidity_1,
						this.state.humidity_2,
						this.state.humidity_3,
						this.state.humidity_4,
					]}
					windspeed={[
						this.state.windspeed_0,
						this.state.windspeed_1,
						this.state.windspeed_2,
						this.state.windspeed_3,
						this.state.windspeed_4,
					]}
				/>
			</div>
		);
	}
}

export default App;
