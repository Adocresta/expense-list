import React from "react";
import "./Card.css";

// this custom element allows us to add multiple classes
const Card = (props) => {
  const classes =
    "card" + (!(props.className === undefined) ? " " + props.className : "");
  return <div className={classes}>{props.children}</div>;
};

export default Card;
