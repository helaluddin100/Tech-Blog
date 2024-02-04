import React from 'react'
import AppLayout from '../component/Layout/Layout';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta charset="UTF-8" />
        <title>About - Bits Of Dev</title>

        {/* <!-- Open Graph meta tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="About - Bits Of Dev" />
        <meta property="og:description" content="Learn more about Bit Of Dev. Its purpose, author, topics and more." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bitsofdev.com/about" />
        <meta property="og:site_name" content="Bit Of Dev" />
        <meta property="article:tag" content="Tech Blogs" />
        <meta property="article:tag" content="Technology Updates" />
        <meta property="article:section" content="Resources" />
        <meta property="og:image:secure_url" content="/assets/imgs/meta-img/about-bits-of-dev.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="About - Bits Of Dev" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://bitsofdev.com/about" />

        {/* <!-- Keywords --> */}
        <meta name="keywords" content="technology news, software development, programming tutorials, coding tips, web development, mobile app development, cybersecurity, artificial intelligence, machine learning, data science, cloud computing, tech reviews, gadget reviews, internet of things (IoT), tech trends, digital marketing strategies, SEO best practices, social media marketing, tech innovation, startup tips, tech events, coding languages (e.g., JavaScript, Python, Java), software architecture, tech careers, tech industry updates" />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image" href="/favicon.svg" />
      </Head>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-1"></div>
            <div className="col-xl-10 col-lg-12">
              <div className="about-header pt-30 text-center mb-100">
                <h2 className=" color-white mb-10">About Us</h2>
                <p>
                  Welcome to Bits of Dev – a hub for tech enthusiasts, creators,
                  and innovators!
                </p>
              </div>
              <div className="about-us-content mt-40">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <div className="about-us-left">
                      <h4 className=" color-white mb-10">Our Story</h4>
                      <p>
                        At Bits of Dev, we believe in the power of technology to
                        shape the future. Founded by a team of passionate
                        developers and tech enthusiasts, our journey began with
                        a simple idea – to create a space where developers,
                        coders, and anyone interested in technology could come
                        together to learn, share, and collaborate.
                      </p>
                      <h4 className=" color-white mb-10 mt-30">Our Mission</h4>
                      <p>
                        Our mission is to foster a vibrant community where ideas
                        flourish, knowledge is shared, and innovation knows no
                        bounds. Whether you're a seasoned developer or just
                        taking your first steps into the world of coding, Bits
                        of Dev is your platform to explore, experiment, and
                        elevate your tech skills.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-us-right">
                      <img src="/assets/imgs/page/about/about-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
AboutPage.layout = AppLayout;
export default AboutPage