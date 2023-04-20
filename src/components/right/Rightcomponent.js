import React from "react";
import "./right.css";
import { FaSearchLocation } from "react-icons/fa";

const Rightcomponent = ({ Data, setSearch, search, getData }) => {
  function handleKeyPress(e) {
    var key = e.key;
    console.log("You pressed a key: " + key);
    if (key === "Enter") {
      getData();
    }
  }
  return (
    <div className="right-container">
      <div className="searchbar">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="input"
          type="text"
          value={search}
          placeholder="Another Location"
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <div
          style={{
            background: "#B9E9FC",
            padding: "16px",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            cursor: "pointer",
          }}
        >
          <FaSearchLocation
            onClick={() => getData()}
            size={36}
            className="search-icon"
          />
        </div>
      </div>
      <div className="cities">
        <p
          onClick={() => {
            getData("Haridwar");
          }}
        >
          Haridwar
        </p>
        <p
          onClick={() => {
            getData("Delhi");
          }}
        >
          Delhi
        </p>
        <p
          onClick={() => {
            getData("Bengaluru");
          }}
        >
          Bengaluru
        </p>
        <p
          onClick={() => {
            getData("Varanasi");
          }}
        >
          Varanasi
        </p>
      </div>
      <hr
        style={{
          height: 2,
          backgroundColor: "darkgrey",
          outline: "none",
          border: "none",
          color: "black",
          margin: "30px 30px 30px 0",
        }}
      />
      <div className="weather-details">
        <h4 style={{ color: "#ffffff" }}>Weather Details</h4>
        <div>
          <p className="properties">Cloud</p>
          <p className="prop-value">{Data?.clouds?.all}%</p>
        </div>
        <div>
          <p className="properties">Humidity</p>
          <p className="prop-value">{Data?.main?.humidity}%</p>
        </div>
        <div>
          <p className="properties">Wind</p>
          <p className="prop-value">{Data?.wind?.speed}km/h</p>
        </div>
        <div>
          <p className="properties">Pressure</p>
          <p className="prop-value">{Data?.main?.pressure}bp</p>
        </div>
      </div>
      <hr
        style={{
          height: 2.5,
          backgroundColor: "grey",
          outline: "none",
          border: "none",
          margin: "30px 30px 30px 0",
        }}
      />
    </div>
  );
};

export default Rightcomponent;
