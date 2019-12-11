import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{nasa.date}</h2>
      </header>
    </div>
  );
}

export default App;
