import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Main() {
  const [time, setTime] =useState( new Date() );
  const [greetmsg, setGreetmsg] = useState('Day');

  useEffect(
    ()=> {
      const interval = setInterval(()=>{
       setTime(new Date());
      },1000)
      return() => clearInterval(interval);
    }
    ,[]);
    // console.log(time);

 const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const formatTime = (time) => {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const year = time.getFullYear();
  const month = months[time.getMonth()];
  const day = days[time.getDay()];
  const date = time.getDate().toString().padStart(2, "0"); // Day of the month

  return `${day} ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};
const hours = time.getHours().toString().padStart(2, "0");

useEffect(()=>{
  let newMsg = 'M orning';

  if (hours >= 4 && hours < 12) {
     newMsg= 'Morning';
  } else if (hours >= 12 && hours < 17) {
    newMsg = 'Afternoon';
  } else if (hours >= 17 && hours < 21) {
    newMsg = 'Evening';
  } else {
    newMsg = 'Night';
  }
setGreetmsg(newMsg);
},[time])


  return (

    <>
      <main>
        <div className="top">
          <p className="locationDiv">
            <input type="text" placeholder="Search Location " />
            <span className="insider">
              <FontAwesomeIcon icon={faLocation} />
            </span>
          </p>
        </div>
        <div className="mid">
          <p className="timeGreet">Good {greetmsg}</p>
          <p className="timeT">{formatTime(time)}</p><br/>
          <p className="wimg" style={{opacity:"0.3"}}>
            This is a demo design need a paid API for real time app
          </p>
        </div>
        <div className="end"><a href="">Full Details</a></div>
      </main>
    </>
  );
}

export default Main;
