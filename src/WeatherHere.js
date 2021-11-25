import React from "react";
import axios from "axios";

export default function WeatherHere(props){
    function handleResponse(response){
        console.log(response.data);
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

    return(
        <div className="WeatherHere">
            <button className="btn btn-success w-100">Current</button>
        </div>
    )

}