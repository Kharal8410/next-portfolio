import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML 5", logo: "/html.svg" },
  { skill: "CSS 3", logo: "/css.svg" },
  { skill: "JavaScript", logo: "/javascript.svg" },
  { skill: "TypeScript", logo: "/typescript.svg" },
  { skill: "React", logo: "/react.svg" },
  { skill: "Next.js", logo: "/nextjs1.svg" },
  { skill: "Tailwind CSS", logo: "/tailwindcss.svg" },
  { skill: "Bootstrap CSS", logo: "/bootstrap.svg" },
  { skill: "Git", logo: "/git1.svg" },
  { skill: "GitHub", logo: "/github1.svg" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 p-4 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-5xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        {/* <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row  md:text-left"> */}
        <div className="flex flex-col justify-center items-center">
          <div className="md:w-2/3 my-12 md:text-xl">
            <h1 className="text-center text-3xl font-bold mb-6 ">
              Get to know me!
            </h1>
            <p className="text-justify">
              Hi, my name is Mukunda and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> FrontEnd developer.
            </p>
            <br />
            <p className="text-justify">
              I graduated from ISMT College, Chitwan in 2023 with a BSc IT and
              have been working in the field ever since.
            </p>
            <br />
            <p className="text-justify">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling,, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p className="text-justify">
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-2/3  md:text-left my-12">
            <h1 className="text-3xl text-center font-bold mb-9">My Skills</h1>
            <div className="flex  flex-wrap justify-center z-10 my-4  max-w-4xl mx-auto">
              {skills.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center mx-2 mb-4 "
                >
                  <Image
                    width={94}
                    height={94}
                    src={item.logo}
                    alt={`${item.skill} logo`}
                  />
                  <p className="px-2 py-1 mt-2">{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutSection;
