import { Card, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Login = ({ bg }) => {
  const [isValidUser, setIsValidUser] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [userMsg, setUserMsg] = useState();
  const [passMsg, setPassMsg] = useState();
  const loginUser = () => {
    const data = {};
    if (user) {
      if (pass) {
        console.log("hi");
        //make API call
      } else {
        setIsValidPass(false);
        setPassMsg("enter your password");
      }
    } else {
      setIsValidUser(false);
      setUserMsg("enter your username");
    }
  };
  return (
    <motion.main>
      <motion.div
        className="h-screen sm:pt-16 sm:pb-32 text-3xl h-max
      justify-center m-auto w-9/12 sm:min-h-fit sm:w-1/2">
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
            delay: 0.6
          }}
          className="h-full">
          <Box className="pb-10">
            <motion.div
              initial={{
                y: 50,
                opacity: 0
              }}
              animate={{
                y: 0,
                p: 10,
                opacity: 1
              }}
              transition={{
                type: "tween",
                duration: 1.6,
                ease: "easeOut",
                delay: 1.5
              }}
              className="text-3xl text-white text-center
                pt-10 maintitle">
              S I G N&nbsp; I N
            </motion.div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
                width: "0.5%"
              }}
              animate={{
                y: [30, 0, 0, 0, 0],
                h: [0, 10, 10, 0],
                backgroundColor: "hsl(240, 3.7%, 15.9%)",
                opacity: [1, 1, 1, 1, 0],
                width: ["0.5%", "0%", "100%", "100%", "100%"]
              }}
              transition={{
                duration: 4,
                ease: ["anticipate", "anticipate", "linear"],
                times: [0, 0.1, 0.2, 0.9, 1],
                delay: 0.5
              }}
              id="line"
              className="mb-5 m-auto w-screen flex flex- justify-center"></motion.div>
            <TextField
              className="w-full text-center"
              label="Username"
              id="noshad"
              onChange={e => {
                setIsValidUser(true);
                setUser(e.target.value);
              }}
              variant="standard"></TextField>
            <div className={`${!isValidUser ? "text-sm text-red-500 pt-3" : "hidden"}`}>
              {userMsg}
            </div>
            <div className="p-3"></div>
            <TextField
              className="w-full pl-4 pr-4"
              label="Password"
              type="password"
              onChange={e => {
                setIsValidPass(true);
                setPass(e.target.value);
              }}
              id="noshad"
              variant="standard"></TextField>
            <div className={`${!isValidPass ? "text-sm text-red-500 pt-3" : "hidden"}`}>
              {passMsg}
            </div>
            <div className="text-sm">
              <div className="pb-10"></div>
            </div>
            <Button
              sx={{
                mt: 5,
                borderRadius: 8,
                color: "#f8f8f8",
                borderColor: "#b7b7b7"
              }}
              onClick={loginUser}
              color="secondary"
              variant="outlined"
              className="w-full">
              <motion.div
                className="text-center p-3 sm:float-right w-full"
                initial={{
                  borderColor: "transparent",
                  borderWidth: 1,
                  opacity: 1
                }}
                whileTap={{
                  opacity: 1,
                  scale: 1.02,
                  borderWidth: 1
                }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.05
                }}>
                L O G I N
              </motion.div>
            </Button>
            <div
              className="pt-32 pl-1 inline-block sm:flex sm:justify-center
                sm:items-end text-sm">
              <div>
                Don{"'"}t have an account yet?
                <a className="text-blue-600" href="/register">
                  &nbsp; Create an account
                </a>
              </div>
            </div>
          </Box>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};
export default Login;
