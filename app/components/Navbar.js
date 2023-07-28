const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex items-center ml-12">
        <span className="text-lg font-semibold mr-4">Jack Spinola</span>
      </div>
      {/* Show the links on screens larger than sm */}
      <div className="hidden sm:flex space-x-6 mr-12">
        <a href="#about" className="hover:text-gray-300 mx-2 transition-transform transform hover:scale-105">About</a>
        <a href="#work" className="hover:text-gray-300 mx-4 transition-transform transform hover:scale-105">Work</a>
        <a href="#contact" className="hover:text-gray-300 mx-2 transition-transform transform hover:scale-105">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
