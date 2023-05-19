import React from "react";
import ResumeCard from "./ResumeCard";
import {
  html,
  css,
  react,
  javascript,
  redux,
} from "../../assets/index";

const Frontend = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-14">
      <ResumeCard title={"HTML5"} src={html} />
      <ResumeCard title={"CSS3"} src={css} />
      <ResumeCard title={"JavaScript"} src={javascript} />
      <ResumeCard title={"React"} src={react} />
      <ResumeCard title={"Redux"} src={redux} />
    </div>
  );
};

export default Frontend;


