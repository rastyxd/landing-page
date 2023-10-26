import { useNavigate, useLocation } from "react-router-dom";
import { AppBar } from "@mui/material/";
import { Cross } from "hamburger-react";
import NavItems from "./NavItems";
import NavItemsDesk from "./NavItemsDesk";
import { useState, useEffect } from "react";
import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNew";
import { motion, useAnimationControls } from "framer-motion";
import "./HomeHeader.css";
import "../Home/Home.css";

const Header = ({ hbg, lg, setLg }) => {
  const backcont = useAnimationControls();
  const loc = useLocation();
  useEffect(() => {
    if (lg) {
      backcont.start("vis");
    } else {
      backcont.start("hid");
    }
  }, [lg]);
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
  const [open, setOpen] = useState(false);
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
          <div className="flex pr-4 pt-2 justify-between">
            <motion.div
              className="ml-6 mt-2.5"
              variants={{
                init: {
                  opacity: 0,
                  x: -10
                },
                vis: {
                  opacity: 1,
                  x: 0
                },
                hid: {
                  opacity: 0,
                  transition: {
                    duration: 0.2
                  }
                }
              }}
              initial="init"
              animate={backcont}
              transition={{
                duration: 0.4,
                delay: 1
              }}>
              <ArrowBackIosNewRounded />
            </motion.div>
            <Cross
              size={25}
              duration={0.5}
              hideOutline={true}
              direction="right"
              toggled={open}
              toggle={setOpen}
              onToggle={() => {
                setOpen(!open);
              }}
            />
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
