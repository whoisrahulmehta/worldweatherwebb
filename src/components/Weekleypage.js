import React from 'react'

function Weekleypage() {

  const fakeHourlyForecast = [
    {
      id: 1,
      date: "2024-07-05T00:00:00",
      temperature: -5,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 2,
      date: "2024-07-05T01:00:00",
      temperature: -6,
      weatherIcon: "moon",
      description: "Partly Cloudy",
    },
    {
      id: 3,
      date: "2024-07-05T02:00:00",
      temperature: -7,
      weatherIcon: "cloud",
      description: "Cloudy",
    },
    {
      id: 4,
      date: "2024-07-05T03:00:00",
      temperature: -8,
      weatherIcon: "cloud-sun",
      description: "Partly Sunny",
    },
    {
      id: 5,
      date: "2024-07-05T04:00:00",
      temperature: -9,
      weatherIcon: "cloud-rain",
      description: "Light Rain",
    },
    {
      id: 6,
      date: "2024-07-05T05:00:00",
      temperature: -10,
      weatherIcon: "cloud-showers-heavy",
      description: "Heavy Rain",
    },
    {
      id: 7,
      date: "2024-07-05T06:00:00",
      temperature: -11,
      weatherIcon: "cloud-lightning",
      description: "Thunderstorms",
    },
    {
      id: 8,
      date: "2024-07-05T07:00:00",
      temperature: -12,
      weatherIcon: "snowflake",
      description: "Snow",
    },
    {
      id: 9,
      date: "2024-07-05T08:00:00",
      temperature: -13,
      weatherIcon: "smog",
      description: "Foggy",
    },
    {
      id: 10,
      date: "2024-07-05T09:00:00",
      temperature: -14,
      weatherIcon: "tornado",
      description: "Tornado",
    },
    {
      id: 11,
      date: "2024-07-05T10:00:00",
      temperature: -15,
      weatherIcon: "wind",
      description: "Windy",
    },
    {
      id: 12,
      date: "2024-07-05T11:00:00",
      temperature: -16,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 13,
      date: "2024-07-05T12:00:00",
      temperature: -17,
      weatherIcon: "moon",
      description: "Partly Cloudy",
    },
    {
      id: 14,
      date: "2024-07-05T13:00:00",
      temperature: -18,
      weatherIcon: "cloud",
      description: "Cloudy",
    },
    {
      id: 15,
      date: "2024-07-05T14:00:00",
      temperature: -19,
      weatherIcon: "cloud-sun",
      description: "Partly Sunny",
    },
    {
      id: 16,
      date: "2024-07-05T15:00:00",
      temperature: -20,
      weatherIcon: "cloud-rain",
      description: "Light Rain",
    },
    {
      id: 17,
      date: "2024-07-05T16:00:00",
      temperature: -21,
      weatherIcon: "cloud-showers-heavy",
      description: "Heavy Rain",
    },
    {
      id: 18,
      date: "2024-07-05T17:00:00",
      temperature: -22,
      weatherIcon: "cloud-lightning",
      description: "Thunderstorms",
    },
    {
      id: 19,
      date: "2024-07-05T18:00:00",
      temperature: -23,
      weatherIcon: "snowflake",
      description: "Snow",
    },
    {
      id: 20,
      date: "2024-07-05T19:00:00",
      temperature: -24,
      weatherIcon: "smog",
      description: "Foggy",
    },
    {
      id: 21,
      date: "2024-07-05T20:00:00",
      temperature: -25,
      weatherIcon: "tornado",
      description: "Tornado",
    },
    {
      id: 22,
      date: "2024-07-05T21:00:00",
      temperature: -26,
      weatherIcon: "wind",
      description: "Windy",
    },
    {
      id: 23,
      date: "2024-07-05T22:00:00",
      temperature: -27,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 24,
      date: "2024-07-05T23:00:00",
      temperature: -28,
      weatherIcon: "moon",
      description: "Partly Cloudy",
    },
  ];
  


  return (
    <>
       <div className="details">
        {fakeHourlyForecast.map((obj, index) => (
          <p key={index}>
            <span> {obj.date}</span>
            <span>Temprature : {obj.temperature}</span>
            <span> {obj.weatherIcon}</span>
            <span> {obj.description}</span>
          </p>
        ))}
      </div>
    </>
  )
}

export default Weekleypage
