import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false }); //21. Create single useState that will have object w/ all data

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({ //22. Call object w/ all data for setWeatherData and set to API path
      ready: true, //28. Add ready: true so that if(weatherData.ready) runs
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      description: response.data.weather[0].description
    });
  }

  if (weatherData.ready) {
    return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
              <form className="search-form">
                <div className="row">
                  <div className="col-5">
                    <input
                      type="search"
                      placeholder="Enter city"
                      autofocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm"
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
              <h1>{weatherData.city}</h1>
              <ul>
                <li><FormattedDate date={weatherData.date} /></li>
                <li>{weatherData.description}</li>
              </ul>
              <div className="row">
                <div className="col-12">
                  <div className="clearfix weather-temperature">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <div className="float-left">
                      <span className="temperature">{Math.round(weatherData.temperature)}</span>
                      <span className="units">
                        <a href="/">°C</a> | <a href="/">°F</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                    <div className="weather-forecast-date">
                        Thu
                    </div>
                              <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" width="42" />
                    <div className="weather-forecast-temperatures">
                        <span className="weather-forecast-temperature-max">
                            18°C
                        </span>
                    </div>
                </div>   
                </div> 
            </div>
            <div className="weather-forecast">
                <div className="row">
                    <div className="col-2">
                        <div className="weather-forecast-date">
                            Fri
                        </div>
                        <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" width="42" />
                        <div className="weather-forecast-temperatures">
                            <span className="weather-forecast-temperature-max">
                                24°C
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast">
                <div className="row">
                    <div className="col-2">
                        <div className="weather-forecast-date">
                            Sat
                        </div>
                        <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="42" />
                        <div className="weather-forecast-temperatures">
                            <span className="weather-forecast-temperature-max">
                                20°C
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast">
                <div className="row">
                    <div className="col-2">
                        <div className="weather-forecast-date">
                            Sun
                        </div>
                        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" width="42" />
                        <div className="weather-forecast-temperatures">
                            <span className="weather-forecast-temperature-max">
                                22°C
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast">
                <div className="row">
                    <div className="col-2">
                        <div className="weather-forecast-date">
                            Mon
                        </div>
                        <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" width="42" />
                        <div className="weather-forecast-temperatures">
                            <span className="weather-forecast-temperature-max">
                                15°C
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <small>
              Project coded by Nastasia Pollas and is{" "}
              <a
                href="https://github.com/550tealeaves/my-weather-react-app"
                target="blank"
              >
                open-source code on Github
              </a>{" "}
              and{" "}
                <a href="https://confident-northcutt-07eba8.netlify.app/" target="blank">
                hosted by Netlify
              </a>
            </small>
          </div>
        </div>
      );
    } else {
      const apiKey = "ab6da5069e5bc23122a387b3e99bd05b";
      let city = "Miami";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading...";
    }
  }
  
  
 
  


  
