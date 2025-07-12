import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Financial Highlights', path: '/financial-highlights' },
  { name: 'Customer Management', path: '/customer-management' },
  { name: 'Investor Information', path: '/investor-information' },
  { name: 'New Connection', path: '/new-connection' },
  { name: 'Tenders', path: '/tenders' },
  { name: 'Media Center', path: '/media-center' },
  { name: 'Helpline & Complaints', path: '/helpline-complaints' },
  
];

function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] z-50">
      <div className="container mx-auto px-4 py-2">

        <div className="flex justify-between items-center mb-3">
          <img src="/web_logo_2019.png" alt="SSGC Logo" className="h-12 w-auto" />
          <div className="text-sm text-gray-700 space-x-2 font-medium">
            <button className="hover:underline">English</button> |
            <button className="hover:underline">اردو</button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-3">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />} 
          </button>
        </div>

        {/* Bottom Row: Menu | Search */}
        <div className={`lg:flex justify-between items-center ${isOpen ? 'block' : 'hidden'}`}>
          
          {/* Menu Items */}
          <div className="flex flex-wrap gap-4 text-sm lg:text-base mb-2 lg:mb-0">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-blue-900 font-medium hover:text-orange-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="relative mt-2 lg:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
