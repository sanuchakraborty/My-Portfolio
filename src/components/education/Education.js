import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const Eductaion = () => {
  return (
    <section
      id="education"
      className="w-full py-48 border-b-[1px] border-b-black"
    >
      <Title title="My" des="Educational Background" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-10">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Eductaion;
