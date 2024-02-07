import autoCad from "@/assets/Sofawer Skill/Autocad.png";
import max from "@/assets/Sofawer Skill/3ds max.png";
import SketchUp from "@/assets/Sofawer Skill/SketchUp.png";
import VRay from "@/assets/Sofawer Skill/v-ray.png";
import lumion from "@/assets/Sofawer Skill/Lumion.png";
import Enscape from "@/assets/Sofawer Skill/enscap.png";
import Illustrator from "@/assets/Sofawer Skill/adobe illlustrator.png";
import Photoshop from "@/assets/Sofawer Skill/Photoshop.png";
import Filmora from "@/assets/Sofawer Skill/Wondarshia Filmora.png";
import Google from "@/assets/Sofawer Skill/Google.png";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="w-full bg-[#161616] ">
      <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10 text-slate-50">
        <h1 className="text-3xl font-bold uppercase text-white ">
          SKILL OF SOFTWARE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-5 py-10">
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={50}
              height={50}
              src={autoCad}
              className="m-auto"
              alt="autoCad"
            />
            <h1 className="text-2xl font-semibold text-center">AutoCAD</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={70}
              height={70}
              src={max}
              className="m-auto"
              alt="max"
            />
            <h1 className="text-2xl font-semibold text-center">3ds Max</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={70}
              height={70}
              src={SketchUp}
              className="m-auto"
              alt="autoCad"
            />
            <h1 className="text-2xl font-semibold text-center">SketchUp</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={50}
              height={50}
              src={VRay}
              className="m-auto"
              alt="VRay"
            />
            <h1 className="text-2xl font-semibold text-center">V-Ray</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={150}
              height={150}
              src={lumion}
              className="mx-auto"
              alt="lumion "
            />
            <h1 className="text-2xl font-semibold text-center">Lumion</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={70}
              height={70}
              src={Enscape}
              className="mx-auto"
              alt="Enscape"
            />
            <h1 className="text-2xl font-semibold text-center">Enscape</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={60}
              height={60}
              src={Illustrator}
              className="mx-auto"
              alt="Illustrator"
            />
            <h1 className="text-2xl font-semibold text-center">
              Adobe Illustrator
            </h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={60}
              height={60}
              src={Photoshop}
              className="mx-auto"
              alt="Photoshop"
            />
            <h1 className="text-2xl font-semibold text-center">
              Adobe Photoshop
            </h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={50}
              height={50}
              src={Filmora}
              className="mx-auto"
              alt="Filmora"
            />
            <h1 className="text-2xl font-semibold text-center">Filmora</h1>
          </div>
          <div className="w-full border flex flex-col justify-between border-gray-700 p-5 space-y-3">
            <Image
              width={50}
              height={50}
              src={Google}
              className="mx-auto"
              alt="Google"
            />
            <h1 className="text-2xl font-semibold text-center">
              Docs & sheets
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
