import React from "react";
import "./Weather.css";

export default function Weather(){
    let weatherData = {
    city: "Orlando",
    temperature: 69,
    date: "Tuesday, September 21, 2021",
    description: "Sunny and Breezy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    humidity: 80,
    wind: 12
  };


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
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-12">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">{weatherData.temperature}</span>
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
                        18℃
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
                            24℃
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
                            20℃
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
                            22℃
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
                            15℃
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
          <a href="https://blissful-hawking-5e92d0.netlify.app/" target="blank">
            hosted by Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
