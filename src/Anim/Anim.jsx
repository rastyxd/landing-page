import Home from "../Home/Home";
import About from "../About/About";
import Account from "../Account/Account";
import SignUpPage from "../Account/SignUpPage";
import LoginPage from "../Account/LoginPage";
import NotFound from "../NotFound/NotFound";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#c3c3c3"
    }
  }
});

const Anim = ({ bg }) => {
  const loc = useLocation();
  return (
    <AnimatePresence>
      <Routes location={loc} key={loc.pathname}>
        <Route path="/" element={<Home bg={bg} />} />
        <Route path="/about" element={<About bg={bg} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/register" element={<SignUpPage bg={bg} />} />
        <Route path="/account/login" element={<LoginPage bg={bg} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
export default Anim;
