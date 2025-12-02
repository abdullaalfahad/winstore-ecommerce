'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import { getProductById, type Product } from '@/lib/api';
import { ChevronLeft, Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(params.id as string);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <>
        <Header />
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">Loading...</div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">Product not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Link href="/" className="flex items-center gap-2 text-[#00A8A8] hover:underline mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-b from-[#F5F1E8] to-[#E8DFD0] rounded-lg p-8 flex items-center justify-center min-h-96">
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.title}
              className="max-h-96 max-w-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm text-gray-500 capitalize mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{product.title}</h1>
            </div>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < Math.round(product.rating!.rate) ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-[#00A8A8]">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <label className="font-semibold text-[#2C3E50]">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#2C3E50] hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#2C3E50] hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[#00A8A8] text-white text-lg font-semibold py-4 rounded hover:bg-[#00909A] transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button className="flex-shrink-0 px-6 py-4 border-2 border-[#00A8A8] text-[#00A8A8] rounded hover:bg-[#00A8A8] hover:text-white transition">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Product Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Category:</strong> <span className="capitalize">{product.category}</span>
                </li>
                <li>
                  <strong>SKU:</strong> {`PROD-${product.id}`}
                </li>
                <li>
                  <strong>In Stock:</strong> <span className="text-[#00A8A8]">Yes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
