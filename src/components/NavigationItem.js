import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = (props) => (
  <div class="NavigationItem">
    <Link to={props.destination}>{props.name}</Link>
  </div>
);

export default NavigationItem;
