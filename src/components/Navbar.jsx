import { useState, useEffect } from "react";
import { NavbarMenu } from "../mockData/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="bg-gradient-to-r md:from-slate-500 md:via-gray-600 md:to-neutral-600 md:w-full md:rounded-2xl md:shadow-2xl from-green-200 via-blue-200 to-purple-200">
        <div className="container flex justify-between items-center py-8">
          <div className="hidden md:flex justify-center w-full">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((item) => {
                return (
                  <li className="relative group" key={item.id}>
                    <Link
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className="block w-full h-full py-1 px-3 font-semibold cursor-pointer"
                    >
                      {item.title}
                    </Link>
                    <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default NavBar;
