import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container__content">
        <p className="header-container__content__text">
          <span className="header-container__content__text__greet">Hi!</span> We
          are currently in the process of technical work, but it will be
          completed soon.
          <span className="header-container__content__text__thnks">
            Thanks for waiting!
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
