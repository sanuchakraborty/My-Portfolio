import React, {  useState } from 'react'
import Title from '../layouts/Title';
import All from './All';
import Language from './Language';
import Frontend from './Frontend';
import Backend from "./Backend"

const Resume = () => {
   const [all, setAll] = useState(true);
   const [language, setLanguage] = useState(false);
   const [frontend, setFrontend] = useState(false);
   const [backend, setBackend] = useState(false);
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Skills" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setAll(true) &
              setLanguage(false) &
              setFrontend(false) &
              setBackend(false)
            }
            className={`${
              all
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            All
          </li>
          <li
            onClick={() =>
              setAll(false) &
              setLanguage(true) &
              setFrontend(false) &
              setBackend(false)
            }
            className={`${
              language ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Languages
          </li>
          <li
            onClick={() =>
              setAll(false) &
              setLanguage(false) &
              setFrontend(true) &
              setBackend(false)
            }
            className={`${
              frontend
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Frontend
          </li>
          <li
            onClick={() =>
              setAll(false) &
              setLanguage(false) &
              setFrontend(false) &
              setBackend(true)
            }
            className={`${
              backend
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Backend
          </li>
        </ul>
      </div>
      {all && <All />}
      {language && <Language />}
      {frontend && <Frontend />}
      {backend && <Backend />}
      
 
    </section>
  );
}

export default Resume