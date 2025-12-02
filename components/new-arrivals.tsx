'use client';

import { getAllProducts, type Product } from '@/lib/api';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(0, 6));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">Loading...</div>
      </section>
    );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="new-arrivals">
      <h2 className="text-3xl font-bold mb-2">
        <span className="text-[#00A8A8]">New</span>
        <span className="text-[#2C3E50]"> Arrivals</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer h-full">
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.title}
                className="w-full h-40 object-contain bg-gray-100"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500 mb-1 capitalize">{product.category}</p>
                <h3 className="font-semibold text-sm text-[#2C3E50] line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-[#00A8A8]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.rating && (
                    <span className="text-xs text-gray-500">⭐ {product.rating.rate}</span>
                  )}
                </div>
                <button className="w-full bg-[#00A8A8] text-white text-xs font-semibold py-2 rounded hover:bg-[#00909A] transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
