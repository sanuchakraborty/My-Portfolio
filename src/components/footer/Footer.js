import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black gap-8 flex items-center justify-center">
      <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
            <a href='https://www.facebook.com/sanu.chakrabortty.39'><span className="bannerIcon">
              <FaFacebookF />
            </span></a>
            <a href='https://www.instagram.com/sanu_chakrabortty/'><span className="bannerIcon">
              <FaInstagram />
            </span></a>
            <a href='https://www.linkedin.com/in/sanu-chakrabortty123/'><span className="bannerIcon">
              <FaLinkedinIn />
            </span></a>
          </div>
      </div>
      
    </div>
  );
}

export default Footer