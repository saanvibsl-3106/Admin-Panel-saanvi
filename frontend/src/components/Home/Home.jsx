import style from 'styled-components';
import samplogo from '../../assets/img/download.png';
import nitj_banner from '../../assets/img/nitj.png';
import nitj_logo from '../../assets/img/nitj_logo2.png';
import stock1 from '../../assets/img/stock1.jpg';
import stock2 from '../../assets/img/stock2.jpg';
import stock3 from '../../assets/img/stock3.jpg';
import homeImage from '../../assets/home.png'; // Ensure this path is correct
import ExperienceList from './ExpList';

const body = style.div`
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

const krona = style.div`
  font-family: "Krona One", sans-serif;
  font-weight: 400;
  font-style: normal;
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

const nitj_banner = style.div`
  background-image: url(${nitj_banner});
`;

export default function Home() {
  return (
    <div class="flex flex-col min-h-dvh body">
        {/*  Navbar Section Start */}
        <div class="w-screen h-20 bg-[#2F3DBD] flex justify-between px-6 tracking-tight navbar text-xl text-white">
            <div class="flex align-middle h-full">
                <img src={samplogo} alt="" class="h-[89px] w-[165px]" />
            </div>
            <div class="flex justify-between w-7/12">
                <ul class="flex text-lg justify-between w-7/12">
                    <li class="py-6"><a href="">Incoming Students</a></li>
                    <li class="py-6"><a href="">Achievements</a></li>
                    <li class="py-6"><a href="">Whats New</a></li>
                    <li class="py-6"><a href="">Academics</a></li>
                </ul>
                <a href="" class="py-6 "><span class="text-[#F7B755]">Register</span>&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
                </a>
            </div>
        </div>
        {/* <!-- Navbar Section Ends --> */}

        {/* <!-- Hero --> */}
        <div class="text-and-image text-3xl flex flex-col relative w-full overflow-hidden bg-cover nitj_banner">
            <div class="text-and-image-box relative w-full h-screen object-cover" ></div>
            <div class="text-and-image-box2 bg-[#1F170A] bg-opacity-20 absolute top-[10%] right-[10%] w-[85%] p-[2%] h-auto">
              <p class="text-and-image-caption text-4xl uppercase text-white relative h-auto">welcome to<br/>Dr B R Ambedkar National Institute of Technology Jalandhar
              </p><br/><br/>
              <p class="text-and-image-text text-yellow-400">Welcome! This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at smpcs2024[at][dot]gmail[dot]com for any queries you may have.
              </p>
            </div>
        </div>
        {/* <!-- Hero Ends --> */}

        {/* <!-- SAMP Start --> */}
        <div class="container mx-auto flex items-center justify-between py-12 px-32 krona ">
            {/* <!-- Text Content --> */}
            <div class="max-w-lg">
                <h1 class="text-4xl font-bold text-blue-600 mb-6 lett tracking-widest">What Is Samp?</h1>
                <p class="text-lg text-gray-800 leading-relaxed mb-8">
                    Connect with experienced mentors to enhance your academic journey. Our program offers personalized guidance, 
                    support, and advice to help you excel in your studies and career goals. Discover resources, find a mentor, 
                    and achieve your academic ambitions with us!
                </p>
                <a href="#" class="text-lg text-orange-500 hover:text-orange-600">Read More....</a>
            </div>
        
            {/* <!-- Image Content --> */}
            <div className="max-w-xl">
                <img src={stock1} alt="Mentorship illustration" className="w-full h-auto"/>
            </div>
        </div>
        {/* <!-- SAMP Ends --> */}

        {/* <!-- Announcements --> */}
        <div className="container mx-auto flex items-center justify-between py-12 px-32 krona flex-row gap-12 md:flex-column md:gap-0">
            {/* <!-- Image Content --> */}
            <div className="max-w-xl">
                <img src={stock2} alt="Mentorship illustration" className="w-full h-auto"/>
            </div>
            {/* <!-- Text Content --> */}
            <div className="max-w-2xl bg-[#F7B755] py-10 px-5 Announcements shadow-[6px_6px_3px_#555]">
                <h1 className="text-2xl font-bold text-white mb-3 lett tracking-widest uppercase text-center">Announcements</h1>
                <ul className="text-base text-black leading-relaxed mb-8 h-56 overflow-y-scroll">
                    <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                      </svg>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
                    <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                      </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
                    <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                      </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
                    <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                      </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
                    <li><svg className="w-6 h-6 text-gray-800 dark:text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
                      </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officiis nobis expedita est, blanditiis tempore.</li>
                </ul>
            </div>   
        </div>
        {/* <!-- Announcements Ends --> */}

        {/* <!-- Glossary Section --> */}
        <div className="w-11/12 mx-auto krona">
            <h1 className="text-5xl text-[#004DFF] tracking-widest">Glossary</h1><br/>
            
        </div>
        {/* <!-- Glossary End Here --> */}
`
        {/* <!-- Queries --> */}
        <div className="container mx-auto flex items-center justify-between py-12 px-32 krona">
            {/* <!-- Text Content --> */}
            <div className="max-w-full ">
                <h1 className="text-4xl font-bold text-blue-600 mb-7 tracking-wider">Have Any Queries&nbsp;?</h1>
                <hr className="w-52 border-yellow-400 border-2" />
                <form action="post">
                    <textarea name="query" className="bg-[#D9D9D9] border border-black mt-5 rounded-md h-[187px] w-full resize-none"></textarea>
                    <button className="bg-[#FAB953] text-md rounded-xl px-3 py-2 mt-5 hover:bg-[#ffb235]">Submit</button>
                </form>
            </div>
        
            {/* <!-- Image Content --> */}
            <div className="max-w-xl">
                <img src={stock3} alt="Mentorship illustration" className="w-full h-auto" />
            </div>
        </div>
        {/* <!-- Queries Ends Here--> */}

        <footer className="w-screen bg-[#283D72] h-auto krona">
            <div className="flex flex-col md:flex-row justify-around gap-9 my-7">
                <img src={nitj_logo} alt="" className="h-[280px]" />
                <div>
                    <div>
                        <p className="text-2xl text-[#FAB953]">Social</p>
                        <hr className="w-12 bg-white h-1 rounded my-3" />
                    </div>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div>
                    <div>
                        <p className="text-2xl text-[#FAB953]">Contact Us</p>
                        <hr className="w-12 bg-white h-1 rounded my-3" />
                    </div>
                    <div className="text-md mb-5 text-center">
                        <p className="text-white">FACULTY CO-ORDINATOR</p>
                        <p className="text-[#FAB953]">+91 8776468394</p>
                    </div>
                    <div className="text-md mb-5 text-center">
                        <p className="text-white">STUDENT CO-ORDINATOR</p>
                        <p className="text-[#FAB953]">+91 8776468394</p>
                    </div>
                </div>
            </div>
        </footer>
        </div>  
  );
}

{/* <>
    <div className="flex items-center justify-between min-h-screen bg-green-50">
      <div className="flex-shrink-0 w-1/2 p-8">
        <img
          src={homeImage}
          alt="Welcome"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
        <p className="text-gray-700">We are delighted to have you here. Explore our site to find various content and links to different sections.</p>
      </div>
      
    </div>
    <ExperienceList/>
    </> */}