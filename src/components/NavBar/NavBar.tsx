import React from 'react';
import Button from '../Button/Button';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-text">
                <span className="span-first">Make MyNews your homepage</span>
                <span className="span-second">Every day discover what's trending on the internet!</span>
            </div>
            <div className="navbar-buttons">
                <Button type="button" route="/">GET</Button>
                <Button type="button" route="/">No, thanks</Button>
            </div>
        </div>
    )
}

export default NavBar