import React from 'react'
import AppLayout from '../component/Layout/Layout';

const ContactUsPage = () => {
    return (
        <>
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-10 col-lg-12">
                            <div className="contact-us-wrapper">
                                <div className="contact-us-header">
                                    <h1>CONNECT WITH US</h1>
                                    <p>Our team wants to learn more about your project. Take some time to schedule a call and connect with us today. At
                                        Bits Of Dev, we always respect your wishes and privacy and never share information with anyone or project details with people not employed by the company. Your security is our top priority.</p>
                                </div>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="fast_name">Your First Name</label>
                                                <input type="text" id='fast_name' className='form-control' name='fast_name' placeholder='Enter Your First Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="last_name">Your Last Name</label>
                                                <input type="text" className='form-control' id='last_name' name='last_name' placeholder='Enter Your Last Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="email_name">Your Email</label>
                                                <input type="email" id='email_name' className='form-control' name='email_name' placeholder='Enter Your Email Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="subject">Your Subject</label>
                                                <input type="text" id='subject' className='form-control' name='subject' placeholder='Enter Your subject' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="address">Your Address</label>
                                                <input type="text" id='address' className='form-control' name='address' placeholder='Enter Your Address' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-fuild-item">
                                                <label htmlFor="number">Your Number</label>
                                                <input type="number" id='number' className='form-control' name='number' placeholder='Enter Your Number' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-fuild-item">
                                                <label htmlFor="description">Description</label>
                                                <textarea name="description" className='form-control' id="description" cols="30" rows="6" placeholder='Enter Your Description'></textarea>
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