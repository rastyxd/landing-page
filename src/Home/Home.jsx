import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
const Home = ({ page, bg }) => {
  const [loadTitle, setLoadTitle] = useState(false);
  const [loadPara1, setLoadPara1] = useState(false);
  const [loadPara2, setLoadPara2] = useState(false);
  const setLoad = () => {
    setTimeout(() => setLoadTitle(true), 100);
    setTimeout(() => setLoadPara1(true), 300);
    setTimeout(() => setLoadPara2(true), 400);
  }
  const setUnload = () => {
    setLoadTitle(false)
    setLoadPara1(false)
    setLoadPara2(false)
  }
  useEffect((window.location.pathname === "/") ? setLoad : setUnload, [page]);
  return (
    <motion.div
      className={`${bg} w-full h-screen`}>
      <div className={`${loadTitle ? "title" : "loading"}`}>
        <div className="maintitle text-xl px-10
          pt-20 text-center w-screen sm:text-left sm:px-20
          sm:w-2/3 sm:text-5xl">
          Imagine a place...
        </div>
        <div className="w-screen p-10 sm:flex flex-col
          sm:justify-center text-center">
          <p
            className={`${loadPara1 ? "para1 text-center py-4" : "loadingPara1"
              }`}
          >
            Id Lorem dolore id Lorem excepteur mollit aliquip
            officia. Mollit quis minim voluptate nisi cillum.
            ut cupidatat minim cupidatat consectetur do anim
            laborum. Elit
          </p>
          <p
            className={`${loadPara2 ? "para2 py-4" : "loadingPara2"
              }`}
          >
            sint minim labore cillum nulla in. Aliquip et
            consectetur aliquip
            {" "}
            consequat mollit aute deserunt. Ullamco exercitation
            voluptate
          </p>
        </div>
      </div>
    </motion.div >
  );
};
export default Home;
