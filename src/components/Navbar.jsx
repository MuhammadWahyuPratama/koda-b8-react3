import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        
        <div className="w-20 mb-4 md:mb-0">
          <Link to="/">
            <img
              src="/assets/logo2.png"
              alt="Logo"
              className="w-full object-contain"
            />
          </Link>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-6">
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-10 text-base font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About Me
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="px-6 py-2 rounded-xl bg-black text-white hover:bg-orange-500 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
