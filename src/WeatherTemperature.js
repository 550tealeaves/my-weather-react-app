import React from "react"; 
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) { //2. Paste original HTML text from weatherinfo and change props.data.temperature to props.celsius
        return ( 
            <div className="WeatherTemperature">
                <strong>{Math.round(props.celsius)}</strong>
                <span className="units">
                    °F
                </span>
            </div>
        ); 
}
