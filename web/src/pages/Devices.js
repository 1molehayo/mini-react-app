import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ANIMATION_DEFAULTS } from "utility/constants";
import CardList from "components/CardList";

const Devices = () => {
  const [deviceList, setDeviceList] = useState();

  const loadDevices = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/devices.json");
      const data = await res.json();
      setDeviceList(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDevices();
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
          {deviceList && (
            <p className="text-center">
              There are{" "}
              <span className="font-bold">{deviceList.length || 0}</span>{" "}
              devices on this page
            </p>
          )}

          <CardList data={deviceList} type="devices" />
        </div>
      </div>
    </motion.section>
  );
};

export default Devices;
