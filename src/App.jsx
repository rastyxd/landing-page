import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Anim from "./Anim/Anim";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { motion } from "framer-motion";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#c3c3c3"
    }
  }
});
const bg = "bg-zinc-800";
const hbg = "bg-neutral-950";
const App = () => {
  const [lg, setLg] = useState(false);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Header hbg={hbg} lg={lg} setLg={setLg} />
          <div className={`${bg}`}>
            <Anim bg={bg} />
            <Footer bg={bg} />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
