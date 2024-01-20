import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Header() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =============toggle search box =============================
  const [formSearchVisible, setFormSearchVisible] = useState(false);

  const toggleFormSearch = () => {
    setFormSearchVisible(!formSearchVisible);
  };

  // ==============toggle mobile menu =========

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMobile = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  // =========search function ===========
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    setFormSearchVisible(!formSearchVisible);
    e.preventDefault();
    router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    setQuery("");
  };

  // ============popular tag ===========
  const { data: popularTags, error } = useSWR(
    `${baseuri}/api/popular-tags`,
    fetcher
  );

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!popularTags) {
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
      <header
        className={`header sticky-bar bg-gray-900 ${
          isNavbarFixed ? "stick bg-gray-850" : ""
        }`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link href={"/"}>
                <a className="d-flex">
                  <img
                    className="logo-night"
                    alt="Bits Of Dev"
                    src="/assets/imgs/template/logo.svg"
                  />
                  <img
                    className="d-none logo-day"
                    alt="Bits Of Dev"
                    src="/assets/imgs/template/logo-day.svg"
                  />
                </a>
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link href={"/"}>
                      <a className="active">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"}>
                      <a className="color-gray-500">About Me</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category"}>
                      <a className="color-gray-500" href="#">
                        Category
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>
                      <a className="color-gray-500">Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  toggleMobileMenu ? "burger-close" : ""
                }`}
                onClick={toggleMobile}
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-right text-end">
              <a
                className="btn btn-search"
                href="#"
                onClick={toggleFormSearch}
              ></a>
              <div
                className="form-search p-20"
                style={{ display: formSearchVisible ? "block" : "none" }}
              >
                <form onSubmit={handleSearch}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <input className="btn-search-2" type="submit" value="" />
                </form>
                <div className="popular-keywords text-start mt-20">
                  <p className="mb-10 color-white">Popular tags:</p>
                  {popularTags.map((tag) => (
                    <Link key={tag.slug} href={`/tag/${tag.slug}`}>
                      <a className="color-gray-600 mr-10 font-xs">
                        #{tag.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              {/* <a
                className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
                href="page-login.html"
              >
                Subscribe
              </a> */}
            </div>
          </div>
        </div>
      </header>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${
          toggleMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800">
              <Link href={"/"}>
                <a className="d-flex">
                  <img
                    className="logo-night"
                    alt="Bits Of Dev"
                    src="/assets/imgs/template/logo.svg"
                  />
                  <img
                    className="d-none logo-day"
                    alt="Bits Of Dev"
                    src="/assets/imgs/template/logo-day.svg"
                  />
                </a>
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link href={"/"}>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/category"}>
                        <a>Category</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
