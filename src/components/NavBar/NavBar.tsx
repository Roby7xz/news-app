import React from "react";
import Button from "../Button/Button";
import { MenuIcon } from "../../assets/svgExports";

type Props = {
  isMobileScreen: boolean;
};

const NavBar = ({ isMobileScreen }: Props) => {
  const handleShowMenu = () => {
    console.log("MOlim");
  };

  return (
    <>
      {isMobileScreen ? (
        <div className="navbar">
          <div className="navbar-title">
            <span className="title-first-span">My</span>
            <span className="title-second-span">News</span>
          </div>
          <div className="navbar-buttons">
            <Button
              className="button-get"
              type="button"
              onClick={handleShowMenu}
            >
              <img src={MenuIcon} alt="Menu.svg" />
            </Button>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default NavBar;
