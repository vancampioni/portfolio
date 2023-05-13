import Image from "next/image";
import Link from "next/link";

import { logo } from "@/public";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div
      className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50
      bg-bodyColor px-4"
    >
      <div
        className="max-w-container h-full mx-auto py-1 font-title flex 
        items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-14" src={logo} alt="logo" />
        </motion.div>
        <div>
          <ul className="flex text-[16px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textPink cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textPink cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>

            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textPink cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Experience
              </motion.li>
            </Link>

            <Link
              href="#project"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textPink cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Project
              </motion.li>
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textPink cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
