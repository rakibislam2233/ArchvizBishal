const Button = ({ children, px, py }) => {
  return (
    <button
      className={`relative px-${px} py-${py} border border-gray-700 bg-transparent font-semibold text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100`}
    >
      {children}
    </button>
  );
};

export default Button;
