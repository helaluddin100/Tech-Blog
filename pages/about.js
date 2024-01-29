import React from 'react'
import AppLayout from '../component/Layout/Layout';

const AboutPage = () => {
  return (
    <>
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