"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="p-4 flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-3 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/3">
          <Image
            src="/img1.jpg"
            alt=""
            width={325}
            height={325}
            priority={true}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-2/5">
          <TypeAnimation
            sequence={["Hi, it's me Mukunda Kharal", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2.5em",
              display: "inline-block",
            }}
            repeat={Infinity}
            className="font-bold "
          />

          <p className="text-lg mt-4 mb-6 md:text-2xl ">
            I&#39;m a highly ambitious, self-motivated, and driven{" "}
            <span className="font-semibold text-teal-600">
              FrontEnd Developer{" "}
            </span>
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <a
            href="/cv.pdf"
            download="mukunda-cv.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 mx-2"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  );
};

export default HeroSection;
