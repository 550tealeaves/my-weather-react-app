import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props) { //(4) Add WeatherIcon component (8) size as props
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        console.log(forecast);
        
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            )
                        }
                    })}      
                </div>
            </div>
        );
    } else {
        let apiKey = "ab6da5069e5bc23122a387b3e99bd05b";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    } 
}