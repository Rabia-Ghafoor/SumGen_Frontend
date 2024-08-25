  'use client'
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Rilla ++</h2>
            <p className="mb-2">4517 Washington Ave</p>
            <p className="mb-4">info@rellaai.mail</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-500">Twitter</Link>
              <Link href="#" className="text-white hover:text-blue-500">Instagram</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.rilla.com/demo" className="text-gray-400 hover:text-white">Book a demo</Link></li>
              <li><Link href="" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Download Rilla</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="https://jobs.ashbyhq.com/rilla" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="https://www.rilla.com/customers" className="text-gray-400 hover:text-white">Customers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.rilla.com/demo" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="https://www.rilla.com/rilla-labs" className="text-gray-400 hover:text-white">Rilla labs</Link></li>
              <li><Link href="https://www.rilla.com/reports" className="text-gray-400 hover:text-white">Reports</Link></li>
            </ul>
          </div>
        
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter to get the latest Rilla AI news</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full"
              id='email'
              autoComplete='True'
            />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white mr-4">Privacy & Cookie Policy</Link>
          </div>
          <div className="text-gray-400">
            Rilla ++ 2024 ©
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;