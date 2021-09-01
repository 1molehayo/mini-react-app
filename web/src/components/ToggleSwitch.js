import React, { useState } from "react";
import PropTypes from "prop-types";

export const ToggleSwitch = ({ isActive }) => {
  const [open, setOpen] = useState(isActive);
  const toggleCheckbox = () => setOpen((prevState) => !prevState);

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="switch"
        onChange={toggleCheckbox}
        checked={open}
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isActive: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  isActive: false,
};
