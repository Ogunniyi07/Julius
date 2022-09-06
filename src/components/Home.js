import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  const media_icons = "text-[28px] pl-[15px] pb-[10px]";

  return (
    <div>
      <div
        id="home"
        className="bg-[#000] w-[100%] flex flex-row md:flex-col md:px-[20px]"
      >
        <div className="w-[52%] pl-[60px] pt-[220px] text-white leading-tight md:pl-0 md:w-[100%] md:flex md:flex-col md:items-start md:pt-[200px]  lg:pl-[-80px]">
          <div className="lg:mt-[-40px]">
            <div className="text-2xl md:text-1xl leading-tight">Hello,</div>
            <div className="text-5xl lg:text-3xl leading-tight">
              I'm Julius Ogunniyi,
            </div>
            <div className="text-6xl text-[#ff9900] leading-tight">
              <b>Front End Developer,</b>
            </div>
            <div className="text-4xl md:text-3xl leading-tight lg:text-2xl">
              From Lagos,
            </div>
            <div className="text-4xl md:text-3xl leading-tight lg:text-2xl">
              Nigeria.
            </div>
            <button className="btn md:w-[120px]">
              <a href="mailto:ogunniyi.julius12@gmail.com" target="_blank">
                Welcome
              </a>
            </button>
          </div>
        </div>
        <div className="w-[44%] mt-[30px] lg:my-[100px] md:w-[100%] items-center md:items-start">
          <div className="h-[90vh]  mt-20  md:my-[-190px]">
            <img
              src="/images/codeing.png"
              alt="hero-img"
              className="h-[93%] w-[100%] object-contain lg:h-[100%] w-[100%]"
            />
          </div>
        </div>
        <div className="w-[4%] text-white flex flex-col justify-center lg:hidden md:hidden">
          <div className="h-[50vh] bg-[#FF9900] rounded-l-2xl flex items-center">
            <ul className="">
              <li>
                <a
                  href="https://www.linkedin.com/in/julius-ogunniyi-97884b199"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className={media_icons} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Plugboy7" target="blank">
                  <FontAwesomeIcon icon={faTwitter} className={media_icons} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Ogunniyi07" target="blank">
                  <FontAwesomeIcon icon={faGithub} className={media_icons} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/plug__boy7" target="blank">
                  <FontAwesomeIcon icon={faInstagram} className={media_icons} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/2349024420929" target="blank">
                  <FontAwesomeIcon icon={faWhatsapp} className={media_icons} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
