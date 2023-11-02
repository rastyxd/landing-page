import "./About.css";
import { motion } from "framer-motion";
import Box from "../Box/Box";
const About = ({ bg }) => {
   return (
      <>
         <motion.main className={`${bg}`}>
            <div id="bdrop">
               <motion.h1
                  className="text-center text-zinc-300 maintitle pt-14 text-4xl"
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
                  }}
               >
                  ABOUT US
               </motion.h1>
               <Box />
            </div>
         </motion.main>
      </>
   );
};
export default About;
