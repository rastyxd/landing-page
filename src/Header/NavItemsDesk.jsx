import { Button } from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";

const NavItemsDesk = () => {
  const nav = useNavigate()
  return (
    <nav className="hidden stroke sm:flex
    sm:justify-center sm:w-screen">
      <ul className="sm:flex sm:row-end-1 sm:justify-center">
        <li>
          <Button
            sx={{
              p: 0
            }}
            onClick={() => { nav("/") }}
            disableRipple >
            <Link className="px-14 py-7">
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button
            sx={{
              p: 0.01
            }}
            onClick={() => { nav("/about") }}
            disableRipple>
            <Link className="px-14 py-7">
              About
            </Link>
          </Button>
        </li>
        <li>
          <Button
            sx={{
              p: 0
            }}
            onClick={() => { nav("/account") }}
            disableRipple>
            <Link className="px-14 py-7">
              Account
            </Link>
          </Button>
        </li>
      </ul >
    </nav >
  );
};
export default NavItemsDesk;
