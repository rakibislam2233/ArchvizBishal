import { MdOutlineArrowRightAlt, MdOutlineDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { blogTitle, blogDescription, blogPostDate, blogImage } = blog;
  return (
    <div className="px-5">
      <div className="w-full h-full  text-white rounded group">
        <div className="relative">
          <img className="w-full h-64 cursor-pointer" src={blogImage} alt="" />
          <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-950 group-hover:bg-opacity-60 scale-0 group-hover:scale-100 duration-300">
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 p-3">
          <div className="flex items-center gap-1">
            <IoPersonOutline className="w-4 h-4" />
            By Bishal
          </div>
          <div className="flex items-center gap-1">
            <AiFillLike className="w-4 h-4" />
            148 like
          </div>
          <div className="flex items-center gap-1">
            <FaCommentDots className="w-4 h-4" />
            23 Comment
          </div>
        </div>
        <div className="px-3">
          <h1 className="text-2xl font-semibold">{blogTitle}</h1>
          <p className="my-2 text-lg">{blogDescription}</p>
          <hr className="mt-3 mb-5" />
          <div className="flex justify-between items-center">
            <h1 className="flex items-center gap-2">
              <MdOutlineDateRange className="w-6 h-6" /> 26 Jan 2023
            </h1>
            <button className="flex items-center gap-2">
              Read More <MdOutlineArrowRightAlt className="w-6 h-6" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
