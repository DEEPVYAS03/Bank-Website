import React from "react";
import { navLinks } from "../constants";

const Button = ({ styles }) => {
  // const homeLink
  // const clickHandler =()=>{
  //  homeLink = navLinks.filter((navLink)=>{
  //     navLink.id =='home'
  //     return navLink
  //   })
  //   <a href={`#${homeLink.id}`}>{homeLink.title}</a>
  // }
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} 
    >
      Get Started
    </button>
  );
};

export default Button;
