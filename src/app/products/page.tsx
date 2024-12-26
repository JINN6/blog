'use client';
import Navbarr from '@/components/Navbarr';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { products } from '../maal/maal';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gpp = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);


    const truncateText = (text: string, numChars: number) => {
        if (text.length > numChars) {
            return text.slice(0, numChars) + "...";
        }
        return text;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbarr />


            <div className="flex justify-center gap-[30px] flex-wrap p-8 bg-gray-200">
                {products.slice(0, 3).map((product) => (
                    <div
                        key={product.id}
                        className="max-w-xs rounded-lg border border-gray-300 shadow-md overflow-hidden bg-white"
                        data-aos="fade-up"
                    >
                        <img
                            src={product.image}
                            alt={product.heading}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-gray-800 text-base mb-4">

                                {truncateText(product.paragraphs[0], 95)}
                            </p>
                            <Link href={`/products/${product.id}`}>
                                <button className="w-full py-2 bg-gray-800 text-white font-semibold rounded focus:outline-none">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex justify-center gap-[30px] flex-wrap p-8 bg-gray-200">
                {products.slice(3, 6).map((product) => (
                    <div
                        key={product.id}
                        className="max-w-xs rounded-lg border border-gray-300 shadow-md overflow-hidden bg-white"
                        data-aos="fade-up"
                    >
                        <img
                            src={product.image}
                            alt={product.heading}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-gray-800 text-base mb-4">

                                {truncateText(product.paragraphs[0], 90)}
                            </p>
                            <Link href={`/products/${product.id}`}>
                                <button className="w-full py-2 bg-gray-800 text-white font-semibold rounded focus:outline-none">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Gpp;
