'use client';

import { getCategories, getProductsByCategory, type Product } from '@/lib/api';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BestDeals() {
  const [activeTab, setActiveTab] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [deals, setDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
      if (cats.length > 0) {
        const products = await getProductsByCategory(cats[0]);
        setDeals(products.slice(0, 4));
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const handleTabChange = async (index: number) => {
    setActiveTab(index);
    setLoading(true);
    if (categories[index]) {
      const products = await getProductsByCategory(categories[index]);
      setDeals(products.slice(0, 4));
    }
    setLoading(false);
  };

  if (!categories.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-[#00A8A8]">Best</span>
          <span className="text-[#2C3E50]"> Deals</span>
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <div className="flex gap-6">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleTabChange(index)}
                className={`text-sm font-semibold pb-2 border-b-2 transition capitalize whitespace-nowrap ${
                  activeTab === index
                    ? 'text-[#00A8A8] border-[#00A8A8]'
                    : 'text-gray-500 border-transparent hover:text-[#2C3E50]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          deals.map((deal, index) => (
            <Link key={deal.id} href={`/product/${deal.id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer h-full">
                {/* Image Container */}
                <div className="relative bg-gradient-to-b from-[#F5F1E8] to-[#E8DFD0] h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={deal.image || '/placeholder.svg'}
                    alt={deal.title}
                    className="h-full object-contain"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-center">
                      <div>
                        <div className="text-xs">Save</div>
                        <div className="text-lg">15%</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2 line-clamp-2">
                    {deal.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-[#2C3E50]">
                      ${deal.price.toFixed(2)}
                    </span>
                    {deal.rating && (
                      <span className="text-sm text-gray-500">⭐ {deal.rating.rate}</span>
                    )}
                  </div>

                  <button className="w-full bg-[#00A8A8] text-white text-sm font-semibold py-2 rounded hover:bg-[#00909A] transition flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
