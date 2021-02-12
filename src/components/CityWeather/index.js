import React from 'react';

const CityWeather = (cityWeather) => {

    return (
        <div>
            <p>Temperature(F):{cityWeather.main.temp}</p>
            <p>Weather:{cityWeather.weather[0].main}</p>
            <p>Wind Speed:{cityWeather.wind.speed} </p>
        </div>
    );
};

export default CityWeather;