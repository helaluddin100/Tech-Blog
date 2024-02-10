import Link from "next/link";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fetcher from "../../pages/api/Fetcher";
import SearchPopularTags from "../../pages/component/SearchPopularTags";


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


  // ==============toggle mobile menu =========

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMobile = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };


  // =========== toggle Mobile Submenu ============
  const [toggleMobileSubMenu, setToggleMobileSubMenu] = useState(false);

  const toggleSubMobile = () => {
    setToggleMobileSubMenu(!toggleMobileSubMenu);
  };
  // =============== Category ===========
  const { data: allCategoryData, error: allCategoryError, isValidating } = useSWR(
    `${baseuri}/api/allcategory`,
    Fetcher
  );

  // Check if data is still being fetched
  if (isValidating) {
    return (
      <div className="preloader d-flex align-items-center justify-content-center">
        {/* ... Your preloader JSX ... */}
      </div>
    );
  }
  if (allCategoryError) {
    return <h1>failed to load</h1>;
  }
  if (!allCategoryData) {
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
        className={`header sticky-bar bg-gray-900 ${isNavbarFixed ? "stick bg-gray-850" : ""
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
                  />-
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
                      <a className="color-gray-500">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Allpost"}>
                      <a className="color-gray-500" href="#">
                        All Blogs
                      </a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <a className="color-gray-500" href="/#">Category {" "}</a>
                    <ul className="sub-menu two-col">
                      {
                        allCategoryData.map((category) => (
                          <li key={category.id}>
                            <Link href={`/category/${category.slug}`}>
                              <a className="color-gray-500">{category.name}</a>
                            </Link>
                          </li>
                        ))
                      }

                    </ul>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>
                      <a className="color-gray-500">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${toggleMobileMenu ? "burger-close" : ""
                  }`}
                onClick={toggleMobile}
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <SearchPopularTags />
          </div>
        </div>
      </header>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${toggleMobileMenu ? "sidebar-visible" : ""
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
                    <li  onClick={toggleMobile}>
                      <Link href={"/"}>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li onClick={toggleMobile}>
                      <Link href={"/about"} >
                        <a className="color-gray-500">About Us</a>
                      </Link>
                    </li>
                    <li onClick={toggleMobile}>
                      <Link href={"/Allpost"} >
                        <a className="color-gray-500" href="#">
                          All Blogs
                        </a>
                      </Link>
                    </li>
                    <li onClick={() => toggleSubMobile()} className={`${toggleMobileSubMenu ? "has-children active" : "has-children"}`}>
                      <span className="menu-expand" >
                        <i className="fi-rr-caret-down"></i>
                      </span><a>Category</a>
                      <ul className={`${toggleMobileSubMenu ? "sub-menu d-block" : "d-none"}`}>
                        {
                          allCategoryData.map((category) => (
                            <li key={category.id} onClick={toggleMobile}>
                              <Link href={`/category/${category.slug}`} >
                                <a className="color-gray-500">{category.name}</a>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>

                    </li>


                    <li  onClick={toggleMobile}>
                      <Link href={"/contact-us"}>
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
