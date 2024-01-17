import React from "react";
import Background from "../assets/portfolio-background.jpg";
import ProfilePic from "../assets/elyse-profile-pic.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NavBar from "./NavBar";

const Welcome = () => {
  return (
    <div className="w-full h-screen bg-parallax overflow-hidden relative">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="pt-15 max-w-screen-lg mx-auto h-full flex flex-col justify-center lg:items-start items-center text-white relative z-10 lg:px-8">
        <h1 className="sm:text-4xl text-2xl text-white font-Rubik font-extrabold tracking-widest pt-20 hover-animate max-xs:text-center">
          Hello, I'm Elyse Montano
        </h1>
        <h2 className="xs:text-lg max-xs:text-center text-md text-white tracking-widest  hover-animate">
          A full stack{" "}
          <span className="text-indigo-400 font-bold up">developer</span> and web
          development{" "}
          <span className="text-indigo-400 font-bold">instructor</span>
        </h2>
        <div className="md:flex items-center md:px-8">
          <div className="hover-animate pr-14 max-md:hidden">
            <img
              src={ProfilePic}
              className="object-scale-down h-20 rounded-full"
            />
            <div className="flex text-white pt-6 justify-between max-w[200px] w-20">
              <a
                href="https://www.linkedin.com/in/elysemontano/"
                target="_blank"
              >
                <AiFillLinkedin className="cursor-pointer" size={25} />
              </a>
              <a href="https://github.com/elysemontano" target="_blank">
                <AiFillGithub className="cursor-pointer" size={25} />
              </a>
            </div>
          </div>
          <div className="max-md:px-8 max-md:text-center hover-animate max-sm:text-sm">
            <p className=" text-white pt-10 pb-4">
              I specialize in creating and teaching full-stack applications
              using Ruby on Rails and React.
            </p>
            <p className=" text-white pb-4">
              {" "}
              Before diving into web development, I spent six wonderful years
              working in live sound engineering. This experience has fueled my
              passion for troubleshooting, thinking outside the box, and finding
              creative solutions to problems. I thrive in collaborative
              environments where we can work together to produce top-notch
              results.{" "}
            </p>
            <p className=" text-white pb-4">
              Transitioning into teaching and software development has allowed
              me to combine all the aspects I loved about live sound, such as
              problem-solving, critical thinking, and creativity, to enhance
              both projects and the classroom experience.
            </p>
            <p className=" text-white pb-4">
              By integrating my passion for teaching, my expertise in software
              development, and my commitment to personal growth, I bring a
              unique set of skills and mindset to any project or role I take on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
