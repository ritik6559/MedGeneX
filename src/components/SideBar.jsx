
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IconHeartHandshake, IconSun } from "@tabler/icons-react";
import { fadeInUp, staggerChildren } from "@/utils/animations";
import { navlinks } from "@/constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <motion.div
    whileHover={{ scale: disabled ? 1 : 1.05 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
    className={`h-[48px] w-[48px] rounded-xl ${
      isActive && isActive === name && "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
    } flex items-center justify-center ${
      !disabled && "cursor-pointer hover:bg-white/5"
    } backdrop-blur-lg transition-all duration-300 ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="icon" className="h-6 w-6 transition-transform duration-300" />
    ) : (
      <img
        src={imgUrl}
        alt="icon"
        className={`h-6 w-6 transition-all duration-300 ${isActive !== name && "grayscale opacity-50"}`}
      />
    )}
  </motion.div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <motion.div
      {...fadeInUp}
      className="sticky top-5 flex h-[93vh] flex-col items-center justify-between"
    >
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-3 backdrop-blur-lg border border-white/5"
        >
          <IconHeartHandshake size={40} className="text-blue-400" />
        </motion.div>
      </Link>

      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="mt-12 flex w-[76px] flex-1 flex-col items-center justify-between rounded-2xl bg-black/20 backdrop-blur-xl border border-white/5 py-4 shadow-xl"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => (
            <motion.div key={link.name} variants={fadeInUp}>
              <Icon
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className={" flex flex-col gap-4"} >


        <motion.div variants={fadeInUp}>
          <IconHeartHandshake
            className="backdrop-blur-lg border rounded-2xl p-2 border-white/5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-gray-200 cursor-pointer "
            alt={""}
            size={40}
            onClick={() => {
              navigate("/contact");
            }}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <img
            className="backdrop-blur-lg border rounded-2xl p-2 border-white/5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 "
            src={"src/assets/sun.svg"}
           alt={""}/>
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
