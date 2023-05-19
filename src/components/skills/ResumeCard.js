import React from "react";

const ResumeCard = ({ title, src }) => {
  return (
    <div className="w-full p-6 mt-6 xl:px-12 xl:py-12 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-ful h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <h3 className="text-base text-designColor font-normal flex  items-center justify-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
