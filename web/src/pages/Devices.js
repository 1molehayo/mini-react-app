import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";
import CardList from "components/CardList";
import useFetch from "services/useFetch";
import { Error, Loader } from "components";

const Devices = () => {
  const { status, data, error } = useFetch("devices.json");

  return (
    <motion.section
      exit="out"
      initial="out"
      animate="in"
      variants={ANIMATION_DEFAULTS.pageTransition}
      transition={ANIMATION_DEFAULTS.duration}
    >
      {/* {status === "fetching" && <Loader />} */}
      <Loader />

      <div className="section">
        {status === "fetched" && (
          <div className="container">
            {data && (
              <p className="text-center">
                There are <span className="font-bold">{data.length || 0}</span>{" "}
                devices on this page
              </p>
            )}

            <CardList data={data} type="devices" />
          </div>
        )}

        {status === "error" && <Error msg={error} />}
      </div>
    </motion.section>
  );
};

export default Devices;
