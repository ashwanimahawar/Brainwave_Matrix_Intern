import React from "react";

const TopStrip: React.FC = () => {
  return (
    <div className="text-center bg-white h-[55px] py-3">
      <h2 className="text-black font-bold text-center mr-4 inline text-[17px]">
        Razorpay FTX24, India's premier FinTech event is here!
      </h2>
      <button className="text-white bg-blue-700 rounded-[2px] text-[12px] font-bold py-[5px] px-4 hover:text-slate-600 transition-all duration-200">
        Book Now
      </button>
    </div>
  );
};

export default TopStrip;
