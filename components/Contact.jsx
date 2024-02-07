import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10 text-slate-50">
      <h1 className="text-3xl font-bold uppercase text-white ">CONTACT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 text-gray-400">
        <div>
          <h1 className="text-xl font-bold">Quick Contact Form</h1>
          <form className="space-y-4 py-5">
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-5 py-3 bg-[#161616] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-[#161616] focus:outline-none"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your phone number"
                className="w-full px-5 py-3 bg-[#161616] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your address"
                className="w-full px-5 py-3 bg-[#161616] focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="w-full px-5 py-3 bg-[#161616] focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="px-10 py-2 bg-[#161616] font-semibold">
              Send
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col  gap-10">
          <div className="flex justify-between items-center">
            <div className="w-full space-y-2">
              <h1 className="text-xl font-bold">Phone</h1>
              <p>+8801913101179</p>
            </div>
            <div className="w-full space-y-2">
              <h1 className="text-xl font-bold">Social Handle</h1>
              <div className="w-full flex flex-wrap gap-2">
                <div className="w-8 h-8 shadow-md :bg-white  hover:bg-white  text-white hover:text-gray-900 transition-all duration-500 mx-auto rounded-full border border-white flex justify-center items-center hover:scale-110">
                  <Link
                    href={"https://www.facebook.com/moniruzzamanbishal.page"}
                    target="_blank"
                  >
                    <SlSocialFacebook className="w-4 h-4" />
                  </Link>
                </div>
                <div className="w-8 h-8 shadow-md hover:bg-white text-white hover:text-gray-900 transition-all duration-500 mx-auto rounded-full border border-white flex justify-center items-center hover:scale-110">
                  <Link
                    href={"https://www.instagram.com/moniruzzamanbishal/"}
                    target="_blank"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </Link>
                </div>
                <div className="w-8 h-8 shadow-md  hover:bg-white text-white hover:text-gray-900 transition-all duration-500 mx-auto rounded-full border border-white flex justify-center items-center hover:scale-110">
                  <Link
                    href={
                      "https://www.youtube.com/channel/UCF_2p4h1A2wkCqzQHWpC4iw"
                    }
                    target="_blank"
                  >
                    <FiYoutube className="w-4 h-4" />
                  </Link>
                </div>
                <div className="w-8 h-8 shadow-md  hover:bg-white text-white hover:text-gray-900 transition-all duration-500 mx-auto rounded-full border border-white flex justify-center items-center hover:scale-110">
                  <Link
                    href={"https://www.linkedin.com/in/moniruzzamanbishal/"}
                    target="_blank"
                  >
                    <CiLinkedin className="w-4 h-4" />
                  </Link>
                </div>
                <div className="w-8 h-8 shadow-md  hover:bg-white text-white hover:text-gray-900 transition-all duration-500 mx-auto rounded-full border border-white flex justify-center items-center hover:scale-110">
                  <Link
                    href={"https://twitter.com/moniruzzamanbi"}
                    target="_blank"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-full space-y-2">
              <h1 className="text-xl font-bold">Email</h1>
              <p>arcbishal@gmail.com</p>
            </div>
            <div className="w-full space-y-2">
              <h1 className="text-xl font-bold">Address</h1>
              <p>Thakurgaon Sadar Thakurgaon, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
