"use client";
import React from 'react';
import { products } from '../app/maal/maal';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">

      <Navbar />


      <section
        className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center py-16 px-4"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-xl text-white mb-6 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and stories. Explore a variety of topics that inspire and inform. Dive into our articles today!
        </p>

        <Link href="/products">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            Browse Blog
          </button>
        </Link>
      </section>


      <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={product.image}
                alt={product.heading}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{product.heading}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-1">{product.paragraphs[0]}</p>

                <Link href={`/blog/${product.id}`}>
                  <button className="text-indigo-500 hover:underline">Read Full Article</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
}
