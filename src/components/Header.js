import React from "react";

const Header = ({ toggleDarkMode }) => {
  return (
    <div className="header">
      <h1>My notes</h1>
      <button
        className="save"
        onClick={() => toggleDarkMode((prevState) => !prevState)}
      >
        Toggle mode
      </button>
    </div>
  );
};

export default Header;
