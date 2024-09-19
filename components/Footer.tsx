

import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around text-white py-10 bg-black'>
      <div className='flex flex-col items-center md:items-start mb-8 md:mb-0'>
        <h1 className='text-3xl pb-5 text-center md:text-left'>
          Cyber <span className='text-blue'>Ez</span>
        </h1>
        <p className='pb-5 text-center md:text-left'>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit. <br />
          Morbi sit amet neque tortor.
        </p>
        <div className='flex flex-row justify-center md:justify-start gap-4'>
          <a href="" aria-label="Facebook">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="white"/>
              <path d="M20 24C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.9391 23.5786 17.9217 22.8284 17.1716C22.0783 16.4214 21.0609 16 20 16C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20C16 21.0609 16.4214 22.0783 17.1716 22.8284C17.9217 23.5786 18.9391 24 20 24V24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 24V16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11H24C25.3261 11 26.5979 11.5268 27.5355 12.4645C28.4732 13.4021 29 14.6739 29 16V24C29 25.3261 28.4732 26.5979 27.5355 27.5355C26.5979 28.4732 25.3261 29 24 29H16C14.6739 29 13.4021 28.4732 12.4645 27.5355C11.5268 26.5979 11 25.3261 11 24Z" stroke="white" strokeWidth="1.5"/>
              <path d="M25.5 14.51L25.51 14.499" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="" aria-label="Twitter">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="#171717"/>
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="white"/>
              <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="" aria-label="Instagram">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="white"/>
              <path d="M31 11.0101C31 11.0101 28.982 12.2021 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C29 15.2321 28.972 14.9541 28.92 14.6801C29.94 13.6741 31 11.0101 31 11.0101Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="" aria-label="LinkedIn">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="white"/>
              <path d="M22 20L18.5 22V18L22 20Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 20.7074V19.2924C10 16.3974 10 14.9494 10.905 14.0184C11.811 13.0864 13.237 13.0464 16.088 12.9654C17.438 12.9274 18.818 12.9004 20 12.9004C21.181 12.9004 22.561 12.9274 23.912 12.9654C26.763 13.0464 28.189 13.0864 29.094 14.0184C30 14.9494 30 16.3984 30 19.2924V20.7074C30 23.6034 30 25.0504 29.095 25.9824C28.189 26.9134 26.764 26.9544 23.912 27.0344C22.562 27.0734 21.182 27.1004 20 27.1004C18.6958 27.0965 17.3916 27.0745 16.088 27.0344C13.237 26.9544 11.811 26.9144 10.905 25.9824C10 25.0504 10 23.6024 10 20.7084V20.7074Z" stroke="white" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
      </div>

      <div className='flex flex-col items-center md:items-start mb-8 md:mb-0'>
        <h1 className='text-3xl pb-5 text-center md:text-left'>Quick Links</h1>
        <a className='pb-2 hover:underline' href="">Our Service</a>
        <a className='pb-2 hover:underline' href="">About Us</a>
        <a className='pb-2 hover:underline' href="">Pricing</a>
        <a className='hover:underline' href="">Testimonial</a>
      </div>

      <div className='flex flex-col items-center md:items-start mb-8 md:mb-0'>
        <h1 className='text-3xl pb-5 text-center md:text-left'>Contact Us</h1>
        <a className='pb-2 hover:underline' href="mailto:hello@website.com">hello@website.com</a>
        <a className='pb-2 hover:underline' href="">838 Cantt Sialkot, ENG</a>
        <a className='pb-2 hover:underline' href="">+02 5421234560</a>
      </div>

      <div className='flex flex-col items-center md:items-start'>
        <h3 className='text-3xl pb-5 text-center md:text-left'>Newsletter</h3>
        <form action="" className='flex flex-col items-center md:items-start'>
          <input type="email" placeholder="Enter your email" className='p-2 mb-2 border rounded'/>
          <button className='p-2 bg-blue text-white rounded hover:bg-gray-500' type="submit">Subscribe</button>
        </form>





      </div>
    </div>
  );
};

export default Footer;
