import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => <Link to={props.destination}>{props.name}</Link>;

export default Item;
