import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";
import CardList from "components/CardList";

const Users = () => {
  const [userList, setUserList] = useState();

  const loadUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/users.json");
      const data = await res.json();
      setUserList(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

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
          {userList && (
            <p className="text-center">
              There are{" "}
              <span className="font-bold">{userList.length || 0}</span> users on
              this page
            </p>
          )}

          <CardList data={userList} type="users" />
        </div>
      </div>
    </motion.section>
  );
};

export default Users;
