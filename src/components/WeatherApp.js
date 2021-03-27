import React, { useState, useEffect } from 'react';
import HeaderSection from './HeaderSection';
import WeatherResult from './WeatherResult';
import Footer from './Footer';

const WeatherApp = () => {
    // to take data from input field
    const [currSearchCity, setSearchCity] = useState("");
    // to submit data onclick
    const [submitCity, setSubmitCity] = useState("Pune");
    // to get result of data
    const [currCityData, setCityData] = useState({
        wCityName : '',
        wTemprature : '',
        wCountry : '',
        wMaxTemprature : '',
        wMinTemprature : '',
        wSunrise : '',
        wSunset : '',
        wCod : '',
        wLatitude : '',
        wLongitude : '',
        wDesc : '',
        wIcon : ''
    });

    useEffect(() => {
        async function fetchWeatherAPI() {
            const firstapikey = "aee03cc8b666d14b02671a88ca207cd5";
            // const secondapikey = "c7a7e414832a36ad770226e190161e49";
            /* For Language :  http://api.openweathermap.org/data/2.5/weather?q=${submitCity}&appid=${secondapikey}&lang={lang} */
            const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${submitCity}&appid=${firstapikey}&units=metric`;
            const response = await fetch(weatherurl);
            // console.log(response);
            const respJson = await response.json();
            // console.log(respJson);
            
            if(respJson.cod === "404") {
                setCityData({
                    wCityName : 'Invalid City',
                    wTemprature : 'Data Not Found',
                    wCountry : null,
                    wMaxTemprature : null,
                    wMinTemprature : null,
                    wSunrise : null,
                    wSunset : null,
                    wCod : null,
                    wLatitude : null,
                    wLongitude : null,
                    wDesc : null,
                    wIcon : null,
                });
            }
            else {
                setCityData({
                    wCityName : respJson.name,
                    wTemprature : respJson.main.temp,
                    wCountry : respJson.sys.country,
                    wMaxTemprature : respJson.main.temp_max,
                    wMinTemprature : respJson.main.temp_min,
                    wSunrise : respJson.sys.sunrise,
                    wSunset : respJson.sys.sunset,
                    wCod : respJson.cod,
                    wLatitude : respJson.coord.lat,
                    wLongitude : respJson.coord.lon,
                    wDesc : respJson.weather[0].description,
                    wIcon : respJson.weather[0].icon,
                });
            }
            
        }
        fetchWeatherAPI();
    },[submitCity]);

    const weatherInputEvent = (event) => {
        setSearchCity(event.target.value);
    }

    const submitCityOnClick = () => {
        setSubmitCity(currSearchCity);
    }

    return (
        <div className="weather-app-container container-fluid">
            <div className="container">
            <HeaderSection inputEvent={weatherInputEvent} citydata={currCityData} submitOnClick={submitCityOnClick} />
            <WeatherResult citydata={currCityData} />   
            <Footer />
            </div>
        </div>
    );
}

export default WeatherApp;
