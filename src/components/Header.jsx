import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="meeting-name">DCI Students</h1>
            </div>
            <div className="header-right">
                <span className="breakout-rooms-info">
                    Breakout rooms are in session
                </span>
            </div>
        </header>
    );
};

export default Header;
