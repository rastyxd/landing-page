import { useState, useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import Box from "../Box/Box";

const About = ({ bg }) => {
   const [abt, setAbt] = useState();
   const setLoad = () => {
      setTimeout(() => setAbt(true), 100);
   };
   const setUnLoad = () => {
      setAbt(false);
   };
   useEffect(window.location.pathname === "/about" ? setLoad : setUnLoad, []);
   return (
      <>
         <motion.main className={`${bg}`}>
            <motion.h1
               className="text-center text-zinc-300
               maintitle pt-14 text-4xl"
               initial={{
                  pathLength: 0,
                  y: 48,
                  opacity: 0
               }}
               animate={{
                  pathLength: 1,
                  y: 0,
                  opacity: 1
               }}
               transition={{
                  type: "tween",
                  duration: 1.6,
                  ease: "easeOut",
                  delay: 1
               }}>
               ABOUT US
            </motion.h1>
            <Box />
         </motion.main>
      </>
   );
};
export default About;
