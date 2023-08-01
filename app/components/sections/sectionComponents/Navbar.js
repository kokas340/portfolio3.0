const Navbar = () => {
    return (
      <nav className=" flex justify-between items-center  text-white p-4">
        <div className="flex items-center ml-12">
          <a className="text-lg font-semibold mr-4" href="#intro">Jack Spinola</a>
        </div>
        {/* Show the links on screens larger than sm */}
        <div className="hidden sm:flex space-x-6 mr-12">
          <a href="#about" className="hover:text-gray-300 mx-2 transition-transform transform hover:scale-105">About</a>
          <a href="#education" className="hover:text-gray-300 mx-4 transition-transform transform hover:scale-105">Education</a>
          <a href="#experience" className="hover:text-gray-300 mx-4 transition-transform transform hover:scale-105">Experience</a>
          <a href="#projects" className="hover:text-gray-300 mx-2 transition-transform transform hover:scale-105">Projects</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;