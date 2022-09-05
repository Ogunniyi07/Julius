import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";


const Nav = () => {
 
  
  let [open, setopen] = useState(false);
  //  const menus = [
  //     { name: "HOME",
  //       to: '/',
  //     },
  //     { name: "ABOUT",
  //       to: '/about',
  //     },
  //     { name: "SKILLS",
  //       to: '/Skills',
  //     },
  //     { name: "PORTFOLIO",
  //       to: '/Portfolio',
  //     },
  //     { name: "CONTACT",
  //       to: '/Contact',
  //     },
  //  ]
  const list =
    "w-full md:bg-[#000] inline md:inline-block ml-10 md:ml-[-20px] border-b-2 border-transparent hover:border-white duration-300 my-0 md:my-6";
  const link =
    "text-white text-sm py-5 md:py-3 inline-block font-normal cursor-pointer";

  return (

    <div className="">
      <nav className="w-full bg-[#000] flex fixed items-center justify-between pt-5 pl-10 pr-[180px]">
        <Link to='/'>
          <img src="./images/logo.png" alt="logo" className="w-[50px] ml-[50px] md:ml-[-20px]" />
        </Link>
        <img
          src={open ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"}
          className="z-20 fixed right-5 top-4 text-white cursor-pointer hidden md:inline"
          onClick={() => setopen(!open)}
        />
        <ul
          className={`bg-[#ffffff14] backdrop-blur-lg pr-10 md:pl-[50px] static md:fixed top-16 h-auto md:h-screen duration-500 ease-linear md:overflow-scroll ${
            !open ? "right-[-100%] " : "right-0"
          }`}
        >
          {/* {
               menus.map((menu, index) => (
                  <li key={index} className={list}>
                     <a href={menu.to} className={link}>
                         <span className="font-bold mr-1.5">0{index}</span>{menu.name}</a>
                  </li>
                  ))
            } */}
          <li className={list}>
            <Link className={link} to='/' smooth>
                Home  
            </Link>
          </li>
          <li className={list}>
            <Link to='/#about' className={link} smooth>
                About  
            </Link>
          </li>
          <li className={list}>
            <Link to='/#skills' className={link} smooth>
                Skills 
            </Link>
          </li>
          <li className={list}>
            <Link to='/#portfolio' className={link} smooth>
                Portfolio 
            </Link>
          </li>
          <li className={list}>
            <Link to='/#contact' className={link} smooth>
                Contact  
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
