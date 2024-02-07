import bishalImage from "@/assets/image/bishal.png";
const About = () => {
  return (
    <div className="bg-[#161616]">
      <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10">
      <h1 className="text-3xl font-bold uppercase text-white ">ABOUT ME</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 text-gray-400">
        <div>
          <h1 className="text-xl pt-5 mb-10">
            {`Hey there, I'm Bishal. Usually, my full name is MD. Moniruzzaman
            Bishal. I work with freelance Architectural Design and Visualization
            sector. I have worked on many projects before. I came to work
            independently in the online world. I do not underestimate any work.
            hopefully, If I get a project, I will highlight that work in front
            of everyone. I am passionate about my design and ready to take on
            new projects! I'm here to get global exposure and would like to
            contribute more to our creative community.`}
          </h1>
        </div>
        <div className="w-[300px] h-[300px] mx-auto ring-4 rounded-full ring-gray-500 lg:-mt-10 overflow-hidden">
          <img
            className="w-full h-full mx-auto rounded-full hover:scale-125 transition-all duration-300 cursor-pointer"
            src={bishalImage.src}
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
