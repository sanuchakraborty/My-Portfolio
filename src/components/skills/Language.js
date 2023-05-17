import React from "react";
import ResumeCard from "./ResumeCard";
import {
  c,
  cplusplus,
  html,
  css,
  javascript,
  mysql,
} from "../../assets/index";

const Language = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-14">
      <ResumeCard title={"C"} src={c} />
      <ResumeCard title={"C++"} src={cplusplus} />
      <ResumeCard title={"HTML5"} src={html} />
      <ResumeCard title={"CSS3"} src={css} />
      <ResumeCard title={"JavaScrit"} src={javascript} />
      <ResumeCard title={"MySQL"} src={mysql} />
    </div>
  );
};

export default Language;
