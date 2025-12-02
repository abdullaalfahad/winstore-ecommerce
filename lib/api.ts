const API_BASE = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface Category {
  id?: string;
  name: string;
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/products`, { next: { revalidate: 3600 } });
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return getStaticProducts();
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/products/categories`, { next: { revalidate: 3600 } });
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE}/products/category/${category}`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
}

export async function getProductById(id: string | number): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

// Static fallback data when API fails
function getStaticProducts(): Product[] {
  return [
    {
      id: 1,
      title: 'Fjallraven Backpack',
      price: 109.95,
      description: 'Your perfect pack for everyday adventures.',
      category: 'electronics',
      image: '/colorful-backpack-on-wooden-table.png',
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: 'Mens Casual T-Shirt',
      price: 22.3,
      description: 'Slim-fitting style, contrast raglan long sleeve.',
      category: "men's clothing",
      image: '/plain-white-tshirt.png',
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: 'Wireless Headphones',
      price: 45.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      category: 'electronics',
      image: '/diverse-people-listening-headphones.png',
      rating: { rate: 4.6, count: 430 },
    },
    {
      id: 4,
      title: 'Gold Plated Pendant',
      price: 15.99,
      description: 'Beautiful gold plated pendant necklace.',
      category: 'jewelery',
      image: '/ornate-silver-pendant.png',
      rating: { rate: 4.3, count: 88 },
    },
  ];
}
