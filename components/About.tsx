// import React from 'react'
// import Image from 'next/image'
// import matrix from '../public/images/matrix.png'
// import code  from '../public/images/code.png'


// const About = () => {
//   return (
//     <div className='bg-black'>
//     <div className=' flex items-center justify-center justify-between   pt-10  bg-black h-screen '>
//       <div className='flex flex-wrap-reverse  items-center justify-center ml-[200px] justify-between '>
//       <div className='relative flex items-center ml-10 pr-10'>
//   <Image className='h-[60vh] w-full' src={matrix} alt=''/>
//   <Image className='absolute h-[50vh] w-full top-[100px]  left-20 ' src={code} alt=''/>
// </div>



//       <div className='flex flex-col md:flex space-y-5  pl-[100px]  text-white'>
//         <h1 className='text-md text-blue font-semibold pb-2'>About</h1>
//         <h3 className='text-2xl pb-4 font-semibold'>
//           Discover Our Journey  <br />
//            Protecting Your <br /> 
//           Digital World with  <br />
//            Expertise and Care</h3>
//         <p className='pb-4'>Lorem ipsum dolor sit amet consectetur, <br />
//                        adipisicing elit. Rerum, voluptatem? Vel deleniti<br />
//                         excepturi, quam sint amet eum cupiditate ratione <br />
//                        ab eveniet quos magnam ex incidunt accusantium esse <br />
//                         fugiat? Doloribus, delectus.</p>
//           <button className='bg-blue p-2 text-white w-[150px] rounded-md '>Read More</button>
//       </div>



      
//       </div>

     

//     </div>
//     <div className='hector '>

// </div>
    
//     </div>
//   )
// }

// export default About




import React from 'react';
import Image from 'next/image';
import matrix from '../public/images/matrix.png';
import code from '../public/images/code.png';

const About = () => {
  return (
    <div className='bg-black'>
      <div className='flex flex-col md:flex-row items-center justify-center pt-10 h-screen'>
        {/* Image Section */}
        <div className='relative flex items-center justify-center w-full md:w-1/2'>
          <Image className='h-[50vh] md:h-[60vh] w-full object-cover' src={matrix} alt='Matrix' />
          <Image className='absolute h-[40vh] md:h-[50vh] w-full top-16 md:top-[100px] left-0 md:left-20 object-cover' src={code} alt='Code' />
        </div>

        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start text-white w-full md:w-1/2 p-5 md:p-10'>
          <h1 className='text-md text-blue font-semibold pb-2 text-center md:text-left'>About</h1>
          <h3 className='text-2xl font-semibold pb-4 text-center md:text-left'>
            Discover Our Journey <br />
            Protecting Your <br />
            Digital World with <br />
            Expertise and Care
          </h3>
          <p className='pb-4 text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur, <br />
            adipisicing elit. Rerum, voluptatem? Vel deleniti <br />
            excepturi, quam sint amet eum cupiditate ratione <br />
            ab eveniet quos magnam ex incidunt accusantium esse <br />
            fugiat? Doloribus, delectus.
          </p>
          <button className='bg-blue p-2 text-white w-[150px] rounded-md'>
            Read More
          </button>
        </div>
      </div>
      <div className='hector'></div>
    </div>
  );
};

export default About;

