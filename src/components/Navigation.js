import React from "react";

import NavigationItem from "./NavigationItem";

const Navigation = () => (
  <div className="Navigation">
    <NavigationItem destination="/" name="Home" />
    <NavigationItem destination="/about" name="About" />
    <NavigationItem destination="/contact" name="Contact" />
  </div>
);

export default Navigation;
