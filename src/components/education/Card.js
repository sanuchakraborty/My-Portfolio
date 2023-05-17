import React from "react";
import { HiArrowRight } from "react-icons/hi";
import institute1 from "../../assets/images/eductaion/institute1.png";
import institute2 from "../../assets/images/eductaion/institute2.png";
import institute3 from "../../assets/images/eductaion/institute3.png";
import institute4 from "../../assets/images/eductaion/institute4.png";

const Card = ({
  item: { id, title, program, icon, duration, CGPA, percentage, link },
}) => {
  const institute = `institute${id}`;
  console.log(institute);
  return (
    <div className="w-full px-12 py-10 h-90 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group cursor-pointer">
      <div className="h-90 overflow-y-hidden justify-center">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-28 ">
            {id === 1 ? <img src={institute1} alt={institute} /> : <></>}
            {id === 2 ? <img src={institute2} alt={institute} /> : <></>}
            {id === 3 ? <img src={institute3} alt={institute} /> : <></>}
            {id === 4 ? <img src={institute4} alt={institute} /> : <></>}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{program}</p>

            {CGPA ? <p className="base">{CGPA}</p> : <></>}
            {percentage ? <p className="base">{percentage}</p> : <></>}
            <p className="base">{duration}</p>
            <a href={link}>
              <span className="text-2xl text-designColor">
                <HiArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
