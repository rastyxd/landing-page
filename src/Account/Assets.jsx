import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Logo = ({ txt }) => {
   const t = txt;
   const [i, setI] = useState(0.7);
   const [newTarr, setNewTarr] = useState([]);
   const [c, setC] = useState(0);
   useEffect(() => {
      if (c !== t.length) {
         const spEl = (
            <motion.span
               className=""
               key={c}
               initial={{
                  opacity: 0
               }}
               animate={{
                  opacity: 1
               }}
               transition={{
                  duration: 0.1,
                  delay: i,
                  ease: "linear"
               }}
            >
               {t[c]}
            </motion.span>
         );
         setI(i => i + 0.05);
         setNewTarr([...newTarr, spEl]);
         setC(c => c + 1);
      }
   }, [c, i,newTarr,t]);
   return (
      <>
         <div className="py-10 text-xl">
            <motion.span className="maintitle">
               {newTarr.map(tarr => tarr)}
            </motion.span>
         </div>
      </>
   );
};
const Btn = ({ name }) => {
   return (
      <Button
         elevation={24}
         sx={{
            my: 5,
            borderRadius: 8,
            color: "#e1e1e1",
            borderColor: "#d1d1d1"
         }}
         color="secondary"
         variant="outlined"
         className="my-5 w-9/12 h-16"
      >
         {name}
      </Button>
   );
};
const Line = () => {
   return (
      <>
         <motion.div
            id="boxline"
            className="m-auto"
            initial={{
               opacity: 0,
               width: "0.5%"
            }}
            animate={{
               opacity: [1, 1, 1, 1],
               width: ["0.5%", "0%", "80%", "80%", "80%"]
            }}
            transition={{
               duration: 4,
               ease: ["anticipate", "anticipate", "easeOut"],
               times: [0, 0.1, 0.2, 0.9, 1]
            }}
         ></motion.div>
      </>
   );
};
export { Logo, Btn, Line };
