import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div>
      <section>
        <div className="h-[600px] flex justify-center py-2 w-full bg-darkblue">
          <div className="h-auto py-[100px] w-1/3 mr-[-60px]">
            <h1 className="font-black text-white leading-[50px] text-[40px] z-10">
              To win customer <br />
              trust, Razorpay is a <br /> must.
            </h1>
            <div className="bg-green-500 h-1 w-[30px] mt-8"></div>
            <div className="w-11/12">
              <p className="py-10 text-xl text-gray-400">
                An RBI Authorised Payment Aggregator, we ensure your
                transactions are secure.
              </p>
            </div>
            <button className="bg-blue-500 py-3 px-4 text-white rounded-md font-bold">
              Sign Up Now <span className="">&rarr;</span>
            </button>
          </div>
          <div className="ml-[-60px] h-auto w-1/2.5">
            <img src="../public/Front-banner.png" className="w-[100%] h-full" alt="" />
          </div>
        </div>
        <div className="w-full">
          <img src="../public/hero-shape.svg" className="w-[101%]" alt="" />
        </div>
      </section>
      <section className="w-full h-[800px]">
        <div className="overflow-hidden flex justify-between">
          <div>
            <img src="../public/dots.png" className="mt-[-90px]" alt="" />
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-indigo-950 font-black text-2xl py-3">
                Accept Payments with Razorpay Payment Suite <br />
                <div className="bg-green-500 h-1 w-[2%] mx-auto mt-3"></div>
              </h1>
            </div>
            <div className="flex justify-center border rounded-lg mt-[70px] w-[95%]">
              <div className="pl-10 py-8 w-[45%] z-10 mr-[-60px]">
                <h1 className=" pt-5 leading-10 text-[33px] font-bold">
                  Supercharge your business with the all‑powerful{" "}
                  <span className="text-blue-600">Payment Gateway</span>
                </h1>

                <ul className="leading-8 my-10">
                  <li>100+ Payment Methods</li>
                  <li>Industry Leading Success Rate</li>
                  <li>Superior Checkout Experience</li>
                  <li>Easy to Integrate</li>
                  <li>Instant Settlements from day 1</li>
                  <li>In depth Reporting and Insights</li>
                </ul>

                <button className="bg-blue-500 rounded text-white py-2 px-3 font-bold">
                  Sign Up Now &rarr;
                </button>
                <button className="py-2 px-3 font-bold text-blue-500">
                  Know More{" "}
                </button>
              </div>
              <div className="">
                <img src="../public/image.png" className="z-0 w-full" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src="../public/dots.png" className="mt-[50px]" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
