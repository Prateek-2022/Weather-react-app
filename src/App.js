import "./App.css";
import Leftcomponent from "./components/left/Leftcomponent";
import Rightcomponent from "./components/right/Rightcomponent";
import { useState, useEffect } from "react";
import axios from "axios";

let num = Math.floor(Math.random() * 20);
function App() {
  const [newData, setnewData] = useState(null);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(null);

  console.log(num);
  const getData = (cityName) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          cityName || search || "delhi"
        }&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        num = Math.floor(Math.random() * 20);
        setnewData(response.data);
        getImages(response.data.weather[0].main);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("please enter a valid city name");
        }
        if (err.response.status === 400) {
          alert("please enter a valid cityname");
        }
      });
    setSearch("");
  };

  const getImages = (type) => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_IMAGES_API_KEY}&q=${type}&image_type=photo`
      )
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // const imageURL = ;
  return (
    <div
      style={{
        backgroundImage: `url(${image?.hits[num]?.largeImageURL})`,
        display: `flex`,
        backgroundSize: "cover",
      }}
    >
      <Leftcomponent Data={newData} />
      <Rightcomponent
        Data={newData}
        search={search}
        setSearch={setSearch}
        getData={getData}
      />
    </div>
  );
}

export default App;
