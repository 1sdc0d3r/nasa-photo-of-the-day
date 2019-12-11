import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./components/NasaCard";

function App() {
  let [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=RR4nfp6N4yPogjd0s32Q2GywGcMGDdxdhcRA86R0"
      )
      .then(res => {
        setNasa(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(nasa);
  return (
    <div className="App">
      <header className="App-header">
        <NasaCard
          date={nasa.date}
          title={nasa.title}
          url={nasa.url}
          explanation={nasa.explanation}
        />
      </header>
    </div>
  );
}

export default App;
