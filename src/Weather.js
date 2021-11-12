import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false }); 
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({ 
      ready: true, 
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
              <form onSubmit={handleSubmit} className="search-form">
                <div className="row">
                  <div className="col-5">
                    <input
                      type="search"
                      placeholder="Enter city"
                      autofocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-primary shadow-sm w-100"
                    />
                  </div>
                  <div className="col-3">
                    <button className="btn btn-success w-100">Current</button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast />
            </div>
          </div>
        </div>
      );
    } else { 
      search();
      return "Loading...";
    }
  }
  
  
 
  


  
