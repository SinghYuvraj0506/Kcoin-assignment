import React from "react";


const Navbar: React.FC = () => {
  return (
    <div className="w-full px-10 box-border py-2 flex items-center justify-between shadow-md bg-white">
      <img src="/logo.svg" alt="" />

      <div className="flex items-center gap-9 text-md font-medium">
        <span className="cursor-pointer">Crypto Taxes</span>
        <span className="cursor-pointer">Free Tools</span>
        <span className="cursor-pointer">Resource Center</span>

        <button className="bg-[#2059EC] text-white px-5  py-2 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
