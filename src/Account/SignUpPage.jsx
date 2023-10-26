import { Card, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./Account.css";

const Signup = ({ bg, setLg }) => {
  let data = {};
  const [anim, setAnim] = useState(false);
  const [msgStyle, setMsgStyle] = useState();
  const [message, setMessage] = useState();
  const [nameMsg, setNameMsg] = useState();
  const [userMsg, setUserMsg] = useState();
  const [confMsg, setConfMsg] = useState();
  const [disName, setDisName] = useState(null);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const [confPass, setConfPass] = useState(null);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidUser, setIsValidUser] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const createAcc = () => {
    if (disName) {
      data.name = disName;
      if (user) {
        data.username = user;
        if (pass && pass === confPass) {
          data.password = pass;
          axios
            .post("http://localhost:3001/users/create", { ...data })
            .then(res => {
              if (typeof res.data !== "object") {
                setMessage(res.data);
                setMsgStyle("text-red-600 text-sm p-2");
              } else if (typeof res.data === "object") {
                setMessage("account created successfully!");
                setMsgStyle("text-sm p-2");
              }
            })
            .catch(err => {
              console.log(err.message);
            });
        } else {
          if (!pass) {
            setIsValidPass(false);
            setConfMsg("enter a password");
            setMsgStyle("text-red-600 text-sm p-2");
            data = {};
          } else {
            setIsValidPass(false);
            setConfMsg("unmatched password!");
            setMsgStyle("text-red-600 text-sm p-2");
            data = {};
          }
        }
      } else {
        setIsValidUser(false);
        setUserMsg("username is required!");
        setMsgStyle("text-red-600 text-sm p-2");
        data = {};
      }
    } else {
      setIsValidName(false);
      setNameMsg("Enter a name");
      setMsgStyle("text-red-600 text-sm p-2");
      data = {};
    }
  };
  return (
    <motion.main
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
      className={`h-screen ${bg} flex justify-center sm:pt-16 sm:max-h-min sm:pb-32 pl-3 pr-3`}>
      <div
        className="text-3xl h-max flex items-center justify-center  sm:pt-28
        sm:min-h-fit sm:w-1/2">
        <Card
          elevation={0}
          sx={{
            borderRadius: 5
          }}>
          <div className={`h-full ${bg} p-5`}>
            <Box className="pl-2 pr-2">
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
                S I G N&nbsp; U P
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
                className="w-full flex p-1 content-start text-center"
                label="Display name"
                id="noshad"
                onChange={e => {
                  setIsValidName(true);
                  setDisName(e.target.value);
                }}
                variant="standard"></TextField>
              <div className={`${!isValidName ? "text-red-600 text-sm py-2" : "hidden"}`}>
                {nameMsg}
              </div>
              <div className="pt-4">
                <TextField
                  sx={{ color: "#41ade8" }}
                  className="w-full"
                  label="Username"
                  id="noshad"
                  onChange={e => {
                    setIsValidUser(true);
                    setUser(e.target.value);
                  }}
                  variant="standard"></TextField>
                <div className={`${!isValidUser ? "text-red-600 text-sm py-2" : "hidden"}`}>
                  {userMsg}
                </div>
              </div>
              <div className="pt-4">
                <TextField
                  className="w-full"
                  label="Password"
                  id="noshad"
                  type="password"
                  onChange={e => {
                    setIsValidPass(true);
                    setPass(e.target.value);
                  }}
                  variant="standard"></TextField>
              </div>
              <div className="pt-4">
                <TextField
                  className="w-full"
                  label="Confirm password"
                  id="noshad"
                  type="password"
                  onChange={e => {
                    setIsValidPass(true);
                    setConfPass(e.target.value);
                  }}
                  variant="standard"></TextField>
                <div className={`${!isValidPass ? "text-red-600 text-sm pt-1" : "hidden"}`}>
                  {confMsg}
                </div>
              </div>
              <div className="text-sm">
                <div className="mb-0">
                  <div className="inline-block pt-5">
                    By clicking Sign up you agree to our&nbsp;
                    <a href="/tos" className="text-blue-600">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
              <div className={msgStyle}>{message}</div>
              <Button
                sx={{
                  mt: 5,
                  borderRadius: 8,
                  color: "#f8f8f8",
                  borderColor: "#b7b7b7"
                }}
                onClick={createAcc}
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
                  R E G I S T E R
                </motion.div>
              </Button>
              <div className="pt-5 pl-1 inline-block sm:flex sm:justify-center sm:items-end text-sm">
                <div>
                  Already have an account? <Link className="text-blue-600">Login</Link>
                </div>
              </div>
            </Box>
          </div>
        </Card>
      </div>
    </motion.main>
  );
};
export default Signup;
