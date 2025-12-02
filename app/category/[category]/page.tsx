'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import { getProductsByCategory, type Product } from '@/lib/api';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CategoryPage() {
  const params = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const category = Array.isArray(params.category) ? params.category[0] : params.category;
      const data = await getProductsByCategory(category as string);
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [params.category]);

  const categoryName = Array.isArray(params.category) ? params.category[0] : params.category;

  return (
    <>
      <Header />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#00A8A8] hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#2C3E50] capitalize mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {loading ? 'Loading...' : `Showing ${products.length} products`}
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-gray-600">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer h-full flex flex-col">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    className="w-full h-48 object-contain bg-gray-100"
                    width={192}
                    height={192}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-sm text-[#2C3E50] line-clamp-2 mb-2 flex-grow">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-[#00A8A8]">
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
        )}
      </main>

      <Footer />
    </>
  );
}
