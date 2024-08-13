import React from 'react';
import styled from 'styled-components';
import samplogo from '../../assets/img/download.png';
import nitj_banner from '../../assets/img/nitj.png';
import nitj_logo from '../../assets/img/nitj_logo2.png';
import stock1 from '../../assets/img/stock1.jpg';
import stock2 from '../../assets/img/stock2.jpg';

import homeImage from '../../assets/home.png'; // Ensure this path is correct
import ExperienceList from './ExpList';

// Styled Components
const Body = styled.div`
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

const Krona = styled.div`
  font-family: "Krona One", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const NitjBanner = styled.div`
  background-image: url(${nitj_banner});
`;

const Announcements = styled.div`
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export default function Home() {
  return (
    <Body className="flex flex-col min-h-dvh">
      {/* Navbar Section */}
      <div className="w-screen h-20 bg-[#2F3DBD] flex justify-between px-6 tracking-tight navbar text-xl text-white">
        <div className="flex align-middle h-full">
          <img src={samplogo} alt="Sample Logo" className="h-[89px] w-[165px]" />
        </div>
        <div className="flex justify-between w-7/12">
          <ul className="flex text-lg justify-between w-7/12">
            <li className="py-6"><a href="#">Incoming Students</a></li>
            <li className="py-6"><a href="#">Achievements</a></li>
            <li className="py-6"><a href="#">Whats New</a></li>
            <li className="py-6"><a href="#">Academics</a></li>
          </ul>
          <a href="#" className="py-6">
            <span className="text-[#F7B755]">Register</span>&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="text-and-image text-3xl flex flex-col relative w-full overflow-hidden bg-cover" style={{ backgroundImage: `url(${nitj_banner})` }}>
        <div className="text-and-image-box relative w-full h-screen object-cover"></div>
        <div className="text-and-image-box2 bg-[#1F170A] bg-opacity-20 absolute top-[10%] right-[10%] w-[85%] p-[2%] h-auto">
          <p className="text-and-image-caption text-4xl uppercase text-white relative h-auto">
            Welcome to<br />Dr B R Ambedkar National Institute of Technology Jalandhar
          </p>
          <br />
          <br />
          <p className="text-and-image-text text-yellow-400">
            Welcome! This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at smpcs2024[at][dot]gmail[dot]com for any queries you may have.
          </p>
        </div>
      </div>

      {/* SAMP Section */}
      <div className="container mx-auto flex items-center justify-between py-12 px-32 krona">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 tracking-widest">What Is Samp?</h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Connect with experienced mentors to enhance your academic journey. Our program offers personalized guidance, support, and advice to help you excel in your studies and career goals. Discover resources, find a mentor, and achieve your academic ambitions with us!
          </p>
          <a href="#" className="text-lg text-orange-500 hover:text-orange-600">Read More....</a>
        </div>

        <div className="max-w-xl">
          <img src={stock1} alt="Mentorship illustration" className="w-full h-auto" />
        </div>
      </div>

      {/* Announcements */}
      <div className="container mx-auto flex items-center justify-between py-12 px-32 krona flex-row gap-12 md:flex-col md:gap-0">
        <div className="max-w-xl">
          <img src={stock2} alt="Mentorship illustration" className="w-full h-auto" />
        </div>
        <div className="max-w-2xl bg-[#F7B755] py-10 px-5 Announcements shadow-[6px_6px_3px_#555]">
          <h1 className="text-2xl font-bold text-white mb-3 tracking-widest uppercase text-center">Announcements</h1>
          <ul className="text-base text-black leading-relaxed mb-8 h-56 overflow-y-scroll">
            <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
            <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
            <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" ><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center py-12 px-32 bg-[#1F170A] text-white">
        <h1 className="text-3xl font-bold mb-6 tracking-widest">Get in Touch</h1>
        <p className="text-lg mb-8">
          For any inquiries or support, feel free to contact us at:
        </p>
        <a href="mailto:info@website.com" className="text-yellow-400 hover:text-yellow-500">info@website.com</a>
      </div>

      {/* Experience Section */}
      <div className="py-12 px-32 bg-[#F7B755]">
        <ExperienceList />
      </div>

      {/* Footer */}
      <footer className="bg-[#2F3DBD] text-white py-4 px-32">
        <p className="text-center text-base">&copy; 2024 Dr B R Ambedkar National Institute of Technology Jalandhar. All rights reserved.</p>
      </footer>
    </Body>
  );
}
