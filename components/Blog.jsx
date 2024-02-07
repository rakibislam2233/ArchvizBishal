import BlogCard from "./BlogCard";
import Carasoul from "./Carasoul";
const Blog = async () => {
  const blogs = [
    {
      id: 1,
      blogTitle: "Introduction to JavaScript",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-24",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 2,
      blogTitle: "Getting Started with React",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-25",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 3,
      blogTitle: "Python for Beginners",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-26",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 4,
      blogTitle: "CSS Styling Tips and Tricks",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-27",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 5,
      blogTitle: "Node.js Basics",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-28",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 6,
      blogTitle: "Diving into Machine Learning with Python",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-29",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 7,
      blogTitle: "Responsive Web Design Techniques",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-30",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 8,
      blogTitle: "MongoDB Fundamentals",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-01-31",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 9,
      blogTitle: "AngularJS in Action",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-02-01",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
    {
      id: 10,
      blogTitle: "Web Security Best Practices",
      blogDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo corporis laborum eligendi ipsa enim labore neque illum atque veniam veritatis.",
      blogPostDate: "2024-02-02",
      blogImage: "https://i.ibb.co/mRRhX8q/img10.jpg",
    },
  ];
  return (
    <div className="w-full bg-[#161616]">
      <div className="w-full max-w-screen-2xl mx-auto pt-[50px] p-5 md:p-10 text-slate-50">
      <h1 className="text-3xl font-bold uppercase text-white ">
        BLOG
      </h1>
      <div className="py-5">
        <Carasoul>
          {blogs?.map((blogs) => (
            <BlogCard key={blogs.id} blog={blogs} />
          ))}
        </Carasoul>
      </div>
    </div>
    </div>
  );
};

export default Blog;
