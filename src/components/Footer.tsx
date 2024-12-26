// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
       
          <div className="text-2xl font-semibold">MK Productions</div>

         
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i> 
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram"></i> 
            </a>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Returns</a></li>
              <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-blue-400">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
              />
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

  
        <div className="text-center text-sm mt-8">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
