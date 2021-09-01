import React from "react";
import PropTypes from "prop-types";

export default function CardList({ data }) {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__image">
          <img src="" alt="" />
        </div>

        <div className="card__details">
          <div>
            <h4>Title</h4>
            <p>Description</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
};
