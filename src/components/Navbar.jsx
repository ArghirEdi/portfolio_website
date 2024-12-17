import { useState } from "react";
import { NavbarMenu } from "../mockData/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          <div className="hidden md:flex justify-center w-full">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href="{item.link}"
                      className="relative group inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                      <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
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
      <ResponsiveMenu open={open} />
    </>
  );
}

export default NavBar;
