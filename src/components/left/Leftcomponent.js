import React from "react";
import "./left.css";

const Leftcomponent = ({ Data }) => {
  let Temp = Math.floor(Data?.main?.temp);
  Temp = Temp - 273;
  return (
    <div className="left-container">
      <div className="haze">
        {/* <p>{Data.icon}</p> */}
        <img
          id="wicon"
          src={`https://openweathermap.org/img/wn/${Data?.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <p>{Data?.weather[0].main}</p>
      </div>
      <div className="temp-details">
        <p>{Temp}°</p>
        <div>
          <p className="city-time">{Data?.name}</p>
          <p style={{ margin: 0, color: "white", fontSize: "20px" }}>
            {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leftcomponent;
