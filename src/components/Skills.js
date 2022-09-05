import React from 'react'

const About = () => {
  const stack='w-[190px] h-[190px] flex justify-center items-center shrink-0 rounded shadow-indigo-800 hover:bg-[#fff]';
  return (
    <div className='bg-[#000] relative w-[100%] p-[40px] pb-[150px] md:py-[100px] md:p-[20px]' id='skills'>
        <h1 className='text-white text-[40px] font-bold text-center md:text-left'>Tech Stack</h1>
        <div className='bg-[#fff] pt-[20px] mt-[50px] rounded shadow-md overflow-x-auto'>
            <div className='flex flex-row items-center justify-between '>
                <div className={stack}>
                  <img src='/images/html.png' alt=''/>
                </div>
                <div className={stack}>
                  <img src='/images/css.png' alt=''/>
                </div>
                <div className={stack}>
                  <img src='/images/javascript.png' alt=''/>
                </div> 
                <div className={stack}>
                  <img src='/images/react.png' alt=''/>
                </div>
                <div className={stack}>
                  <img src='/images/next.png' alt=''/>
                </div>
                <div className={stack}>
                  <img src='/images/tailwind.png' alt=''/>
                </div>
                {/* <div className={stack}>
                  <img src='/images/vue.jpg' alt=''/>
                </div>
                <div className={stack}>
                  <img src='/images/css.jpg' alt=''/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default About