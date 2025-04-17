import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-[0.2px] bg-gray-300"></div>
      {/* <hr /> */}
      <section class="bg-blue-50 pt-7 pb-6">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Never Miss a Post!
          </h2>
          <p class="text-gray-600 mb-6">
            Join our newsletter to stay updated with the latest insights, tutorials, and trends directly in your inbox.
          </p>
          <form class="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <footer className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Technology</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  MangoDB
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Express JS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  React JS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Node JS
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Devotinal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Sports
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">The Project</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Creaters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  Creater Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-[23px] font-semibold hidden md:flex">
          Blogo<span className="text-blue-500 font-bold">Sphare</span>
        </div>
        <div className="text-gray-400 text-[14px] hidden md:flex">
          <p>&copy; 2025 Suraj Maurya. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaLaptopCode size={22} />
          </a>
          <a href="#">
            <IoBookSharp size={22} />
          </a>

          <a href="#">
            <FaHome size={22} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";
// import { IoBookSharp } from "react-icons/io5";
// import { FaLaptopCode } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";

// function Footer() {
//     return (
//         <>
//             <div className="h-0.5 bg-gray-400"></div>
//             <footer className="py-12">
//                 <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//                     <div className=" flex flex-col items-center justify-center">
//                         <div className="flex space-x-4 text-slate-900">
//                             <a><FaLaptopCode size={24} className="hover:scale-125 transition-all duration-100 ease-in" /></a>
//                             <a><IoBookSharp size={24} className="hover:scale-125 transition-all duration-100 ease-in" /></a>
//                             <a><FaHome size={24} className="hover:scale-125 transition-all duration-100 ease-in" /></a>
//                         </div>
//                         <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//                             <p className="text-slate-950">
//                                 &copy; 2025 Suraj Maurya. All Right Reserved.
//                             </p>
//                             <p className=" text-slate-950">Supportive Partner ❤️ Muskan </p>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// }

// export default Footer;