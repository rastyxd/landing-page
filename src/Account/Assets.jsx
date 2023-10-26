import { Button } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
const Logo = ({ txt }) => {
  const t = txt;
  const [i, setI] = useState(0.8);
  const tarr = t.split("");
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
          }}>
          {t[c]}
        </motion.span>
      );
      setI(() => {
        return i + 0.05;
      });
      setNewTarr([...newTarr, spEl]);
      setC(() => {
        return c + 1;
      });
    }
  }, [c]);
  return (
    <>
      <motion.div
        className="maintitle pt-3 text-4xl"
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.4
        }}>
        ACCOUNT
      </motion.div>
      <div className="py-10 text-lg">
        <motion.span className="font-mono">{newTarr.map(tarr => tarr)}</motion.span>
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
      className="my-5 w-9/12 h-16">
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
        }}></motion.div>
    </>
  );
};
export { Logo, Btn, Line };
