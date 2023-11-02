import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Line, Logo, Btn } from "./Assets";
const Account = () => {
   const nav = useNavigate();
   return (
      <motion.main
         variants={{
            exit: {
               opacity: 0,
               y: 10,
               transition: {
                  duration: 0.4,
                  scale: 1.1,
                  easr: "easeOut"
               }
            },
            animate: {
               opacity: 1,
               y: 0,
               transition: {
                  duration: 0.6,
                  delay: 0.4,
                  easr: "easeOut"
               }
            }
         }}
         exit="exit"
         animate="animate"
         transition={{
            type: "tween",
            duration: 0.6,
            ease: "easeInOut"
         }}
         className="h-screen w-screen"
      >
         <div className="pt-10 text-center w-screen m-auto">
            <motion.div
               variants={{
                  init: {
                     opacity: 0,
                     y: 10
                  },
                  anim: {
                     opacity: 1,
                     y: 0,
                     transition: {
                        duration: 1,
                        delay: 0.5
                     }
                  }
               }}
               initial="init"
               animate="anim"
               className="maintitle text-4xl pt-3
        pb-5"
            >
               ACCOUNT
            </motion.div>
            <div className="pb-5">
               <Logo txt={"Become part of our community!"} />
            </div>
            <motion.div
               className="text-center"
               initial={{
                  opacity: 0,
                  x: 30
               }}
               animate={{
                  opacity: 1,
                  x: 0,
                  scale: [1, 1, 1, 1, 0.98]
               }}
               transition={{
                  duration: 1.4,
                  delay: 0.65,
                  ease: "easeOut"
               }}
               onClick={() => nav("/account/register")}
            >
               <Btn name="Sign up" />
            </motion.div>
            <Line />
            <motion.div
               className="text-center"
               initial={{
                  opacity: 0,
                  x: -30
               }}
               animate={{
                  opacity: 1,
                  x: 0,
                  scale: [1, 1, 1, 1, 0.98]
               }}
               transition={{
                  duration: 1.4,
                  delay: 0.65,
                  ease: "easeOut"
               }}
               onClick={() => nav("/account/login")}
            >
               <Btn name="Sign in" />
            </motion.div>
         </div>
      </motion.main>
   );
};

export default Account;
