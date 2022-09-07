import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {

  let [open, setopen] = useState(false);
  const list =
    "w-full inline md:inline-block ml-10 md:ml-[-20px] border-b-2 border-transparent hover:border-white duration-300 my-0 md:my-6";
  const link =
    "text-white md:text-2xl py-5 md:py-3 inline-block font-normal cursor-pointer";

  return (
    <div className="fixed z-20">
      <nav className="w-full bg-[#000] flex fixed items-center justify-between p-5 pl-10 pr-[150px] lg:pr-[20px]">
        <Link to="/">
          <img
            src="./images/logo.png"
            alt="logo"
            className="w-[50px] ml-[50px] md:ml-[-20px]"
          />
        </Link>
        <img
          src={open ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"}
          className="z-20 fixed right-5 top-4 text-white cursor-pointer hidden md:inline"
          onClick={() => setopen(!open)}
        />
        <ul
          className={`bg-[#000]  pr-[50px] md:pr-[40px]  md:pl-[50px] static md:fixed top-14 h-auto md:h-screen duration-500 ease-linear md:overflow-scroll ${
            !open ? "right-[-100%] " : "right-0"
          }`}
        >
          <li className={list} onClick={() => setopen(!open)}>
            <Link className={link} to="/#home" smooth>
              Home
            </Link>
          </li>
          <li className={list} onClick={() => setopen(!open)}>
            <Link to="/#about" className={link} smooth>
              About
            </Link>
          </li>
          <li className={list} onClick={() => setopen(!open)}>
            <Link to="/#skills" className={link} smooth>
              Skills
            </Link>
          </li>
          <li className={list} onClick={() => setopen(!open)}>
            <Link to="/#portfolio" className={link} smooth>
              Portfolio
            </Link>
          </li>
          <li className={list} onClick={() => setopen(!open)}>
            <Link to="/#contact" className={link} smooth>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
