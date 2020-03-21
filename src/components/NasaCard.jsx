import React from "react";
import { Button, CardMedia } from "@material-ui/core";

export default function NasaCard(props) {
  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <h4 className="date">{props.date}</h4>
      <img className="media" src={props.url} alt="media here"></img>
      <p className="explanation">{props.explanation}</p>
      <p class="link">
        <a href="https://portfolio.bradenbell.now.sh/"> Braden's Portfolio</a>
      </p>
      {/* <Button color="primary">Braden's Portfolio</Button> */}
      {/* <CardMedia
        src={props.url}
        image={props.url}
        component="div"
        className="material-ui-cardMedia"
      >
        {props.title}
        {props.date}
        {props.explanation}
      </CardMedia> */}
    </div>
  );
}
