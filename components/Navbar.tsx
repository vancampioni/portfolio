import Link from "next/link";

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
          {/* <Image className="w-14" src={logo} alt="logo" /> */}
          <span className="flex text-xl font-logoFont">
            <strong className="text-textPink">vanessa</strong>
            <p>campioni</p>
          </span>
        </motion.div>

        <div className="max-[768px]:hidden">
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

            <Link href={"https://drive.google.com/file/d/1gpZIngJMT40rYTIMd61v0rp_gnTarbLz/view?usp=drive_link"} target="_blank">
              <motion.button
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className="px-4 py-2 rounded-md text-textPink text-[13px] border border-textPink
                hover:text-white hover:bg-textPink duration-300"
                
              >
                Resume
              </motion.button>
            </Link>
          </ul>
        </div>

        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textPink
        cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-2 transition-all
          ease-in-out duration-300 "></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all
          ease-in-out duration-300 "></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-2 transition-all
          ease-in-out duration-300 "></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
