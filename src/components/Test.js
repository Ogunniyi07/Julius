import React, {useRef} from 'react';


const Test = () => {
  let contain = useRef(null)
  let image = useRef(null)


  return (
    <div className='bg-red-500'>
     <div className="w-[100%] h-[100vh] my-0 mx-auto flex justify-center items-center ">
          <>
          <div className="contain bg-[#0a0a0a] h-[540px] w-[33%] flex justify-center items-center relative overflow-hidden after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:top-0 after:right-0 after:bg-pink-300 ">
            <img
              src="/images/juls.jpeg"
              alt="juls"
              className=" h-[540px] w-[450px] absolute  "
            />
          </div>
          </>
        </div>
    </div>
  )
}

export default Test





// import React, {useRef, useEffect} from 'react';
// // import CSSRulePlugin from 'gsap/CSSRulePlugin';

// const Test = () => {
//   // let container = useRef(null);
//   // let image = useRef(null);
//   // let imageReveal = CSSRulePlugin.getRule('.img-container:after');

//   // useEffect(() => {
//   //   console.log(container, image);
//   // });

//   return (
//     <div className='main'>
//      <div 
//       // ref={el => (container = el)}
//       className='container  w-[100%] h-[100vh] my-0 mx-auto flex justify-center items-center'>
//           <>
//         <div className='img-container bg-[#0a0a0a] h-[540px] w-[33%] flex justify-center items-center relative overflow-hidden after:content-[none] after:absolute after:w-[100%] after:h-[100%] after:top-0 after:right-0 after:bg-pink-300'>
//             <img
//               // ref={el => (image = el)}
//               src="/images/juls.jpeg"
//               alt="juls"
//               className=" h-[540px] w-[450px] absolute"
//             />
//           </div>
//           </>
//         </div>
//     </div>
//   )
// }

// export default Test


