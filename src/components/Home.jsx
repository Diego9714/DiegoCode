import React from "react";
import MePhoto from "../assets/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black to-slate-900 py-4 sm:py-20"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 sm:flex-row">
          <div className="w-full flex justify-center items-center md:hidden h-1/2 sm:h-full">
            <img src={MePhoto} alt="my profile" className="w-9/12" />
          </div>
  
          <div className="flex flex-col justify-center h-1/2 sm:h-19 sm:ml-4">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#427D9D] my-4">
              Hello, I'm Diego Cabrera
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#164863] my-4">
              [I'm Full Stack Developer]
            </h2>
            <p className="text-white py-4 text-justify">
              +2 years of experience as a Full Stack Developer and solid
              proficiency in back-end development, I excel at creating high
              quality web applications with advanced technologies. I have
              collaborated with teams and solved problems effectively.
            </p>
  
            <div>
              <button className="text-white w-fit px-4 sm:px-6 py-3 my-4 flex items-center rounded-md bg-[#164863]">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} sm:size={30} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
  
          <div className="hidden md:flex">
            <img src={MePhoto} alt="my profile" className="mx-8 w-2/3 ml-8 sm:ml-24" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
