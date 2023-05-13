import Head from "next/head";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main
        className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
        overflow-x-hidden overflow-y-scroll"
      >
        <Navbar />
      </main>
    </>
  );
}
