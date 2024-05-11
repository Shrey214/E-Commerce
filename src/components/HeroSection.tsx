import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-fit mx-auto flex flex-col my-16  items-center justify-between select-none sm:flex-row w-4/5">
      <div className="flex flex-col p-6 gap-y-2 sm:w-1/2">
        <p className="text-slate-400 font-bold text-xl">Welcome to</p>
        <p className="font-bold text-4xl text-black">Thapa Ecommerce</p>
        <p className="text-slate-500 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          omnis aperiam voluptatum laudantium tempora perspiciatis doloribus
          explicabo ipsum.
        </p>
        <NavLink to={"/products"}>
          <button className="mt-4 px-4 py-2 bg-indigo-500  text-white font-bold rounded-sm">
            Shop Now
          </button>
        </NavLink>
      </div>
      <div className="w-full my-5 sm:w-2/5">
        <div className="w-full h-96 bg-indigo-500 relative object-cover">
          <img
            src="../public/images/shoppingFamily.jpg"
            alt="familyImage"
            className=" h-96 w-full absolute bottom-6   right-6 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
