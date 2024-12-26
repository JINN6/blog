'use client';
import { products } from '../../maal/maal'; 
import Navbar from '@/components/Navbar'; 
import { useEffect } from 'react'; 
import Footer from '@/components/Footer'; 
import AOS from 'aos';  
import 'aos/dist/aos.css';  

interface ProductProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductProps) {
  const product = products.find((p) => p.id === params.id) || null;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  if (!product) {
    return (
      <div className="p-6 text-center text-xl text-red-500">
        <h2 className="text-4xl font-semibold text-white">Product Not Found</h2>
        <p>The product you&apos;re looking for does not exist. Please check the link or explore other products.</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-screen-lg mx-auto p-6 bg-black shadow-xl rounded-lg my-8">
        <h1 
          className="lg:text-6xl md:text-4xl text-5xl font-extrabold text-purple-500 text-center mb-8"
          data-aos="fade-up" 
        >
          {product.heading}
        </h1>

        <div className="w-full flex justify-center mb-8">
          <img
            src={product.image}
            alt={product.heading}
            className="w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-auto object-cover rounded-lg shadow-lg"
            data-aos="zoom-in"  
          />
        </div>

        <div className="mt-6 space-y-6 text-white">
          {product.paragraphs.map((para, index) => (
            <p key={index} className="text-lg leading-relaxed" data-aos="fade-up">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-purple-500 mb-6">Join the Conversation</h2>

          <textarea
            className="w-full p-4 border-2 border-purple-600 rounded-lg mb-6 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={4}
            placeholder="Write your comment here..."
            disabled
          />

          <button
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none transform transition duration-300 ease-in-out hover:scale-105"
            disabled
          >
            Add Comment
          </button>

          <div className="mt-8">
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <a
            href="/products"
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
          >
            Back to Products
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
