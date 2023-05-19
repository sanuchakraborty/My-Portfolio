import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "a Coder by Interest.",
      "a Full Stack Developer.",
      "an IIT Guwahati post-grad.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Sanu Chakrabortty</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am self-motivated and a team player, looking for a competitive
          position in the ﬁeld of Software Development, where I can utilise my
          analytical and development skills to further work towards personal and
          professional development and contribute to the overall growth of the
          organisation.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
