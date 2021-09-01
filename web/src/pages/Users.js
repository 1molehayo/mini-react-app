import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";

const Users = () => {
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
          <p className="text-center">There are 20 users on this page</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Users;
