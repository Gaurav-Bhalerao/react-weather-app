import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
    // store the search input value
    const [currSearch, setSearch] = useState("");
    // store the api data of city
    const [currWeatherCity, setWeatherCity] = useState("");

    useEffect(() => {
        async function fetchWeatherAPI() {
            const weatherurl = `http://api.openweathermap.org/data/2.5/weather?q=${currSearch}&appid=aee03cc8b666d14b02671a88ca207cd5`;
            const response = await fetch(weatherurl);
            // console.log(response);
            const respJson = await response.json();
            console.log(respJson);
            setWeatherCity(respJson);
        }

        fetchWeatherAPI();
    },[currSearch]);

    return (<>
        <div className="container-fluid weather-app-container">
            <div className="weather-heading py-5 h1"> React Weather App </div>
            <div className="weather-app container">
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <input 
                        className="city-search form-control form-control-lg" 
                        type="search" 
                        placeholder="Search For City" 
                        name="weathercity"
                        onChange={ (event) => { setSearch(event.target.value) } }
                        value={currSearch}
                    />
                    <button className="btn btn-lg btn-primary my-3"> Check Temperature </button>
                </form>
                <div className="py-5">
                    {
                        currWeatherCity.cod ==="404" ? ( <h1> City Not Found </h1> ) : (
                            <>
                                <h1> {currWeatherCity.name} </h1>
                                <h1> Latitute : {currWeatherCity.coord.lat} <br /> Logitude : {currWeatherCity.coord.lon} </h1>
                                <h1> {currWeatherCity.main.temp} </h1>
                                <h1> {currWeatherCity.main.feels_like} </h1>
                                <h1> {currWeatherCity.main.temp_min} </h1>
                                <h1> {currWeatherCity.main.temp_max} </h1>
                            </>
                        ) 
                    }
                </div>
                <section>
                    <div className="first-temperature-container d-flex align-items-center justify-content-end px-5" style={{width:'100%'}}>
                        <div className="">
                            <h1> Image </h1>
                        </div>
                        <div className="">
                            <div id="temp-cel"> 34°Cel </div>
                            <div id="temp-desc"> Mostly Sunny </div>
                        </div>
                    </div>
                    <div className="first-temperature-container px-5" style={{width:'100%'}}>
                        <div className="first-result d-flex align-items-center justify-content-between py-5">
                            <div id="temp-cel"> 34°Cel <br /> Max </div>
                            <div id="temp-cel"> 34°Cel <br /> Min </div>
                            <div id="temp-cel"> 34°Cel <br /> Sunrise </div>
                        </div>
                        <div className="second-result d-flex align-items-center justify-content-between py-5">
                            <div id="temp-cel"> 34°Cel <br /> Max </div>
                            <div id="temp-cel"> 34°Cel <br /> Min </div>
                            <div id="temp-cel"> 34°Cel <br /> Sunrise </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>);
}

export default WeatherApp;
