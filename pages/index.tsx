import Head from "next/head";

import Navbar from "@/components/Navbar";
import { LeftSide } from "@/components/LeftSide";
import { RightSide } from "@/components/RightSide";
import { motion } from "framer-motion"
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanessa Campioni</title>
        <link rel="icon" href={"/logo.ico"} />
      </Head>
      <main
        className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
        overflow-x-hidden overflow-y-scroll"
      >
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden h-full w-32 xl:inline-flex fixed left-0 bottom-0">
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
          </div>
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden h-full w-32 xl:inline-flex fixed right-0 bottom-0">
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
