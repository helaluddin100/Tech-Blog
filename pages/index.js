import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Hero from "./component/hero";
import MostPopular from "./component/MostPopular";
import TrendingTopics from "./component/TrendingTopics";
import RecentPosts from "./component/RecentPosts";

function Home() {
  return (
    <>
      <Head>
        <title>NFT Website Development Services |nft constructer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <main className="main">
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1"></div>
              <div className="col-xl-10 col-lg-12">
                <Hero />
                <MostPopular />

                {/* <TrendingTopics /> */}
                <RecentPosts />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
