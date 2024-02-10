import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";


export default function Home() {
  return (
    <>
      <Head>
      <title>Hipskör</title>
      </Head>
      <Navbar/>
    </>
  );
}
