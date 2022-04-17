import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherHere from "./WeatherHere";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false }); 
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({ 
      ready: true, 
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }

  function search() {
    const apiKey = "ab6da5069e5bc23122a387b3e99bd05b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "ab6da5069e5bc23122a387b3e99bd05b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude
      }&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  if (weatherData.ready) {
    return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
              <form onSubmit={handleSubmit} className="search-form">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="search"
                      placeholder="Enter city"
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-color text-white shadow-sm w-100"
                    />
                  </div>
                  <div className="col-sm-3">
                    <WeatherHere getCurrentLocation={getCurrentLocation} />
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      );
    } else { 
      search();
      return "Loading...";
    }
  }
  
  
 
  


  
