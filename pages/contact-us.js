        message:'message'
import React, { useState } from 'react'
import AppLayout from '../component/Layout/Layout';
import axios from 'axios';
import Head from 'next/head';

const ContactUsPage = () => {
    const [inputField, setInputField] = useState({
        full_name: "",
        email: "",
        subject: "",
        message: '',
    });

    const inputsHandler = (e) => {
        e.persist();
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value,
        });
    };

    const allInfoSubmit = (e) => {
        e.preventDefault();
        const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

        // Include the CSRF token in the request
        const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

        axios.post(`${baseuri}/api/contact/sent`, { ...inputField, _token: csrfToken })
            .then((res) => {
                if (res.data.status === 200) {
                    setShowPopup(true);
                    setInputField({
                        full_name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    alert("Unable to send the message. Please check and fill all required fields.");
                }
            })
            .catch((error) => {
                console.error("Error submitting the form:", error);
                alert("An error occurred while submitting the form. Please try again later.");
            });
    };

    return (
        <>
      
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta charset="UTF-8" />
        <title>Contact Us - Bits Of Dev</title>

        {/* <!-- Open Graph meta tags --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Contact Us - Bits Of Dev" />
        <meta name="title" content="Contact Us - Bits Of Dev" />
        <meta name="og:description" content="Learn more Contact Us Bit Of Dev. Its purpose, author, topics and more." />
        <meta property="og:description" content="Learn more Contact Us Bit Of Dev. Its purpose, author, topics and more." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bitsofdev.com/Allpost" />
        <meta property="og:site_name" content="Bits Of Dev" />
        <meta property="article:tag" content="technology news" />
        <meta property="article:section" content="Resources" />
        <meta property="og:image" content="/assets/imgs/meta-img/contact-us-bits-of-dev.jpg" />
        <meta property="image" content="/assets/imgs/meta-img/contact-us-bits-of-dev.jpg" />
        <meta property="og:image:secure_url" content="/assets/imgs/meta-img/contact-us-bits-of-dev.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Us - Bits Of Dev" />

        {/* <!-- Canonical URL --> */}
        <link rel="canonical" href="https://bitsofdev.com/Allpost" />

        {/* <!-- Keywords --> */}
        <meta name="keywords" content="technology news, software development, programming tutorials, coding tips, web development, mobile app development, cybersecurity, artificial intelligence, machine learning, data science, cloud computing, tech reviews, gadget reviews, internet of things (IoT), tech trends, digital marketing strategies, SEO best practices, social media marketing, tech innovation, startup tips, tech events, coding languages (e.g., JavaScript, Python, Java), software architecture, tech careers, tech industry updates" />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image" href="/favicon.png" />
      </Head>
            <div className="contact-us">
                <div className="container">
                    <div className="row pt-35">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="contact-us-wrapper">
                                <div className="contact-us-header">
                                    <h1>CONNECT WITH US</h1>
                                    <p>Our team wants to learn more about your project. Take some time to schedule a call and connect with us today. At
                                        Bits Of Dev, we always respect your wishes and privacy and never share information with anyone or project details with people not employed by the company. Your security is our top priority.</p>
                                </div>
                                <form onSubmit={allInfoSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="full_name">Your Full Name</label>
                                                <input type="text" id='full_name' className='form-control'
                                                 value={inputField.full_name}
                                                 onChange={inputsHandler} name='full_name' placeholder='Enter Your Full Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="email">Your Email</label>
                                                <input type="email" id='email' 
                                            value={inputField.email}
                                            onChange={inputsHandler}
                                                className='form-control' name='email' placeholder='Enter Your Email Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-fuild-item">
                                                <label htmlFor="subject">Your Subject</label>
                                                <input type="text" id='subject' 
                                                 value={inputField.subject}
                                                 onChange={inputsHandler}
                                                className='form-control' name='subject' placeholder='Enter Your subject' />
                                            </div>
                                        </div>
                                      
                                        <div className="col-md-12">
                                            <div className="input-fuild-item">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea name="message" 
                                                 value={inputField.message}
                                                 onChange={inputsHandler}
                                                className='form-control' id="message" cols="30" rows="6" placeholder='Enter Your Message'></textarea>
                                            </div>
                                        </div>
                                        <div className="send-btn mt-15">
                                            <button className='btn btn-linear hover-up' type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ContactUsPage.layout = AppLayout;
export default ContactUsPage