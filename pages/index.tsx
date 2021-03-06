import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Banner from "../src/component/layout/main/Banner";

import Notice from "../src/component/layout/main/notice_section/Notice";

const Home: NextPage = () => {
  return (
    <>
      <Banner></Banner>
      <Notice></Notice>
    </>
  );
};

export default Home;
