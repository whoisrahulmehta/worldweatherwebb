import React from "react";
import { Link } from "react-router-dom";

function Section() {
  const fakeWeatherData = [
    {
      id: 1,
      humidity: 70,
      windSpeed: 10,
      pressure: 1000,
    },
    {
      id: 2,
      humidity: 65,
      windSpeed: 12,
      pressure: 990,
    },
    {
      id: 3,
      humidity: 68,
      windSpeed: 11,
      pressure: 995,
    },
    {
      id: 4,
      humidity: 72,
      windSpeed: 9,
      pressure: 998,
    },
    {
      id: 5,
      humidity: 69,
      windSpeed: 11,
      pressure: 1002,
    },,
    {
      id: 6,
      humidity: 69,
      windSpeed: 11,
      pressure: 1002,
    },
    {
      id: 7,
      humidity: 69,
      windSpeed: 11,
      pressure: 1002,
    },
    {
      id: 8,
      humidity: 69,
      windSpeed: 11,
      pressure: 1002,
    },
    {
      id: 9,
      humidity: 69,
      windSpeed: 11,
      pressure: 1002,
    },
  ];

  // console.log(data);
  return (
    <>
      <section>
      {fakeWeatherData.map((data) => (
        // <Link key={data.id} to={`/hourly/${data.id}`}>
        <Link key={data.id} to ="/hourly" >
          <p>
            {/* <span>{data.id}</span> */}
            <span>Humidity: {data.humidity}%</span>
            <span>Wind Speed: {data.windSpeed}mps</span>
            <span>Pressure: {data.pressure} MB</span>
          </p>
        </Link>
      ))}
      </section>
    </>
  );
}

export default Section;
