import React from "react";
import { NavLink } from "react-router-dom";

export default function TabSwitch() {
  return (
    <div className="tab-switch__wrapper">
      <nav className="tab-switch">
        <NavLink to="/devices" className="tab-switch__link">
          <span className="icon-cpu" /> Devices
        </NavLink>

        <NavLink to="/users" className="tab-switch__link">
          <span className="icon-users" /> Users
        </NavLink>
      </nav>
    </div>
  );
}
