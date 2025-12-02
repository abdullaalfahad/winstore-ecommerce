import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-8 mb-12 pb-8 border-b border-[#34495E]">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Win store</h3>
            <p className="text-sm text-gray-300 mb-4">Got Questions? Call us 24/7!</p>
            <p className="text-sm text-gray-400">
              03 111 444 144
              <br />
              0317-1770015
            </p>
          </div>

          {/* Trending */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#00A8A8]">Trending</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Installments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Grocery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Health & Beauty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Home Appliances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Mobile Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#00A8A8]">Information</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Shipping & Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#00A8A8]">Customer Care</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Recently Viewed
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Compare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00A8A8]">
                  Become a Vendor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#00A8A8]" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-[#00A8A8]" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#00A8A8]" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#00A8A8]" />
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-400">
            <p className="mb-2">Contact Info</p>
            <p>info@winstore.pk</p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <Image src="/visa-card-generic.png" alt="Visa" className="h-8" width={32} height={32} />
            <Image
              src="/mastercard-logo-abstract.png"
              alt="Mastercard"
              className="h-8"
              width={32}
              height={32}
            />
            <Image src="/cash-payment.jpg" alt="Cash" className="h-8" width={32} height={32} />
            <Image
              src="/payment-methods.png"
              alt="Payment"
              className="h-8"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-[#34495E] text-center text-sm text-gray-400">
          © 2021 Winstore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
