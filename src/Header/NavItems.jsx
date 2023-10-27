import { useState } from "react";
import { Button } from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NavItems = ({ page, setPage, setOpen, open, hbg }) => {
  const nav = useNavigate();
  const [i1, setI1] = useState(false);
  const [i2, setI2] = useState(false);
  const [i3, setI3] = useState(false);
  setTimeout(() => {
    open ? setI1(true) : setI1(false);
  }, 10);
  setTimeout(() => {
    open ? setI2(true) : setI2(false);
  }, 50);
  setTimeout(() => {
    open ? setI3(true) : setI3(false);
  }, 130);
  setTimeout(() => {}, 200);
  return (
    <nav className={`stroke ${hbg} h-screen`}>
      <ul className="pt-8 w-screen">
        <li className="w-screen pb-3 flex flex-col items-center text-xl">
          <Button
            className="w-11/12"
            sx={{
              p: 0
            }}
            color="primary"
            onClick={() => {
              nav("/");
              setTimeout(() => {
                setOpen(false);
              }, 100);
            }}
            disableRipple>
            <Link className={`w-10/12 ${i1 ? "slide-in" : "slide-out"} pb-5`}>Home</Link>
          </Button>
        </li>
        <li className="w-screen pb-3 pt-3 flex flex-col items-center text-xl">
          <Button
            className="w-11/12 pb-5"
            sx={{
              p: 0
            }}
            onClick={() => {
              nav("/about");
              setTimeout(() => {
                setOpen(false);
              }, 100);
            }}
            disableRipple>
            <Link className={`w-10/12 ${i2 ? "slide-in" : "slide-out"} pb-5`}>About</Link>
          </Button>
        </li>
       <li
          className="w-screen pb-3 pt-3 flex flex-col items-center text-xl">
          <Button
            className="w-11/12"
            sx={{
              p: 0
            }}
            onClick={() => {
              nav("/account");
              setTimeout(() => {
                setOpen(false);
              }, 100);
            }}
            disableRipple>
            <Link className={`w-10/12 ${i3 ? "slide-in" : "slide-out"} pb-5`}>Account</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
export default NavItems;
