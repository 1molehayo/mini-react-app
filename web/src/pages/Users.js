import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";
import CardList from "components/CardList";
import useFetch from "services/useFetch";
import { Error, Loader } from "components";

const Users = () => {
  const { status, data, error } = useFetch("users.json");

  return (
    <motion.section
      exit="out"
      initial="out"
      animate="in"
      variants={ANIMATION_DEFAULTS.pageTransition}
      transition={ANIMATION_DEFAULTS.duration}
    >
      {status === "fetching" && <Loader />}

      <div className="section">
        {status === "fetched" && (
          <div className="container">
            {data && (
              <p className="text-center">
                There are <span className="font-bold">{data.length || 0}</span>{" "}
                users on this page
              </p>
            )}

            <CardList data={data} type="users" />
          </div>
        )}
      </div>

      {status === "error" && <Error msg={error} />}
    </motion.section>
  );
};

export default Users;
