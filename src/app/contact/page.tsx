"use client";
import React, { useEffect } from 'react';
import Navbarr from '@/components/Navbarr';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <Navbarr />
            <div className='bg-black'>


                <div className="bg-black">
                    <section className="bg-black text-white py-16" data-aos="fade-up">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-5xl font-extrabold text-green-400">Contact Us</h2>
                                <p className="text-lg text-gray-400 mt-4">
                                    Have any questions or inquiries? Feel free to get in touch with us. We’d love to hear from you!
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                                {/* Left Section with Contact Information */}
                                <div className="md:w-1/2" data-aos="fade-right">
                                    <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
                                    <p className="text-lg text-gray-300 mb-4">
                                        We’re here to assist you with any queries. Reach out to us, and we'll get back to you as soon as possible.
                                    </p>
                                    <ul className="text-gray-400">
                                        <li className="mb-2">📍 Address: 1234 Main Street, Karchi, Pakistan</li>
                                        <li className="mb-2">📞 Phone: +123 456 789</li>
                                        <li className="mb-2">✉️ Email: @yourwebsite.com</li>
                                    </ul>
                                </div>

                                <div className="md:w-1/2" data-aos="fade-left">
                                    <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
                                        <div>
                                            <label htmlFor="name" className="text-lg text-gray-300">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-lg text-gray-300">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="text-lg text-gray-300">Message</label>
                                            <textarea
                                                id="message"
                                                className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                                                placeholder="Your message here"
                                                rows={5}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-green-400 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
