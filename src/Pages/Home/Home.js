import React from "react";

const Home = () => {
  return (
    <section className="flex">
      <div>
        <div>
          <h1 className="text-[65px]  text-cyan-600 font-bold">
            Welcome to
            <br />
            <span className="text-lime-400">Globetech</span>
          </h1>

          <p className="text-[#2EBBE5]">
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
          <button className="border border-[#8FE5FF] px-5 py-3 rounded text-[#8FE5FF]">
            Our Mission
          </button>
        </div>
      </div>
      <div>
        <div class="artboard artboard-horizontal phone-2">667×375</div>
      </div>
    </section>
  );
};

export default Home;
