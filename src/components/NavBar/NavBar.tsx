import React from "react";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-text">
        <p className="p-first">Make MyNews your homepage</p>
        <p className="p-second">
          Every day discover what's trending on the internet!
        </p>
      </div>
      <div className="navbar-buttons">
        <Button className="button-get" type="button" route="/">
          GET
        </Button>
        <Button className="button-no-thanks" type="button" route="/">
          No, thanks
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
