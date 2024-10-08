import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="flex font-sans w-full bg-darkblue justify-center">
            <div className="logo bg-darkblue py-8">
            <img src="../public/logo.png" className="mix-blend-screen ml-10 h-6 w-auto cursor-pointer" alt="Logo" />
        </div>
           <ul className="flex gap-6 bg-darkblue text-white px-6 pr-4 justify-between">
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Payments
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Banking+
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Payroll
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Partners
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Resources
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
            <li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Support
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li><li className="hover:text-blue-500 py-8 relative group transition-all duration-200">Pricing
                <div className="bottom-0 h-1 w-full bg-blue-500 absolute hidden group-hover:block  transition-all duration-200"></div>
            </li>
           </ul>
           <div className="py-9 mr-4 ml-[90px]">
            <img src="../public/Flag.png" className="cursor-pointer h-4 w-auto" alt="" />
           </div>

           <div className="text-white flex gap-1 font-medium py-6">
            <button className="border py-1.5 border-blue-500 px-4">Log in</button>
            <button className="border py-1.5 px-4 bg-white text-blue-500">Sign up <span className="">&rarr;</span></button>
        </div>

        </nav>
  );
};

export default Header;
