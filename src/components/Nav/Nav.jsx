import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-red-500 underline" : ""} ${
              isPending ? "text-yellow-500 underline" : ""
            } hover:text-green-500`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-red-500 underline" : ""} ${
              isPending ? "text-yellow-500 underline" : ""
            } hover:text-green-500`
          }
        >
          Donation
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-red-500 underline" : ""} ${
              isPending ? "text-yellow-500 underline" : ""
            } hover:text-green-500`
          }
        >
          Statistics
        </NavLink>
      </Typography>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none mx-auto bg-[#FFFFFFF2] opacity-90">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            className="object-cover max-w-40"
            src="https://i.postimg.cc/Xqs9LNQ4/Logo.png"
            alt="Donation Campaign"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-gray-900" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="h-6 w-6 bg-gray-900 rounded"
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
