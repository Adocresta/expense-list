import React from "react";
import "./Card.css";

const Card = (props) => {
  // custom className prop to add extra classnames to our UI component
  const classes =
    "card" + (!(props.className === undefined) ? " " + props.className : "");
  return <div className={classes}>{props.children}</div>;
};

export default Card;
