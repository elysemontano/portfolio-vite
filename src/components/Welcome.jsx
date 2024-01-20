import React from "react";
import Background from "../assets/portfolio-background.jpg";
import ProfilePic from "../assets/elyse-profile-pic.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NavBar from "./NavBar";

const Welcome = () => {
  return (
    <div className="w-full h-screen bg-parallax relative">
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
        <h1 className="sm:text-4xl text-4xl text-white font-Rubik font-extrabold tracking-widest pt-20 lg:hover-animate max-md:text-center">
          Hello, I'm Elyse Montano
        </h1>
        <h2 style={{ fontSize: '1.5rem' }} className="max-md:text-center text-md text-white tracking-widest lg:hover-animate">
            A full stack{" "}
            <span className="text-indigo-400 font-bold up">developer</span> and
            web development{" "}
            <span className="text-indigo-400 font-bold">instructor</span>
        </h2>

        <div className="md:flex items-center md:px-8 lg:hover-animate">
          <div className="pr-14 max-md:hidden flex-shrink-0">
            <img
              src={ProfilePic}
              className="w-32 h-32 object-cover rounded-full"
            />
            <div className="flex text-white pt-6 justify-between max-w-[200px]">
              <a
                href="https://www.linkedin.com/in/elysemontano/"
                target="_blank"
              >
                <AiFillLinkedin className="cursor-pointer hover-animate" size={35} />
              </a>
              <a href="https://github.com/elysemontano" target="_blank">
                <AiFillGithub className="cursor-pointer hover-animate" size={35} />
              </a>
            </div>
          </div>
          <div className="max-md:px-8 max-md:text-center max-sm:text-sm">
            <p className="text-white pt-10 pb-4">
              I specialize in creating and teaching full-stack applications
              using Ruby on Rails and React.
            </p>
            <p className="text-white pb-4">
              Before diving into web development, I spent six wonderful years
              working in live sound engineering. This experience has fueled my
              passion for troubleshooting, thinking outside the box, and finding
              creative solutions to problems. I thrive in collaborative
              environments where we can work together to produce top-notch
              results.
            </p>
            <p className="text-white pb-4">
              Transitioning into teaching and software development has allowed
              me to combine all the aspects I loved about live sound, such as
              problem-solving, critical thinking, and creativity, to enhance
              both projects and the classroom experience.
            </p>
            <p className="text-white pb-4">
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
