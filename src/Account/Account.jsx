import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line, Logo, Btn } from "./Assets";
const Account = () => {
  const nav = useNavigate();
  return (
    <motion.main
      exit={{
        opacity: 0,
        x: -230
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.1,
        ease: "easeInOut"
      }}
      className="h-screen w-screen">
      <div className="pt-10 text-center w-screen m-auto">
        <div className="pb-5">
          <Logo txt={"Become part of our community!"} />
        </div>
        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1, 1, 1, 0.98]
          }}
          transition={{
            duration: 1.63,
            delay: 0.75,
            ease: "easeOut"
          }}
          onClick={() => nav("/account/register")}>
          <Btn name="Sign up" />
        </motion.div>
        <Line />
        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: -30
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1, 1, 1, 0.98]
          }}
          transition={{
            duration: 1.6,
            delay: 0.65,
            ease: "easeOut"
          }}
          onClick={() => nav("/account/login")}>
          <Btn name="Sign in" />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Account;
