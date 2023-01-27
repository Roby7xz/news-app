import Button from "../Button/Button";
import { MenuIcon, ExitMenuIcon } from "../../assets/svgExports";
import { useState } from "react";

type Props = {
  isMobileScreen: boolean;
  showMenu: boolean;
  handleShowMenu: () => void;
};

const NavBar = ({ isMobileScreen, showMenu, handleShowMenu }: Props) => {
  return (
    <>
      {isMobileScreen ? (
        <div className="navbar">
          {showMenu ? (
            <div className="navbar-title-center">
              <span className="title-first-span">My</span>
              <span className="title-second-span">News</span>
            </div>
          ) : (
            <div className="navbar-title">
              <span className="title-first-span">My</span>
              <span className="title-second-span">News</span>
            </div>
          )}
          <div className="navbar-buttons">
            <Button
              className="button-get"
              type="button"
              onClick={handleShowMenu}
            >
              {showMenu ? (
                <img src={ExitMenuIcon} alt="ExitMenu.svg" />
              ) : (
                <img src={MenuIcon} alt="Menu.svg" />
              )}
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
