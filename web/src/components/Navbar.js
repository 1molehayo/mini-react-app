import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="container header__container">
      <NavLink className="header__brand" to="/">
        Mini App
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/devices" className="header__nav-link">
          Devices
        </NavLink>

        <NavLink to="/users" className="header__nav-link">
          Users
        </NavLink>
      </nav>
    </div>
  );
};
