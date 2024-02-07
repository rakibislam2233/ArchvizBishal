import bannerImage from "@/assets/image/img10.jpg";
import TypeWriter from "./TypeWriter";
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="w-full  md:h-screen bg-[#000000] bg-blend-multiply bg-opacity-90 px-3 text-white"
      style={bannerStyle}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-5">
        <h1 className="text-3xl font-bold text-center py-5">Archviz Bishal</h1>
        <div>
          <h1>arcbishal@gmail.com</h1>
        </div>
      </div>
      <div className="w-full h-full max-w-screen-xl flex justify-center items-center  mx-auto py-32">
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-[5px]">
            {`Hey, I'm Bishal`}
          </h1>
         <TypeWriter/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
