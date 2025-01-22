import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { NavbarMenu } from "../mockData/data";

function ResponsiveMenu({ open, setOpen }) {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div
            ref={menuRef}
            className="text-xl font-semibold uppercase bg-gradient-to-r from-slate-500 via-gray-600 to-neutral-600 text-white py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <li className="relative group" key={item.id}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={() => setOpen(false)} // Close the menu on click
                  >
                    {item.title}
                  </Link>
                  <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
