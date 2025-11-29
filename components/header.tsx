import { Headphones, Heart, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-[#03484D] text-white">
        <div
          className="
            max-w-7xl mx-auto px-4 py-2 
            flex flex-nowrap 
            items-center justify-between 
            gap-4 text-xs
          "
        >
          <div className="flex lg:flex-nowrap items-center gap-4 lg:gap-6">
            <Image
              src="/logo.png"
              alt="Winstore"
              width={150}
              height={150}
              className="w-[100px] xl:w-[150px]"
            />

            <div className="px-0 lg:px-4 py-2 lg:py-3 hidden md:flex items-center w-full lg:w-auto">
              <div
                className="
                  flex items-center h-[38px] rounded-l-md overflow-hidden
                  w-full md:w-auto
                "
              >
                <div className="hidden md:flex items-center px-3 h-full border-r border-[#AEAEAE] bg-white">
                  <select className="text-[#B3B3B3] pr-4 text-[13px] outline-none bg-white">
                    <option>All categories</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Appliances</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Search for products"
                  className="
                    h-full px-3 text-[13px] text-[#ABA3A3] outline-none bg-white
                    w-full lg:w-[400px] md:w-[300px]
                  "
                />
              </div>

              <button className="w-[38px] h-[38px] bg-[#BDBDBD] flex items-center justify-center rounded-r-md">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-4 xl:gap-6 w-full lg:w-auto justify-end">
            <div className="hidden lg:block">
              <span className="text-[9px]">Call Us Now</span>
              <br />
              <div className="flex items-center">
                <Headphones className="size-5" />
                <span className="text-[13px]">+011 5827918</span>
              </div>
              <span className="text-[13px]">Login</span>
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-[#00D4D4] transition">
                <User className="size-5" />
              </Link>

              <Heart className="size-5 cursor-pointer hover:text-[#00D4D4] transition" />

              <Link href="/cart" className="relative flex items-center gap-1">
                <div className="relative">
                  <ShoppingCart className="size-5 hover:text-[#00D4D4] transition" />
                  <span className="absolute -top-2 -right-0 text-[#FDDE3B] text-xs w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                    3
                  </span>
                </div>

                <span className="hidden lg:block">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
