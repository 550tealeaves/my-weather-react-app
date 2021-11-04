import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
              <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li>{props.data.description}</li>
              </ul>
              <div className="row">
                <div className="col-12">
                  <div className="clearfix weather-temperature">
                    <img
                      src={props.data.icon}
                      alt={props.data.description}
                      className="float-left"
                    />
                    <div className="float-left">
                      <span className="temperature">{Math.round(props.data.temperature)}</span>
                      <span className="units">
                        <a href="/">°C</a> | <a href="/">°F</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                  </ul>
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
        </div>
    );
}