import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Button } from "@mui/material";
import { Cross } from "hamburger-react";
import NavItems from "./NavItems";
import NavItemsDesk from "./NavItemsDesk";
import { useState, useEffect } from "react";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNew";
import { motion, useAnimationControls } from "framer-motion";
import "./HomeHeader.css";
import "../Home/Home.css";

const Header = ({ hbg }) => {
  const [open, setOpen] = useState(false);
  const [lg, setLg] = useState(false);
  const nav = useNavigate();
  const backcont = useAnimationControls();
  const loc = useLocation();
  useEffect(() => {
    if (lg) {
      backcont.start("vis");
    } else {
      backcont.start("hid");
    }
  }, [lg, backcont]);
  useEffect(() => {
    if (loc.pathname === "/account/register" || loc.pathname === "/account/login") {
      setLg(true);
    } else if (loc.pathname === "/account") {
      setLg(false);
    } else {
      setLg(false);
    }
    console.log(loc.pathname);
  }, [loc.pathname]);
  return (
    <header>
      <NavItemsDesk />
      <div className={`sm:hidden ${hbg} w-screen`}>
        <AppBar
          sx={{}}
          className={`${open ? "activeHeader " : " inactiveHeader"}`}
          square={true}
          color="transparent"
          position="sticky"
          elevation={24}>
          <div className="flex mt-2 pr-4 justify-between">
            <motion.div
              onClick={() => {
                if (lg) nav(-1);
              }}
              variants={{
                init: {
                  opacity: 0,
                  x: -10
                },
                vis: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.25
                  }
                },
                hid: {
                  opacity: 0,
                  x: -10,
                  transition: {
                    duration: 0.5,
                    delay: 0.18
                  }
                }
              }}
              initial="init"
              animate={backcont}
              exit="exit">
              <Button
                sx={{
                  pt: 1.5,
                  m: 0.3,
                  borderRadius: 8
                }}
                color="secondary">
                <ArrowBackIosNewRounded />
              </Button>
            </motion.div>
            <motion.div
              variants={{
                init: {
                  opacity: 0,
                  x: 10
                },
                vis: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.25
                  }
                }
              }}
              initial="init"
              animate="vis"
              exit="exit">
              <Cross
                size={25}
                duration={0.5}
                hideOutline={true}
                direction="left"
                toggled={open}
                toggle={setOpen}
                onToggle={() => {
                  if (!open || lg) {
                    setLg(false);
                    setOpen(!open);
                  } else {
                    setOpen(!open);
                    if (loc.pathname === "/account/register" || loc.pathname === "/account/login") {
                      setLg(true);
                    }
                  }
                }}
              />
            </motion.div>
          </div>
          <div id="menu" className={`${open ? "active" : "inactive"}`}>
            <NavItems setOpen={setOpen} open={open} hbg={hbg} />
          </div>
        </AppBar>
      </div>
    </header>
  );
};

export default Header;
