import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] w-[100%]" id='about'>
      <h1 className="text-white text-[40px] font-bold text-center pt-[80px] md:pb-[30px] px-[20px] md:text-left">
        About
      </h1>
      <div className="flex flex-row p-[100px] md:flex-col md:p-[20px]">
        
        
        
        
        <div className="w-[50%]  md:w-[100%]  md:flex md:justify-start">
          <div className="bg-[#0a0a0a] h-[420px] w-[420px]  rounded-lg shadow-2xl flex justify-center overflow-hidden hover:scale-[1.05] ease-in duration-500">
            <img
              src="/images/juls.jpeg"
              alt="juls"
              className="h-[100%] w-[80%] rounded-lg shadow-2xl hover:scale-[1.05] ease-in duration-500 md:w-[100%]"
            />
          </div>
        </div>




        <div className="w-[50%] bg-[#0a0a0a] p-[50px] flex flex-col rounded-lg shadow-2xl md:w-[100%] md:justify-center md:flex md:mb-[100px] md:mt-[40px] md:p-[20px] md:px-[20px]">
          <p className="text-[18px] text-white">
            Hi, I'm Julius Ogunniyi, a confident and passionate web developer. I
            build interactive websites and web applications. I've always been
            passionate about problem solving as this is what got me into coding.
            <br />
            <br />
            My core skills are based on javascript, I am highly proficient in
            React and I'm also very good with wordpress and other template
            creation platforms.
            <br />
            <br />I usually spend my days coding, or learning something new and
            now I seek new opportunities to develop my skills even further. I
            enjoy watching youtube videos on various software engineers, play
            video games, and visit art galleries.
          </p>
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/1wkBhCCjJbRUtDAveVdg3Og4qXbgilQbJ/view?usp=sharing"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;