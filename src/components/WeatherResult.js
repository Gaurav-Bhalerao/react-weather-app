import React from 'react';

const WeatherResult = (props) => {
    const SunRiseSetTime = () => {
        var sunriseTime = new Date(props.citydata.wSunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute : 'numeric' ,hour12: true });
        var sunsetTime = new Date(props.citydata.wSunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute : 'numeric' ,hour12: true });
        
        return {sunriseTime, sunsetTime};
    }
    return (
        <section className="weather-result-container">
            <div className="first-temperature-container" style={{width:'100%'}}>
                <div className="weather-image text-center px-2">
                    <img src={`http://openweathermap.org/img/wn/${props.citydata.wIcon}@2x.png`} alt="Weather Icon" />
                </div>
                <div className="weather-text text-center px-2">
                    <div id="temp-res"> <strong>{props.citydata.wTemprature}°</strong> Cel </div>
                    <div id="temp-desc"> {props.citydata.wDesc} </div>
                </div>
            </div>

            <br /><hr /><br />

            <div className="second-temperature-container" style={{width:'100%'}}>
                <div className="second-first-result">
                    <div id="temp-cel" className="py-3"> <strong> {props.citydata.wMaxTemprature}° </strong> <br /> Max </div>
                    <div id="temp-cel" className="py-3"> <strong> {props.citydata.wMinTemprature}° </strong> <br /> Min </div>
                </div>

                <div className="second-second-result">
                    <div id="temp-cel" className="py-3"> <strong> {SunRiseSetTime().sunriseTime}</strong> <br /> Sunrise </div>
                    <div id="temp-cel" className="py-3"> <strong> {SunRiseSetTime().sunsetTime}</strong> <br /> Sunset </div>
                </div>

                <div className="second-third-result">
                    <div id="temp-cel" className="py-3"> <strong> {props.citydata.wLatitude} </strong> <br /> Latitude </div>
                    <div id="temp-cel" className="py-3"> <strong> {props.citydata.wLongitude} </strong> <br /> Longitude</div>
                </div>
            </div>
        </section>
    );
}

export default WeatherResult;
