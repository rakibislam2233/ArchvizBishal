import Architectural from "@/assets/Service/Architectural 2d.png";
import ExteriorDesign from "@/assets/Service/Exterior.png";
import Interior from "@/assets/Service/Interior.png";
import Landscape from "@/assets/Service/Landscape.png";
import Image from "next/image";
const Service = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10 text-slate-50">
      <h1 className="text-3xl font-bold uppercase text-white ">MY SERVICE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        <div>
          <div className="w-full min-h-72 border border-gray-700 p-5 space-y-2">
            <Image
              width={100}
              height={100}
              src={Architectural}
              alt="Architectural"
            />
            <h1 className="text-3xl font-bold">Architectural 2D Plan</h1>
            <p className="text-xl">
              Producing accurate floor plans, sections, and elevation 2d
              drawings for residential and commercial projects.
            </p>
          </div>
        </div>
        <div>
          <div className="w-full min-h-72 border border-gray-700 p-5 space-y-2">
            <Image
              width={100}
              height={100}
              src={ExteriorDesign}
              alt="ExteriorDesign"
            />
            <h1 className="text-3xl font-bold">Exterior Design</h1>
            <p className="text-xl">
              There can be different types of exterior designs, as there will be
              many types of designs that mainly carry the variations of
              different countries and are made with different sectors in mind.
            </p>
          </div>
        </div>
        <div>
          <div className="w-full min-h-72 border border-gray-700 p-5 space-y-2">
            <Image width={100} height={100} src={Interior} alt="Interior" />
            <h1 className="text-3xl font-bold">Interior Design</h1>
            <p className="text-xl">
              In the Interior design sector, I do different types of designs
              such as bedroom design, living room design, dining room design,
              kitchen room design even you can do any kind of room interior
              design.
            </p>
          </div>
        </div>
        <div>
          <div className="w-full min-h-72 border border-gray-700 p-5 space-y-2">
            <Image width={100} height={100} src={Landscape} alt="Landscape" />
            <h1 className="text-3xl font-bold">Landscape Design</h1>
            <p className="text-xl">
              Basically the landscape design will be based on the exterior
              design of your home and considering the different design of the
              different sectors of your residential or commercial project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
