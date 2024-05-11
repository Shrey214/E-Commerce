import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";

NavLink;
const NavLinks = () => {
  return (
    <div className="flex flex-col gap-y-6 my-3  items-center uppercase font-medium md:flex-row gap-x-8 ">
      <NavLink to={"/"}>
        <div>Home</div>
      </NavLink>
      <NavLink to={"/about"}>
        <div>About</div>
      </NavLink>
      <NavLink to={"/products"}>
        <div>Products</div>
      </NavLink>
      <NavLink to={"/contact"}>
        <div>Contact</div>
      </NavLink>
      <NavLink to={"/cart"}>
        <div className="inline-block relative">
          <PiShoppingCartBold fontSize={22} />
          <span className="absolute top-[-30%] right-[-20%] rounded-full  bg-indigo-400 text-xs p-[1px]">
            10
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinks;
