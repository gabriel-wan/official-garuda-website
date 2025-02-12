import { useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarButton from "./NavbarButton";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="h-24 inset-0 absolute shadow-lg" />
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-[#504C41] px-12 py-4 z-30 relative">
        {/* Logo */}
        <img
          src={logo}
          alt="Garuda logo"
          className="w-28 z-40 drop-shadow-xl relative"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:uppercase">
          <NavbarButton label="home" path="/" />
          <NavbarButton label="people" path="/people" />
          <NavbarButton label="events" path="/events" />
        </ul>

        {/* Icon for small screens */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Nav */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-[#FEED9F] bg-[#F7D327] h-full ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24 px-4 uppercase">
            <li className="p-4 font-semibold border-b border-[#504C41] border-opacity-50">
              Home
            </li>
            <li className="p-4 font-semibold border-b border-[#504C41] border-opacity-50">
              People
            </li>
            <li className="p-4 font-semibold">Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
