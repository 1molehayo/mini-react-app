import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ToggleSwitch({ id, isActive }) {
  const [open, setOpen] = useState(isActive);
  const toggleCheckbox = () => setOpen((prevState) => !prevState);

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id={`switch-${id}`}
        onChange={toggleCheckbox}
        checked={open}
      />
      <label htmlFor={`switch-${id}`}>Toggle</label>
    </div>
  );
}

ToggleSwitch.propTypes = {
  isActive: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  isActive: false,
};
