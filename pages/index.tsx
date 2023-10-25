import Head from "next/head";

import Navbar from "@/components/Navbar";
import { LeftSide } from "@/components/LeftSide";
import { logo } from "@/public";

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
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div>
            <LeftSide />
          </div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
