'use client';

import { getCategories } from '@/lib/api';
import { Facebook, Instagram, Linkedin, Menu, Twitter, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <nav className="bg-[#0E3B3E] text-white relative">
      <div className="max-w-7xl mx-auto py-3 px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden flex items-center gap-2 hover:bg-[#34495E] px-3 py-2 rounded transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button className="flex items-center gap-2 hover:bg-[#34495E] px-3 py-2 rounded transition">
              <Menu className="w-5 h-5" />
              <span className="text-sm">Browse By Category</span>
            </button>

            {isCategoryOpen && (
              <div className="absolute left-0 bg-[#0E3B3E] shadow-lg rounded-lg py-4 px-6 w-64 transition-all">
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category}`}
                      className="capitalize py-2 px-3 rounded hover:bg-[#2C3E50] hover:text-[#00A8A8] transition text-sm font-medium text-center"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-[#00A8A8]">
              Home
            </Link>
            <Link href="#" className="hover:text-[#00A8A8]">
              Easy Monthly Installments
            </Link>
            <Link href="#" className="hover:text-[#00A8A8]">
              Shop by Brands
            </Link>
            <Link href="#" className="hover:text-[#00A8A8]">
              Become a Vendor
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Facebook className="size-5 lg:size-6 cursor-pointer hover:text-[#00A8A8]" />
          <Twitter className="size-5 lg:size-6 cursor-pointer hover:text-[#00A8A8]" />
          <Linkedin className="size-5 lg:size-6 cursor-pointer hover:text-[#00A8A8]" />
          <Instagram className="size-5 lg:size-6 cursor-pointer hover:text-[#00A8A8]" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0E3B3E] border-t border-[#34495E] shadow-lg">
          <div className="px-8 py-4 space-y-4">
            <Link href="/" className="block hover:text-[#00A8A8]">
              Home
            </Link>
            <Link href="#" className="block hover:text-[#00A8A8]">
              Easy Monthly Installments
            </Link>
            <Link href="#" className="block hover:text-[#00A8A8]">
              Shop by Brands
            </Link>
            <Link href="#" className="block hover:text-[#00A8A8]">
              Become a Vendor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
