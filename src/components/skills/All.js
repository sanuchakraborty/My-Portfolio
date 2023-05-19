import React from "react";
import ResumeCard from "./ResumeCard";
import {
  c,
  cplusplus,
  html,
  css,
  react,
  javascript,
  redux,
  mysql,
  node,
  express,
  mongodb,
  gitgithub,
  vercel,
  linux,
  postman
} from "../../assets/index";

const All = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-14">
      <ResumeCard title={"C"} src={c} />
      <ResumeCard title={"C++"} src={cplusplus} />
      <ResumeCard title={"HTML5"} src={html} />
      <ResumeCard title={"CSS3"} src={css} />
      <ResumeCard title={"JavaScript"} src={javascript} />
      <ResumeCard title={"React"} src={react} />
      <ResumeCard title={"Redux"} src={redux} />
      <ResumeCard title={"Node js"} src={node} />
      <ResumeCard title={"Express js"} src={express} />
      <ResumeCard title={"Mongo DB"} src={mongodb} />
      <ResumeCard title={"MySQL"} src={mysql} />
      <ResumeCard title={"Git & GitHub"} src={gitgithub} />
      <ResumeCard title={"Vercel"} src={vercel} />
      <ResumeCard title={"Linux"} src={linux} />
      <ResumeCard title={"Postman"} src={postman} />
    </div>
  );
};

export default All;
