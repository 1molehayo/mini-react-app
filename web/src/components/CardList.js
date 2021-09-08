import React from "react";
import PropTypes from "prop-types";
import ToggleSwitch from "./ToggleSwitch";
import { formatDateRange } from "utility";
import classnames from "classnames";

export default function CardList({ data, type }) {
  return (
    <div className="card__container">
      <div className="row">
        {data &&
          data.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card">
                <div className="card__image">
                  <img src="" alt="" />
                </div>

                <div className="card__details">
                  <div>
                    <h4 className="mb-0" data-testid={`${type}-name-${index}`}>
                      {item?.attributes.name}
                    </h4>

                    <p className="card__sub-heading">
                      {type === "devices"
                        ? item?.attributes.model_number || "N/A"
                        : item?.attributes.email || "N/A"}
                    </p>

                    {type === "users" && item?.type === "access_guest" && (
                      <p className="font-semi-bold">
                        {formatDateRange(
                          item?.attributes.starts_at,
                          item?.attributes.ends_at
                        )}
                      </p>
                    )}
                  </div>

                  {type === "devices" && (
                    <div className="card__row">
                      <ToggleSwitch
                        id={item.id}
                        isActive={item?.attributes.state === "locked"}
                      />

                      <p
                        className={classnames("mb-0", {
                          "color-green": item?.attributes.state === "locked",
                          "color-red": item?.attributes.state !== "locked",
                        })}
                      >
                        <span
                          className={classnames({
                            "icon-padlock": item?.attributes.state === "locked",
                            "icon-open-padlock":
                              item?.attributes.state !== "locked",
                          })}
                        ></span>{" "}
                        {item?.attributes.state === "locked"
                          ? "Locked"
                          : "Unlocked"}
                      </p>
                    </div>
                  )}

                  {type === "users" && (
                    <div className="card__row">
                      <div
                        className={classnames("badge", {
                          "badge--active":
                            item?.attributes.status === "current",
                          "badge--upcoming":
                            item?.attributes.status !== "current",
                        })}
                      >
                        {item?.attributes.status === "current"
                          ? "Active"
                          : "Upcoming"}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};
