import "./App.css";
import Leftcomponent from "./components/left/Leftcomponent";
import Rightcomponent from "./components/right/Rightcomponent";
import { useState, useEffect } from "react";

function App() {
  const [newData, setnewData] = useState(null);
  const [search, setSearch] = useState("delhi");
  const getData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        cityName || search
      }&appid=c7582f100ec138ebfad80326ebbab8c2`
    )
      .then((response) => response.json())
      .then((newres) => setnewData(newres))
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          alert("please enter a valid city name");
        }
        if (err.response.status === 400) {
          alert("please enter a valid cityname");
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(newData);
  return (
    <div className="App">
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
