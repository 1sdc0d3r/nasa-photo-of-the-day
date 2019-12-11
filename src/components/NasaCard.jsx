import React from "react";

export default function NasaCard(props) {
  return (
    <div className="card">
      <h3 className="data">{props.date}</h3>
      <h2 className="title">{props.title}</h2>
      <img className="media" src={props.url} alt="media here"></img>
      <p className="explanation">{props.explanation}</p>
    </div>
  );
}
