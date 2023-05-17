import React from "react";
import ResumeCard from "./ResumeCard";
import {
  node,
  express,
  mongodb,
  postman
} from "../../assets/index";

const Backend = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-14">
      <ResumeCard title={"Node js"} src={node} />
      <ResumeCard title={"Express js"} src={express} />
      <ResumeCard title={"Mongo DB"} src={mongodb} />
      <ResumeCard title={"Postman"} src={postman} />
    </div>
  );
};

export default Backend;
