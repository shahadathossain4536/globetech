import React from "react";
import home from "./Home.css";
import sun from "../../assets/Ellipse 4.png";
import sun2 from "../../assets/Ellipse 3.png";
import sun3 from "../../assets/Ellipse 2.png";
import sun4 from "../../assets/Ellipse 1.png";
import galaxy1 from "../../assets/galaxy 1.png";
import galaxy2 from "../../assets/galaxy 2.png";
import galaxy3 from "../../assets/galaxy 3.png";
import galaxy4 from "../../assets/galaxy 4.png";
import galaxy5 from "../../assets/galaxy 5.png";
import galaxy6 from "../../assets/galaxy 6.png";

const Home = () => {
  return (
    <section className="grid grid-cols-2 justify-center items-center mt-[177px] px-5 ">
      <div>
        <div>
          <h1 className="text-[65px]  text-cyan-600 font-bold">
            Welcome to
            <br />
            <span className="text-lime-400">Globetech</span>
          </h1>

          <p className="text-[#2EBBE5] w-[350px] ">
            We are committed to deliver best{" "}
            <span className="text-[#9EB540]">IT services</span>. Our Consultants
            have experience in working with clients. We have extensive
            experience in the software application space and also offer a broad
            range and depth of technology.
          </p>
        </div>
        <div className="mt-10">
          <button className=" px-5 py-3 mr-5 bg-gradient-to-r from-[#DEF77D] to-[#D0F344] text-[#00052F] font-bold rounded">
            Support Us
          </button>
          <button className="border border-[#8FE5FF] px-5 py-3 rounded text-[#8FE5FF] texv">
            Our Mission
          </button>
        </div>
      </div>
      <div className="main-part4 p-96 mt-[-20px]">
        <div className="">
          <div className="flex justify-center items-center ">
            <img className="absolute bg-fixed" src={sun4} alt="" />
            <img className=" absolute bg-fixed" src={sun3} alt="" />
            <img className="absolute bg-fixed" src={sun2} alt="" />
            <img className="absolute  bg-fixed" src={sun} alt="" />
            <div className="galaxy p-96 absolute bg-fixed">
              <img
                className="sub-part-1 absolute -translate-x-[165px] translate-y-[-100px]"
                src={galaxy1}
                alt=""
              />

              <img
                className="sub-part-2 absolute translate-x-[-50px] -translate-y-[-315px]"
                src={galaxy2}
                alt=""
              />
              <img
                className="sub-part-3 absolute translate-x-[205px] translate-y-[-190px]"
                src={galaxy3}
                alt=""
              />
              <img
                className="sub-part-4 absolute translate-x-[162px] translate-y-[170px]"
                src={galaxy4}
                alt=""
              />
              <img
                className="sub-part-5 absolute -translate-x-[172px] translate-y-[-355px]"
                src={galaxy5}
                alt=""
              />
              <img
                className="sub-part-6 absolute -translate-x-[150px] -translate-y-[-90px]"
                src={galaxy6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
{
  /* <div className="flex justify-center  items-center">
<div className=" border-4 h-[703.15px]  w-[703.15px] rounded-full flex justify-center  items-center">
  <div className=" border-4 h-[540.34px]  w-[540.34px] rounded-full flex justify-center  items-center">
    <div className="h-[381.07px]  w-[381.07px] rounded-full flex justify-center  items-center border-4 border-gradient-to-r from-[#C2F1FF] to-[#006E8F]">
      <div className="border h-[168px]  w-[168px] rounded-full bg-gradient-to-r from-[#DEF77D] to-[#D0F344] "></div>
    </div>
  </div>
</div>
</div> */
}
