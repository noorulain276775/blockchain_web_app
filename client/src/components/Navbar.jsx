import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggelMenu, setToggelMenu] = useState(false);

  const handleMenuClick = () => {
    setToggelMenu(!toggelMenu);
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={Logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-blue-800 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-blue-500">
          Login
        </li>
      </ul>
      <div className="flex relative">
        <button
          onClick={handleMenuClick}
          className="text-white md:hidden cursor-pointer focus:outline-none"
        >
          {toggelMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="transform transition duration-3000 ease-in-out hover:scale-110"
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="transform transition duration-3000 ease-in-out hover:scale-110"
            />
          )}
        </button>
        {toggelMenu && 
        <ul className="z-10 fixed top-0 -right-2 p-3 h-screen shadow-2xl md:hidden list-none
        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white
        animate-slide-in
        
        " style={{width: "70vw"}}>
        <li className="text-xl w-full my-2">
        <AiOutlineClose onClick={()=> setToggelMenu(false)} />
        </li>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
        ))}
        </ul>
        
        }
      </div>
    </nav>
  );
};

export default Navbar;