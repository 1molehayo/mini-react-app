import React from "react";
import PropTypes from "prop-types";

export const Error = ({ msg }) => {
  return (
    <div className="container text-center">
      <h2>ERROR!!!</h2>
      <p>{msg}</p>
    </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string,
};

Error.defaultProps = {
  msg: "There was an error while fetching the data",
};
