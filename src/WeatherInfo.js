import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";


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
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                    </div>
                    <div className="float-left">
                      <WeatherTemperature celsius={props.data.temperature} size={50} />
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
        </div>
    );
}