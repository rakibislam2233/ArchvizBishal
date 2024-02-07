import scanNow from "@/assets/image/qr-code.png";
import Image from "next/image";
import Link from "next/link";
const Protfolio = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10 text-slate-50">
    <h1 className="text-3xl font-bold uppercase text-white ">PROTFOLIO</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 text-gray-400">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-xl">
          If you scan this QR code and click here you will enter my BEHANCE
          account
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Image width={200} height={200} src={scanNow} alt="scan now" />
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={"https://www.behance.net/moniruzzamanbishal"}
          target="_blank"
        >
          <button className="relative px-16 py-3 border border-gray-700 bg-transparent font-semibold text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
            Click Here
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Protfolio;
