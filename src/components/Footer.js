import React, { useState } from "react";

function Footer() {

  const fakeHourlyForecastData = [
    {
      EpochDateTime: 1593890400,
      WeatherIcon: 3,
      IconPhrase: "Partly sunny",
      Temperature: {
        Value: 28.0,
        Unit: "C",
        UnitType: 17
      }
    },
    {
      EpochDateTime: 1593894000,
      WeatherIcon: 1,
      IconPhrase: "Sunny",
      Temperature: {
        Value: 29.0,
        Unit: "C",
        UnitType: 17
      }
    },
    {
      EpochDateTime: 1593897600,
      WeatherIcon: 2,
      IconPhrase: "Mostly sunny",
      Temperature: {
        Value: 30.0,
        Unit: "C",
        UnitType: 17
      }
    },
    {
      EpochDateTime: 1593901200,
      WeatherIcon: 4,
      IconPhrase: "Intermittent clouds",
      Temperature: {
        Value: 27.0,
        Unit: "C",
        UnitType: 17
      }
    },
    {
      EpochDateTime: 1593904800,
      WeatherIcon: 5,
      IconPhrase: "Hazy sunshine",
      Temperature: {
        Value: 26.0,
        Unit: "C",
        UnitType: 17
      }
    }
  ];
  const [weatherData, setWeatherData] = useState(fakeHourlyForecastData); // Using fake data here
  const [error, setError] = useState('');
  const formatEpochTime = (epoch) => {
    const date = new Date(epoch * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <footer>
      {weatherData.map((data, index) => (
              <div key={index}>
                <p>
                  <span>{index === 0 ? 'Now' : formatEpochTime(data.EpochDateTime)}</span>
                  <span><img src={`https://developer.accuweather.com/sites/default/files/${data.WeatherIcon < 10 ? '0' : ''}${data.WeatherIcon}-s.png`} alt={data.IconPhrase} /></span>
                  <span>{data.Temperature.Value}°{data.Temperature.Unit}</span>
                </p>
              </div>
            ))}
             </footer>
    </>
  );
}

export default Footer;
