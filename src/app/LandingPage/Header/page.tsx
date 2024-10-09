// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">StockMarket</Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <div className="space-x-4">
            <Link href="/login">
              <button className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
