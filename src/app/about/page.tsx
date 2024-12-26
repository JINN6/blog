"use client";
import { useState, useEffect } from 'react';
import Navbarr from '@/components/Navbarr';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div>
            <Navbarr />

            <div className="bg-black">
                <section className="bg-black text-white py-16" data-aos="fade-up">
                    <div className="max-w-screen-xl mx-auto px-6">
                        <div className="text-center mb-12" data-aos="fade-up">
                            <h2 className="text-5xl font-extrabold text-green-400">About Us</h2>
                            <p className="text-lg text-gray-400 mt-4">
                                Learn more about our journey, what inspires our content, and why we're dedicated to bringing you the latest insights and stories from across the world.
                            </p>
                        </div>


                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2" data-aos="fade-right">
                                <img
                                    src="/ab.jpg"
                                    alt="About Us Image"
                                    className="w-full rounded-lg shadow-2xl object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 text-left" data-aos="fade-left">
                                <h3 className="text-4xl font-semibold text-white mb-6">About Our Blogs</h3>
                                <p className="text-lg text-gray-300 mb-4">
                                    Welcome to our blog, where we share insightful articles, guides, and stories to inspire and inform. Our goal is to provide valuable content
                                    that helps our readers stay updated, expand their knowledge, and foster meaningful discussions.
                                </p>
                                <p className="text-lg text-gray-300 mb-6">
                                    Whether you're interested in the latest trends, lifestyle tips, or deep dives into various topics, our team of writers is dedicated to
                                    delivering high-quality content that resonates with you. Join us on this journey and explore the world of ideas.
                                </p>
                                <a
                                    href="/contact"
                                    className="px-6 py-3 bg-green-400 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default AboutSection;
