import React, { useState } from "react";

export const ToggleSwitch = () => {
  const [open, setOpen] = useState(false);
  const toggleCheckbox = () => setOpen((prevState) => !prevState);

  return (
    <div className="toggler">
      <input
        type="checkbox"
        id="switch"
        onChange={toggleCheckbox}
        checked={open}
      />
      <label for="switch">Toggle</label>
    </div>
  );
};
