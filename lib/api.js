export const getBlogs = async () => {
  const url = "../utils/data/blogs.json";
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
