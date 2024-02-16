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
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta charset="UTF-8" />
        <title>Bits of dev - Every Day, Learn Something New</title>

        {/* <!-- Open Graph meta tags --> */}
        
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Bits of dev - Every Day, Learn Something New" />
        <meta name="title" content="Bits of dev - Every Day, Learn Something New" />
        <meta name="og:description" content="Learn new things every day, outsmart others, and value ideas that matter. Ideas, thoughts, stories, and resources for lifelong learners." />
        <meta property="og:description" content="Learn new things every day, outsmart others, and value ideas that matter. Ideas, thoughts, stories, and resources for lifelong learners." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bitsofdev.com" />
        <meta property="og:site_name" content="Bit Of Dev" />
        <meta property="article:tag" content="Tech Blogs" />
        <meta property="article:tag" content="Technology Updates" />
        <meta property="article:section" content="Resources" />
        <meta property="og:image:secure_url" content="/assets/imgs/meta-img/bits-of-dev.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bits of dev - Every Day, Learn Something New" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://bitsofdev.com" />

        {/* <!-- Keywords --> */}
        <meta name="keywords" content="technology news, software development, programming tutorials, coding tips, web development, mobile app development, cybersecurity, artificial intelligence, machine learning, data science, cloud computing, tech reviews, gadget reviews, internet of things (IoT), tech trends, digital marketing strategies, SEO best practices, social media marketing, tech innovation, startup tips, tech events, coding languages (e.g., JavaScript, Python, Java), software architecture, tech careers, tech industry updates" />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image" href="/favicon.png" />
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
