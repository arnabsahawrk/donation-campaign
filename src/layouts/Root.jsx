import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
  return (
    <>
      <HelmetProvider>
        <Nav />
        <Outlet />
      </HelmetProvider>
    </>
  );
};

export default Root;
