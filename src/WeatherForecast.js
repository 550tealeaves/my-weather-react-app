import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() { //(4) Add WeatherIcon component (8) size as props
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" alt="" width="42" />

                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-max">
                            19°
                        </span>
                        <span className="WeatherForecast-temperatures-min">
                            10°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}