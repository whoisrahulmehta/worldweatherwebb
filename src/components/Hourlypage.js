import React from "react";

function Hourlypage() {
  const fakeHourlyForecast = [
    {
      id: 1,
      time: "12:00 AM",
      temperature: -5,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 2,
      time: "01:00 AM",
      temperature: -6,
      weatherIcon: "moon",
      description: "Partly Cloudy",
    },
    {
      id: 3,
      time: "02:00 AM",
      temperature: -7,
      weatherIcon: "cloud",
      description: "Cloudy",
    },
    {
      id: 4,
      time: "03:00 AM",
      temperature: -8,
      weatherIcon: "cloud-sun",
      description: "Partly Sunny",
    },
    {
      id: 5,
      time: "04:00 AM",
      temperature: -9,
      weatherIcon: "cloud-rain",
      description: "Light Rain",
    },
    {
      id: 6,
      time: "05:00 AM",
      temperature: -10,
      weatherIcon: "cloud-showers-heavy",
      description: "Heavy Rain",
    },
    {
      id: 7,
      time: "06:00 AM",
      temperature: -11,
      weatherIcon: "cloud-lightning",
      description: "Thunderstorms",
    },
    {
      id: 8,
      time: "07:00 AM",
      temperature: -12,
      weatherIcon: "snowflake",
      description: "Snow",
    },
    {
      id: 9,
      time: "08:00 AM",
      temperature: -13,
      weatherIcon: "smog",
      description: "Foggy",
    },
    {
      id: 10,
      time: "09:00 AM",
      temperature: -14,
      weatherIcon: "tornado",
      description: "Tornado",
    },
    {
      id: 11,
      time: "10:00 AM",
      temperature: -15,
      weatherIcon: "wind",
      description: "Windy",
    },
    {
      id: 12,
      time: "11:00 AM",
      temperature: -16,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 13,
      time: "12:00 PM",
      temperature: -17,
      weatherIcon: "moon",
      description: "Partly Cloudy",
    },
    {
      id: 14,
      time: "01:00 PM",
      temperature: -18,
      weatherIcon: "cloud",
      description: "Cloudy",
    },
    {
      id: 15,
      time: "02:00 PM",
      temperature: -19,
      weatherIcon: "cloud-sun",
      description: "Partly Sunny",
    },
    {
      id: 16,
      time: "03:00 PM",
      temperature: -20,
      weatherIcon: "cloud-rain",
      description: "Light Rain",
    },
    {
      id: 17,
      time: "04:00 PM",
      temperature: -21,
      weatherIcon: "cloud-showers-heavy",
      description: "Heavy Rain",
    },
    {
      id: 18,
      time: "05:00 PM",
      temperature: -22,
      weatherIcon: "cloud-lightning",
      description: "Thunderstorms",
    },
    {
      id: 19,
      time: "06:00 PM",
      temperature: -23,
      weatherIcon: "snowflake",
      description: "Snow",
    },
    {
      id: 20,
      time: "07:00 PM",
      temperature: -24,
      weatherIcon: "smog",
      description: "Foggy",
    },
    {
      id: 21,
      time: "08:00 PM",
      temperature: -25,
      weatherIcon: "tornado",
      description: "Tornado",
    },
    {
      id: 22,
      time: "09:00 PM",
      temperature: -26,
      weatherIcon: "wind",
      description: "Windy",
    },
    {
      id: 23,
      time: "10:00 PM",
      temperature: -27,
      weatherIcon: "sun",
      description: "Clear",
    },
    {
      id: 24,
      time: "11:00 PM",
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
            <span> {obj.time}</span>
            <span>Temprature : {obj.temperature}</span>
            <span> {obj.weatherIcon}</span>
            <span> {obj.description}</span>
          </p>
        ))}
      </div>
    </>
  );
}

export default Hourlypage;
