import React from 'react'
import Image from  'next/image'
import Lock from '../public/images/wepik-export-20231026003443tjA7 1.png'
const Hero = () => {
  return (
    <div className='pt-10 bg-black bg-gradient-to-r from-black to-l-accent w-full h-screen '>
      <div className='flex flex-wrap-reverse md:flex  items-center justify-center'>
      <div className='flex flex-col '>
      <h3 className='text-white  text-6xl pb-10 font-bold sm:flex'>Empowering You  <br />
                                           in the Digital Age</h3>
<p className='text-white pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                         Natus accusamus porro iure tempora  illum ducimus obcaecati <br />
                          fuga sapiente! Veritatis porro, rerum id alias libero aperiam <br />
                           velit aspernatur corrupti perspiciatis nesciunt.</p>

<button className='bg-blue p-2 text-white w-[150px] rounded-md '>Purches</button>
</div>
<div className='  rounded-full'>
<Image className=' '  src={Lock} alt='lock' /> 
</div>
</div>
    </div>
  )
}

export default Hero


// import React from 'react';
// import Image from 'next/image';
// import Lock from '../public/images/wepik-export-20231026003443tjA7 1.png';

// const Hero = () => {
//   return (
//     <div className='bg-black bg-gradient-to-r from-black to-l-accent w-full h-screen flex items-center justify-center'>
//       <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl p-4 md:p-8'>
//         <div className='flex flex-col text-center md:text-left md:w-1/2 mb-8 md:mb-0'>
//           <h3 className='text-white text-4xl md:text-6xl pb-5 font-bold'>
//             Empowering You <br /> in the Digital Age
//           </h3>
//           <p className='text-white text-base md:text-lg pb-5'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
//             Natus accusamus porro iure tempora illum ducimus obcaecati <br />
//             fuga sapiente! Veritatis porro, rerum id alias libero aperiam <br />
//             velit aspernatur corrupti perspiciatis nesciunt.
//           </p>
//           <button className='bg-blue p-2 text-white w-[150px] rounded-md'>
//             Purchase
//           </button>
//         </div>
//         <div className='w-full md:w-1/2 flex justify-center'>
//           <Image className='rounded-full' src={Lock} alt='lock' width={400} height={400} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
