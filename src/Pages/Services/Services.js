import React from "react";
import software1 from "../../assets/services/software 1.png";
import image3 from "../../assets/services/image 3.png";
import image4 from "../../assets/services/image 4.png";
import bulk1 from "../../assets/services/bulk 1.png";
import image5 from "../../assets/services/image 5.png";
import image6 from "../../assets/services/image 6.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      _id: 1,
      img: software1,
      name: "Software Solution",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      _id: 2,
      img: image3,
      name: "E-Commerce Solution",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      _id: 3,
      img: image4,
      name: "ERP Solution",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      _id: 4,
      img: bulk1,
      name: "Bulk SMS Service",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      _id: 5,
      img: image5,
      name: "Graphic Design",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      _id: 6,
      img: image6,
      name: "Digital Marketing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
  ];
  return (
    <section>
      <div className="text-center">
        <h1 className="text-white text-4xl ">SERVICES</h1>
        <p className="text-white text-[45px] font-semibold">
          We provides services to our clients
        </p>
      </div>
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-14 px-10 mt-[77px]">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
<h1>Services</h1>;
