import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import Subscriber from "../../pages/component/Subscriber";
import Fetcher from "../../pages/api/Fetcher";
// import Fetcher from "../api/Fetcher";
function Footer() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  // const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: popularCategories, error } = useSWR(
    `${baseuri}/api/popular-categories`,
    Fetcher
  );

  if (error) {
    return <h1>Failed to load</h1>;
  }

  // if (!popularCategories) {
  //   return <div>Loading...</div>;
  // }
  if (!popularCategories) {
    return (
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img
              className="mb-10"
              src="/assets/imgs/template/favicon.svg"
              alt="Bits Of Dev"
            />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row">
              <div className="col-lg-4 mb-30">
                <Link href={'/'}>
                  <div className="wow animate__animated animate__fadeInUp" >
                    <img
                      className="logo-night"
                      src="/assets/imgs/template/logo.svg"
                      alt="Bits Of Dev"
                    />
                    <img
                      className="d-none logo-day"
                      alt="Bits Of Dev"
                      src="/assets/imgs/template/logo-day.svg"
                    />
                  </div>
                </Link>
                <h6 className="color-white mb-5 mt-15 wow animate__animated animate__fadeInUp">
                  Address
                </h6>
                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  123 Main Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="col-lg-4 mb-30">

                <div className="row">
                  <div className="col-6">
                    <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                      Categories
                    </h6>
                    <ul className="menu-footer">
                      {
                        popularCategories.map((category) => (

                          <Link href={`/category/${category.slug}`} key={category.id}>
                            <li className="wow animate__animated animate__fadeInUp" >
                              <a className="color-gray-500">
                                {category.name}
                              </a>
                            </li>
                          </Link>
                        ))
                      }


                      {/* <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="blog-archive.html">
                          Business
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="blog-archive.html">
                          Adventure
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="blog-archive.html">
                          Canada
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="blog-archive.html">
                          America
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="blog-archive.html">
                          Curiosity
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-6">
                    <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                      Pages
                    </h6>
                    <ul className="menu-footer">
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="/contact-us">
                          Contact Us
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="/about">
                          About
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="/terms-of-service">
                          Terms of service
                        </a>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>

                      <li className="wow animate__animated animate__fadeInUp">
                        <a className="color-gray-500" href="/cookie-policy">
                          Cookie Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                  Newsletter
                </h4>
                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">
                  Sign up to be first to receive the latest stories inspiring
                  us, case studies, and industry news.
                </p>
                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                  <Subscriber />
                </div>
              </div>
            </div>
            <div className="footer-bottom border-gray-800">
              <div className="row">
                <div className="col-lg-5 text-center text-lg-start">
                  <p className="text-base color-white wow animate__animated animate__fadeIn">
                    © Created by
                    <a
                      className="copyright"
                      href="https://bitsofdev.com"
                      target="_blank"
                    >
                      {' '} Bitsofdev.com
                    </a>
                  </p>
                </div>
                <div className="col-lg-7 text-center text-lg-end">
                  <div className="box-socials">
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".0s"
                    >
                      <a
                        className="icon-socials icon-twitter color-gray-500"
                        href="https://twitter.com/"
                      >
                        Twitter
                      </a>
                    </div>
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <a
                        className="icon-socials icon-linked color-gray-500"
                        href="https://www.linkedin.com/"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div
                      className="d-inline-block wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <a
                        className="icon-socials icon-insta color-gray-500"
                        href="https://www.instagram.com/"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
