import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
const Nav = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-between items-center px-5 py-3 md:flex-row">
      <NavLink to={"/"}>
        <img
          src="../public/images/logo.png"
          alt="my logo"
          className="object-cover h-14"
        />
      </NavLink>

      <NavLinks />
    </div>
  );
};

export default Nav;
