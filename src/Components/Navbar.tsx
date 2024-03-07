import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";


const Navbar: React.FC = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    document.addEventListener("click",()=>{
      setShowNavbar(false)
    })
  
    return () => {
      document.removeEventListener("click",()=>{
        setShowNavbar(false)
      })
    }
  }, [])
  

  return (
    <div className="w-full px-3 md:px-10 box-border py-2 flex items-center justify-between shadow-md bg-white">
      <img src="/logo.svg" alt="" className="w-16 md:w-auto"/>

     {(window.screen.width > 700 || showNavbar) && <div className="flex items-center gap-4 py-5 md:gap-9 text-md font-medium absolute top-16 md:relative md:top-0 md:left-0 bg-[#6d6d6dd2] md:bg-transparent left-0 md:flex-row flex-col z-10 w-full md:w-auto text-white md:text-black">
        <span className="cursor-pointer">Crypto Taxes</span>
        <span className="cursor-pointer">Free Tools</span>
        <span className="cursor-pointer">Resource Center</span>

        <button className="bg-[#2059EC] text-white px-5  py-2 rounded-md">Get Started</button>
      </div>}
      
      {window.screen.width < 700 && <IoIosMenu size={22} className="cursor-pointer" onClick={(e)=>{e.stopPropagation();setShowNavbar(!showNavbar)}}/>}

      
    </div>
  );
};

export default Navbar;
