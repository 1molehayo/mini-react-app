import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";
import CardList from "components/CardList";

const Devices = () => {
  return (
    <motion.section
      exit="out"
      initial="out"
      animate="in"
      variants={ANIMATION_DEFAULTS.pageTransition}
      transition={ANIMATION_DEFAULTS.duration}
    >
      <div className="section">
        <div className="container">
          <p className="text-center">There are 20 devices on this page</p>

          <CardList />
        </div>
      </div>
    </motion.section>
  );
};

export default Devices;
