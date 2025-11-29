const API_BASE = 'https://fakestoreapi.com';

export interface Category {
  id?: string;
  name: string;
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
