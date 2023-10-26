import "./Box.css";
import { motion } from "framer-motion";
const Box = () => {
   return (
      <motion.div
         id="boxline"
         initial={{
            y: 50,
            opacity: 0,
            width: "0.5%"
         }}
         animate={{
            y: [30, 0, 0, 0, 0],
            opacity: [1, 1, 1, 0],
            width: ["0.5%", "0%", "80%", "80%", "80%"]
         }}
         transition={{
            duration: 4,
            ease: ["anticipate", "anticipate", "linear"],
            times: [0, 0.1, 0.2, 0.9, 1]
         }}
         className="flex flex-col h-1 w-2/3 mt-3
         pb-10 bg-zinc-800 text-center content-center m-auto
         justify-center"></motion.div>
   );
};

export default Box;
