import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../src/component/Button";
import Banner from "../src/component/layout/main/Banner";
import BestSlide from "../src/component/layout/main/notice_section/best_product/BestSlide";
import Notice from "../src/component/layout/main/notice_section/Notice";

const Home: NextPage = () => {
  return (
    <>
      <Banner></Banner>
      <Notice></Notice>
      <BestSlide />
    </>
  );
};

export default Home;
