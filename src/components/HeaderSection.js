import React from 'react';

const HeaderSection = (props) => {
    const dateFun = () => {
        const todayDate = new Date();
        const dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const currTimeData = dayArr[todayDate.getDay()] + "  " + todayDate.getDate() + "  " + monthArr[todayDate.getMonth()];
        return {currTimeData};
    }

    return (
        <section className="first-section-container">
            <div className="city-section">
                <div id="cityname" className="h1"> {props.citydata.wCityName}, {props.citydata.wCountry} </div>
                <div id="today-time" className="h4"> {dateFun().currTimeData} </div>
            </div>
            <div className="search-section">
                <input type="search" className="form-control form-control-lg" id="weather-search" placeholder="Enter city name" name="weathercity" onChange={ props.inputEvent }  />
                <button className="btn btn-outline-warning my-2 px-5" style={{float : 'right'}} onClick={props.submitOnClick}> Submit </button>
            </div>
        </section>
    );
}

export default HeaderSection;
