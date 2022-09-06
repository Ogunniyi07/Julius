import React from "react";

const Portfolio = () => {
  const projects =
    "flex flex-row justify-center items-center py-[40px] px-[50px] lg:px-[20px] md:py-[50px] md:flex-col md:my-[-50px]";
  const image =
    "group relative w-[50%] h-[50vh] flex justify-center items-center md:w-[100%] lg:bg-[#fff] md:justify-start object-cover lg:mr-[10px]";
  const container =
    "relative w-[40%] flex flex-col justify-center mt-[52px] ml-[-150px] md:w-[100%] md:mb-[50px] lg:ml-[0px] lg:mt-[0px] text-white text-[18px]";
  const desp =
    "w-[100%] h-[20vh] flex flex-col justify-center bg-[#000] lg:bg-[#ff9900] my-[20px] px-[20px] lg:py-[50px] rounded shadow-xl md:w-[100%] md:mb-[50px] text-white text-[18px] ";
  const title =
    "text-[28px] text-[#FF9900] font-semibold text-right md:text-left";
  const text = "text-right md:text-left";
  const list =
    "w-[100%] flex flex-row justify-end text-[#FF9900] md:justify-start md:mt-[-40px]";
  const link =
    "w-[100%] flex flex-row justify-end text-white md:justify-start md:pl-3";

  return (
    <div className="bg-[#0a0a0a]" id="portfolio">
      <div className="text-white text-[40px] pt-[100px] pb-[40px] font-bold text-center md:text-left md:pl-[20px]">
        Projects
      </div>
      <div className={projects}>
        <div className={image}>
          <a href="#" className="w-[100%] h-[100%]">
            <img
              src="/images/store.png"
              alt="shopping-store"
              className="w-[100%] h-[100%] object-contain"
            />
            <div className="absolute top-0 left-0 w-[75%] h-0 ml-[77px] flex flex-col justify-center items-center bg-gray-200 opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 md:w-[100%] md:ml-[0px] lg:w-[100%] lg:ml-[0px]"></div>
          </a>
        </div>
        <div className={container}>
          <h2 className={title}>STORE</h2>
          <div className={desp}>
            <p className={text}>
              A shopping store to buy clothes and hoodies of different sizes and
              colors
            </p>
          </div>
          <ul className={list}>
            <li className="pl-[10px]">React</li>
            <li className="pl-[10px]">Tailwindcss</li>
            <li className="pl-[10px]">Restful API</li>
          </ul>
          <div className={link}>
            <a href="https://shopping-store-two.vercel.app/" target="_blank">
              <p
                className="
                inline-block
                text-[18px]
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-slate-400
                before:to-[#ff9900]
                hover:before:w-full
                hover:before:opacity-100"
              >
                Visit site
              </p>{" "}
              &#8594;
            </a>
          </div>
        </div>
      </div>
      <div className={projects}>
        <div className={image}>
          <a href="#" className="w-[100%] h-[100%]">
            <img
              src="/images/spenditure.png"
              alt="spenditure"
              className="w-[100%] h-[100%] object-contain"
            />
            <div className="absolute top-0 left-0 w-[77%] h-0 ml-[72px] flex flex-col justify-center items-center bg-gray-200 opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 md:w-[100%] md:ml-[0px] lg:w-[100%] lg:ml-[0px]"></div>
          </a>
        </div>
        <div className={container}>
          <h2 className={title}>SPENDITURE</h2>
          <div className={desp}>
            <p className={text}>
              A platform to buy, sell and take charge of your finances
            </p>
          </div>
          <ul className={list}>
            <li className="pl-[10px]">React</li>
            <li className="pl-[10px]">CSS</li>
          </ul>
          <div className={link}>
            <a href="https://spenditure-topaz.vercel.app/" target="_blank">
              <p
                className="
                inline-block
                text-[18px]
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-slate-400
                before:to-[#ff9900]
                hover:before:w-full
                hover:before:opacity-100"
              >
                Visit site
              </p>{" "}
              &#8594;
            </a>
          </div>
        </div>
      </div>
      <div className={projects}>
        <div className={image}>
          <a href="#" className="w-[100%] h-[100%]">
            <img
              src="/images/tmdb.png"
              alt="movie"
              className="w-[100%] h-[100%] object-contain"
            />
            <div className="absolute top-0 left-0 w-[67%] h-0 ml-[103px] flex flex-col justify-center items-center bg-gray-200 opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 md:w-[100%] md:ml-[0px] lg:w-[100%] lg:ml-[0px]"></div>
          </a>
        </div>
        <div className={container}>
          <h2 className={title}>MOVIES</h2>
          <div className={desp}>
            <p className={text}>
              A platform to search for movies, latest movies and trending movies
            </p>
          </div>
          <ul className={list}>
            <li className="pl-[10px]">React</li>
            <li className="pl-[10px]">React-Bootstrap</li>
            <li className="pl-[10px]">Restful API</li>
          </ul>
          <div className={link}>
            <a href="https://cart-bice.vercel.app/" target="_blank">
              <p
                className="
                inline-block
                text-[18px]
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-slate-400
                before:to-[#ff9900]
                hover:before:w-full
                hover:before:opacity-100"
              >
                Visit site
              </p>{" "}
              &#8594;
            </a>
          </div>
        </div>
      </div>
      <div className={projects}>
        <div className={image}>
          <a href="#" className="w-[100%] h-[100%]">
            <img
              src="/images/ise.png"
              alt="ise"
              className="w-[100%] h-[100%] object-contain"
            />
            <div className="absolute top-0 left-0  w-[79%] h-0 ml-[67px] flex flex-col justify-center items-center bg-gray-200 opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 md:w-[100%] md:ml-[0px] lg:w-[100%] lg:ml-[0px]"></div>
          </a>
        </div>
        <div className={container}>
          <h2 className={title}>ISE</h2>
          <div className={desp}>
            <p className={text}>
              A platform to interconnect different artisans and employees
              together
            </p>
          </div>
          <ul className={list}>
            <li className="pl-[10px]">React</li>
            <li className="pl-[10px]">CSS</li>
            <li className="pl-[10px]">FontAwesome</li>
          </ul>
          <div className={link}>
            <a href="https://ise-works.vercel.app/" target="_blank">
              <p
                className="
                inline-block
                text-[18px]
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-0.5
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-slate-400
                before:to-[#ff9900]
                hover:before:w-full
                hover:before:opacity-100"
              >
                Visit site
              </p>{" "}
              &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
