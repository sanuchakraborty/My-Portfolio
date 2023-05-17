import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import {
  abdulBari,
  abdulBari2,
  angelaYu,
  JonasSchmedtmann,
  sukhomoyPal
} from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Courses = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="courses"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Courses and Certificates" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={abdulBari}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Tutor
                  </p>
                  <h3 className="text-2xl font-bold">Abdul Bari</h3>
                  <p className="text-base tracking-wide text-gray-500">Udemy</p>
                </div>
              </div>
              <div className="w-full py-20 lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[100%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Learn C++ Programming -Beginner to Advance- Deep Dive in
                        C++.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        July, 2021 - February, 2022
                      </p>

                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Learnt Basic concepts of Programming C++, OOPs,Exception
                    Handling, STL, Features of C++ 11. Learnt Object-Oriented
                    Programming Design Concept in C++ Perfectly with Examples
                    Also learnt How to Develop an Application
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={abdulBari2}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Tutor
                  </p>
                  <h3 className="text-2xl font-bold">Abdul Bari</h3>
                  <p className="text-base tracking-wide text-gray-500">Udemy</p>
                </div>
              </div>
              <div className="w-full py-20 lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[100%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Mastering Data Structures and Algorithms using C and
                        C++.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Aug 12, 2021 - Aug 22, 2022
                      </p>

                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Learnt various Popular Data Structures and their Algorithms.
                    Developed Analytical skills on Data Structure and use them
                    efficiently. Learnt Recursive Algorithms on Data Structures
                    and various Sorting Algorithms. Also learnt implementation
                    of Data Structures using C and C++
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={angelaYu}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Tutor
                  </p>
                  <h3 className="text-2xl font-bold">Angela Yu</h3>
                  <p className="text-base tracking-wide text-gray-500">Udemy</p>
                </div>
              </div>
              <div className="w-full py-20 lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[100%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        The Complete 2023 Web Development Bootcamp.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        April, 2022 - November, 2022
                      </p>

                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Learnt the latest technologies, including Javascript, React,
                    Node and even Web3 development. Built fully-fledged websites
                    and web apps. Mastered frontend development with React.
                    Mastered backend development with Node, Express, MongoDB and
                    Postman. Also Learnt professional developer best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Four ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={JonasSchmedtmann}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Tutor
                  </p>
                  <h3 className="text-2xl font-bold">Jonas Schmedtmann</h3>
                  <p className="text-base tracking-wide text-gray-500">Udemy</p>
                </div>
              </div>
              <div className="w-full py-20 lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[100%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        The Complete JavaScript Course: From Zero to Expert!.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Jan, 2023 - present
                      </p>

                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Learnt JavaScript fundamentals etc. Modern ES6+ from the
                    beginning: arrow functions, destructuring, spread operator,
                    etc. also Classes, constructors, prototypal inheritance,
                    encapsulation, etc. Complex concepts like the 'this'
                    keyword, higher-order functions, closures, etc. and also
                    Event loop, promises, async/await, AJAX calls and APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Five ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={sukhomoyPal}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Tutor
                  </p>
                  <h3 className="text-2xl font-bold">Dr. Sukhomoy Pal</h3>
                  <p className="text-base tracking-wide text-gray-500">IIT guwahati</p>
                </div>
              </div>
              <div className="w-full py-20 lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[100%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Soft Computing
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Jan, 2022 - April 2022
                      </p>

                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Learnt various Artificial Neural Network (ANN) models and learning techniques like supervised and unsupervised learning.
                    Learnt about Genetic Algorithm and Fuzzy logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
