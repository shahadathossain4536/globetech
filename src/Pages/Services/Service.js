import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="w-[473px] h-[650px] bg-slate-100 rounded-2xl px-[41px] ">
      <img src={img} alt="" />
      <p className="text-[#2397CD] text-center text-[26px]">{name}</p>
      <p className="text-justify text-base leading-7 pt-[37px] text-[#000633]">
        {description}
      </p>
      <div className="text-center mt-5">
        <button className="bg-[#2397CD] text-white rounded-3xl px-10 py-2">
          <a href="" _blank>
            {" "}
            MORE
          </a>
        </button>
      </div>
    </div>
  );
};

export default Service;
