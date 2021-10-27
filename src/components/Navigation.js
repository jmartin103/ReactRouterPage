import React from "react";

import Item from "./Item";

const Navigation = () => (
  <div className="Navigation">
    <Item destination="/" name="Home" />
    <Item destination="/about" name="About" />
    <Item destination="/contact" name="Contact" />
  </div>
);

export default Navigation;
